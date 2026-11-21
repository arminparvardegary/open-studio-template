type P = { className?: string; style?: React.CSSProperties };

export const ArrowRight = ({ className = "arr", style }: P) => (
  <svg className={className} style={style} viewBox="0 0 14 14" aria-hidden="true">
    <path d="M1 7h11M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
export const ArrowLeft = ({ className = "arr", style }: P) => (
  <svg className={className} style={style} viewBox="0 0 14 14" aria-hidden="true">
    <path d="M13 7H2M6 3L2 7l4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
export const ArrowUpRight = ({ className = "arr", style }: P) => (
  <svg className={className} style={style} viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2 10L10 2M4 2h6v6" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
