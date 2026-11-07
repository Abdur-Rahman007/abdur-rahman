import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resizeCanvas();

    const nodes = Array.from({ length: width < 640 ? 20 : 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(2, 8, 23, 0.05)";
      ctx.fillRect(0, 0, width, height);
      nodes.forEach((node, i) => {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
        }
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < (width < 640 ? 100 : 150)) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / 500})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    };
    const tick = () => {
      draw();
      animationId = requestAnimationFrame(tick);
    };
    const onResize = () => {
      resizeCanvas();
      if (reduceMotion) draw();
    };
    window.addEventListener("resize", onResize);
    if (reduceMotion) draw();
    else tick();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        background: "linear-gradient(135deg, #020817 0%, #0f172a 100%)",
      }}
    />
  );
}
