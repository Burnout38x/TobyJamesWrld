import { useEffect, useRef } from 'react';

export default function Orb({ paused }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current, ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame, width = 0, height = 0, visible = true, angle = 0, last = 0;
    const points = Array.from({ length: 1400 }, (_, i) => {
      const y = 1 - (i / 1399) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = i * Math.PI * (3 - Math.sqrt(5));
      return [Math.cos(theta) * radius, y, Math.sin(theta) * radius];
    });
    const draw = (time = 0) => {
      if (!width || !height) return;
      if (!paused && !reduced.matches && visible && !document.hidden) angle += Math.min(time - last, 40) * 0.00012;
      last = time;
      ctx.clearRect(0, 0, width, height);
      const size = Math.min(width, height) * .365, cx = width / 2, cy = height / 2;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 1.4);
      glow.addColorStop(0, 'rgba(132,159,197,.10)'); glow.addColorStop(.7, 'rgba(112,139,180,.035)'); glow.addColorStop(1, 'rgba(112,139,180,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
      const projected = points.map(([x, y, z], i) => {
        const a = angle + y * .25, nx = x * Math.cos(a) - z * Math.sin(a), nz = x * Math.sin(a) + z * Math.cos(a);
        const ny = y * .94 - nz * .34, zz = y * .34 + nz * .94;
        const pulse = 1 + Math.sin(i * .035 + angle * 3) * .022;
        return { x: cx + nx * size * pulse, y: cy + ny * size * pulse, z: zz, i };
      }).sort((a,b) => a.z - b.z);
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(-.45);
      for (let j = 0; j < 3; j++) {
        ctx.strokeStyle = `rgba(195,210,231,${.12 + j * .04})`; ctx.lineWidth = .7;
        ctx.beginPath(); ctx.ellipse(0, 0, size * (1.26 + j * .055), size * (.32 + j * .04), 0, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.restore();
      projected.forEach(p => {
        const opacity = .15 + (p.z + 1) / 2 * .75;
        ctx.fillStyle = p.i % 23 === 0 ? `rgba(226,199,155,${opacity})` : `rgba(186,204,230,${opacity})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.i % 23 === 0 ? 2.1 : .65 + (p.z + 1) * .48, 0, Math.PI * 2); ctx.fill();
      });
      if (!paused && !reduced.matches && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect(); width = rect.width; height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2); canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr,0,0,dpr,0,0); cancelAnimationFrame(frame); draw();
    };
    const restart = () => { cancelAnimationFrame(frame); last = performance.now(); draw(last); };
    const observer = new ResizeObserver(resize); observer.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); }); visibility.observe(canvas);
    reduced.addEventListener('change', restart); document.addEventListener('visibilitychange', restart);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); visibility.disconnect(); reduced.removeEventListener('change', restart); document.removeEventListener('visibilitychange', restart); };
  }, [paused]);
  return <canvas ref={ref} className="orb-canvas" aria-hidden="true" />;
}
