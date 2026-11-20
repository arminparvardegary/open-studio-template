"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/content/work";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

const VS = `attribute vec2 a;uniform vec2 uRes;uniform vec4 uR;uniform float uV;varying vec2 vUv;
void main(){vec2 q=uR.xy+a*uR.zw;vec2 c=uR.xy+uR.zw*.5;vec2 p=q;
  p.x+=-uV*.22*(q.y-c.y);
  p.x+=-uV*uR.z*.05*sin(3.14159*a.y);
  p.y+=-uV*.03*(q.x-c.x);
  p.y+=uV*uR.w*.03*sin(3.14159*a.x);
  vUv=vec2(a.x,a.y);
  gl_Position=vec4(p.x/uRes.x*2.-1.,1.-p.y/uRes.y*2.,0.,1.);}`;
const FS = `precision mediump float;varying vec2 vUv;uniform sampler2D uT;uniform float uA;uniform vec2 uSz;
void main(){vec4 c=texture2D(uT,vUv);vec2 p=(vUv-.5)*uSz;vec2 b=uSz*.5-vec2(6.);vec2 d=abs(p)-b;
  float sd=length(max(d,0.))+min(max(d.x,d.y),0.)-6.;float m=1.-smoothstep(-.8,.8,sd);gl_FragColor=c*m*uA;}`;

/**
 * The stack of project cards on the home page.
 * - cards sway sideways while you scroll
 * - if WebGL is available the images are drawn on a canvas so they bend with
 *   scroll speed; otherwise the plain <img> tags are shown
 * - a round "View" cursor follows the mouse over a card
 */
export function ProjectCards({ projects }: { projects: Project[] }) {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootEl = root.current, cv = canvas.current, cur = cursor.current;
    if (!rootEl || !cv || !cur) return;
    const cards = Array.from(rootEl.querySelectorAll<HTMLElement>(".proj__card"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    /* ── WebGL warp (optional) ── */
    type GLApi = { draw: (v: number) => void } | null;
    let GL: GLApi = null;
    const gl = reduce ? null : cv.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: true });
    if (gl) {
      try {
        const sh = (t: number, s: string) => {
          const o = gl.createShader(t)!;
          gl.shaderSource(o, s);
          gl.compileShader(o);
          if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o) ?? "shader");
          return o;
        };
        const pr = gl.createProgram()!;
        gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS));
        gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(pr);
        if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw new Error("link");
        gl.useProgram(pr);
        const N = 18, pos: number[] = [], idx: number[] = [];
        for (let y = 0; y <= N; y++) for (let x = 0; x <= N; x++) pos.push(x / N, y / N);
        for (let y = 0; y < N; y++)
          for (let x = 0; x < N; x++) {
            const i = y * (N + 1) + x;
            idx.push(i, i + 1, i + N + 1, i + 1, i + N + 2, i + N + 1);
          }
        const vb = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vb);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos), gl.STATIC_DRAW);
        const ib = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW);
        const la = gl.getAttribLocation(pr, "a");
        gl.enableVertexAttribArray(la);
        gl.vertexAttribPointer(la, 2, gl.FLOAT, false, 0, 0);
        const U = (n: string) => gl.getUniformLocation(pr, n);
        const uRes = U("uRes"), uR = U("uR"), uV = U("uV"), uA = U("uA"), uSz = U("uSz"), uT = U("uT");
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        const tex: (WebGLTexture | null)[] = cards.map(() => null);
        cards.forEach((c, i) => {
          const im = c.querySelector("img");
          if (!im) return;
          const make = () => {
            try {
              const cn = document.createElement("canvas");
              cn.width = 1396; cn.height = 786;
              cn.getContext("2d")!.drawImage(im, 0, 0, 1396, 786);
              const t = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, t);
              gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
              gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cn);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
              tex[i] = t;
              c.classList.add("gl-ready");
            } catch {
              /* keep the plain <img> */
            }
          };
          if (im.complete && im.naturalWidth) make();
          else im.addEventListener("load", make, { once: true });
        });

        const size = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          cv.width = Math.round(window.innerWidth * dpr);
          cv.height = Math.round(window.innerHeight * dpr);
        };
        size();
        window.addEventListener("resize", size);
        cleanups.push(() => {
          window.removeEventListener("resize", size);
          cards.forEach((c) => c.classList.remove("gl-ready"));
          tex.forEach((t) => t && gl.deleteTexture(t));
          gl.deleteProgram(pr);
          gl.deleteBuffer(vb);
          gl.deleteBuffer(ib);
        });
        GL = {
          draw(v) {
            gl.viewport(0, 0, cv.width, cv.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.uniform2f(uRes, window.innerWidth, window.innerHeight);
            gl.uniform1f(uV, v);
            gl.uniform1i(uT, 0);
            gl.activeTexture(gl.TEXTURE0);
            cards.forEach((c, i) => {
              if (!tex[i]) return;
              const r = (c.querySelector('img') ?? c).getBoundingClientRect();
              if (r.bottom < -120 || r.top > window.innerHeight + 120) return;
              gl.bindTexture(gl.TEXTURE_2D, tex[i]);
              gl.uniform4f(uR, r.left, r.top, r.width, r.height);
              gl.uniform2f(uSz, r.width, r.height);
              gl.uniform1f(uA, 1);
              gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);
            });
          },
        };
      } catch {
        GL = null;
      }
    }

    /* ── cursor ── */
    let cx = -200, cy = -200, tx = -200, ty = -200, cs = 0, ts = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove);
    cleanups.push(() => window.removeEventListener("mousemove", onMove));
    cards.forEach((k) => {
      const on = () => { ts = 1; cur.classList.add("on"); };
      const off = () => { ts = 0; cur.classList.remove("on"); };
      k.addEventListener("mouseenter", on);
      k.addEventListener("mouseleave", off);
      cleanups.push(() => { k.removeEventListener("mouseenter", on); k.removeEventListener("mouseleave", off); });
    });

    /* ── main loop: sway + warp + cursor ── */
    const sway = cards.map(() => 0);
    let lastY = window.scrollY, vel = 0, raf = 0;
    const frame = () => {
      const y = window.scrollY, dy = y - lastY;
      lastY = y;
      vel += (clamp(dy / 42, -1, 1) - vel) * 0.14;
      const vh = window.innerHeight;
      const narrow = window.innerWidth <= 900;
      cards.forEach((c, i) => {
        const a = c.parentElement!;
        const r = a.getBoundingClientRect();
        const d = r.top + r.height / 2 - vh / 2;
        let target = Math.abs(d) < 1050 ? clamp(-0.18 * d, -190, 190) : 0;
        if (narrow || reduce) target = 0;
        sway[i] += (target - sway[i]) * 0.1;
        c.style.setProperty("--sx", sway[i].toFixed(2) + "px");
      });
      GL?.draw(vel);
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18; cs += (ts - cs) * 0.14;
      cur.style.transform = `translate3d(${cx}px,${cy}px,0) scale(${cs})`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    cleanups.push(() => cancelAnimationFrame(raf));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="projs" id="projs" ref={root}>
      {projects.map((p) => (
        <article className="proj" key={p.slug}>
          <Link className="proj__card" href={`/work/${p.slug}`} aria-label={p.title}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={p.image} width={1396} height={786} />
            <div className="proj__cap">
              <span className="n">{p.title}</span>
              <span className="m">{p.meta}</span>
            </div>
          </Link>
        </article>
      ))}
      <canvas className="gl" ref={canvas} aria-hidden="true" />
      <div className="cursor" ref={cursor} aria-hidden="true">View</div>
    </div>
  );
}
