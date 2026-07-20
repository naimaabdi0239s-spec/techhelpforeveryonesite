import { useEffect, useRef, useState } from "react";

// Interactive circuit-style globe. Auto-rotates, tilts toward the mouse,
// and can be dragged to spin manually.
export function Globe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(-15);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const velocity = useRef(0.15); // auto-rotate speed (deg per frame)

  // Auto-rotate loop
  useEffect(() => {
    let raf = 0;
    const step = () => {
      if (!dragging.current) {
        setRotY((y) => y + velocity.current);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse tilt (window-wide, subtle)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setTiltY(dx * 12);
      setTiltX(-dy * 8);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onMoveDrag = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    const dy = e.clientY - lastY.current;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
    setRotY((y) => y + dx * 0.5);
    setRotX((x) => Math.max(-60, Math.min(60, x + dy * 0.3)));
    velocity.current = Math.max(-1, Math.min(1, dx * 0.05));
  };
  const onUp = () => {
    dragging.current = false;
    // decay back to gentle auto-spin
    setTimeout(() => (velocity.current = 0.15), 400);
  };

  // Build meridians (vertical ellipses) and parallels (horizontal ellipses)
  const meridians = Array.from({ length: 12 }, (_, i) => (i * 180) / 12);
  const parallels = [15, 30, 45, 60, 75];

  const nodes = [
    { lat: 20, lon: 40 },
    { lat: -10, lon: 120 },
    { lat: 45, lon: -70 },
    { lat: -30, lon: -50 },
    { lat: 10, lon: -110 },
  ];

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-square max-w-[560px] mx-auto select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-6 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #0000a8 0%, transparent 65%)",
        }}
      />
      {/* Accent outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "0 0 0 1px rgba(0,0,168,0.35), 0 0 60px rgba(0,0,168,0.35)",
        }}
      />

      <div
        onPointerDown={onDown}
        onPointerMove={onMoveDrag}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotX + tiltX}deg) rotateY(${rotY + tiltY}deg)`,
          transition: dragging.current ? "none" : "transform 120ms linear",
        }}
      >
        <svg
          viewBox="-110 -110 220 220"
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          <defs>
            <radialGradient id="sphere" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#eef6ff" />
              <stop offset="100%" stopColor="#d6e8f7" />
            </radialGradient>
            <radialGradient id="node" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0000a8" />
              <stop offset="100%" stopColor="#0000a8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Sphere fill */}
          <circle r="100" fill="url(#sphere)" stroke="#0b1f3a" strokeOpacity="0.15" />

          {/* Parallels */}
          {parallels.map((p) => {
            const ry = 100 * Math.cos((p * Math.PI) / 180);
            const y = 100 * Math.sin((p * Math.PI) / 180);
            return (
              <g key={`p${p}`}>
                <ellipse cx="0" cy={-y} rx="100" ry={ry * 0.28} fill="none" stroke="#0b1f3a" strokeOpacity="0.35" strokeWidth="0.5" />
                <ellipse cx="0" cy={y} rx="100" ry={ry * 0.28} fill="none" stroke="#0b1f3a" strokeOpacity="0.35" strokeWidth="0.5" />
              </g>
            );
          })}
          <line x1="-100" y1="0" x2="100" y2="0" stroke="#0b1f3a" strokeOpacity="0.4" strokeWidth="0.6" />

          {/* Meridians */}
          {meridians.map((m) => {
            const rx = 100 * Math.abs(Math.cos((m * Math.PI) / 180));
            return (
              <ellipse
                key={`m${m}`}
                cx="0"
                cy="0"
                rx={rx}
                ry="100"
                fill="none"
                stroke="#0b1f3a"
                strokeOpacity="0.35"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((n, i) => {
            const lat = (n.lat * Math.PI) / 180;
            const lon = (n.lon * Math.PI) / 180;
            const x = 100 * Math.cos(lat) * Math.sin(lon);
            const y = -100 * Math.sin(lat);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="url(#node)">
                  <animate
                    attributeName="r"
                    values="4;9;4"
                    dur={`${2 + i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={x} cy={y} r="1.6" fill="#0000a8" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Orbiting cursor pointer (outside 3D transform so it stays crisp) */}
      <div className="absolute inset-0 pointer-events-none animate-[spin_14s_linear_infinite]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-[#0000a8]/40 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0b1f3a">
              <path d="M4 2l6 18 2.5-7L20 10 4 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}