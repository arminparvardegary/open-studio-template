type Point = { label: string; value: number };

/** Small dependency-free SVG area chart. Colours come from the dashboard CSS variables. */
export function AreaChart({ data, height = 260 }: { data: Point[]; height?: number }) {
  const W = 720, padL = 36, padR = 12, padT = 14, padB = 28;
  const max = Math.ceil(Math.max(...data.map((d) => d.value)) / 40) * 40;
  const x = (i: number) => padL + (i * (W - padL - padR)) / (data.length - 1);
  const y = (v: number) => padT + (1 - v / max) * (height - padT - padB);
  const line = data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`).join(" ");
  const area = `${line} L${x(data.length - 1)} ${height - padB} L${x(0)} ${height - padB}Z`;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t));

  return (
    <svg className="chart" viewBox={`0 0 ${W} ${height}`} role="img" aria-label="Chart: lorem ipsum over the year">
      <defs>
        <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--d-accent)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--d-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {ticks.map((t) => (
        <g key={t}>
          <line className="grid-line" x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} />
          <text x={padL - 8} y={y(t) + 4} textAnchor="end">{t}</text>
        </g>
      ))}
      <path d={area} fill="url(#area-fill)" />
      <path className="line" d={line} />
      {data.map((d, i) => (
        <g key={d.label}>
          {i === data.length - 1 ? <circle className="pt" cx={x(i)} cy={y(d.value)} r="5" /> : null}
          <text x={x(i)} y={height - 8} textAnchor="middle">{d.label}</text>
        </g>
      ))}
    </svg>
  );
}
