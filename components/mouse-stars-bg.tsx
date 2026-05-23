'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function MouseStarsBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Size canvas to its parent (the hero section), not the whole viewport.
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : { width: window.innerWidth, height: window.innerHeight };
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const cssWidth = () => canvas.clientWidth || window.innerWidth;
    const cssHeight = () => canvas.clientHeight || window.innerHeight;

    // Initialize stars in CSS-pixel space.
    const initStars = () => {
      starsRef.current = [];
      const starCount = 180;
      const w = cssWidth();
      const h = cssHeight();
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2.5 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
    };

    initStars();

    // Track mouse position relative to the canvas, not the viewport.
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let rafId = 0;

    // Animation loop
    const animate = () => {
      const w = cssWidth();
      const h = cssHeight();

      // Fully clear so the canvas stays transparent (no brown veil over the page).
      ctx.clearRect(0, 0, w, h);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Attraction to mouse
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.1;
          star.vx += (dx / distance) * force;
          star.vy += (dy / distance) * force;
        }

        // Damping
        star.vx *= 0.95;
        star.vy *= 0.95;

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Boundary conditions - wrap around (in CSS pixels)
        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h;
        if (star.y > h) star.y = 0;

        // Pulsing opacity
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        // Draw star
        ctx.fillStyle = `rgba(212, 175, 55, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        ctx.strokeStyle = `rgba(212, 175, 55, ${star.opacity * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
