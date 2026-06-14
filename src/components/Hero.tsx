"use client";
import { useEffect, useRef, useState } from "react";

const EKG = () => (
  <svg viewBox="0 0 600 80" className="ekg-container ekg-glow" style={{ width: "100%", maxWidth: 600, height: 80 }} preserveAspectRatio="xMidYMid meet">
    <path
      className="ekg-path"
      d="M0,40 L60,40 L80,40 L90,15 L100,65 L110,5 L120,75 L130,40 L160,40 L180,40 L190,20 L200,60 L208,10 L216,70 L224,40 L260,40 L280,40 L290,18 L298,62 L306,8 L314,72 L322,40 L360,40 L380,40 L390,22 L398,58 L406,12 L414,68 L422,40 L460,40 L490,40 L500,17 L510,63 L518,7 L526,73 L534,40 L600,40"
      stroke="#00d4ff"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0,40 L600,40"
      stroke="rgba(0,212,255,0.15)"
      strokeWidth="1"
      strokeDasharray="4 6"
    />
  </svg>
);

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 60;
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref} className="data-counter">{count}{suffix}</div>;
};

const stats = [
  { label: "心臟外科專科", icon: "♥", value: null, text: "資深醫師" },
  { label: "社區義診場次", icon: "🏥", value: 200, suffix: "+" },
  { label: "媒體節目分享", icon: "📡", value: 50, suffix: "+" },
  { label: "民眾健康服務", icon: "👥", value: 10000, suffix: "+" },
];

export default function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 50);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="grid-bg scanline"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #000814 0%, #00111f 60%, #000814 100%)",
        paddingTop: 80,
      }}
    >
      {/* Radial glow bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,102,255,0.12) 0%, transparent 70%)",
      }} />

      {/* Corner decorations */}
      <div style={{ position: "absolute", top: 20, left: 20, width: 60, height: 60, borderTop: "2px solid rgba(0,212,255,0.5)", borderLeft: "2px solid rgba(0,212,255,0.5)" }} />
      <div style={{ position: "absolute", top: 20, right: 20, width: 60, height: 60, borderTop: "2px solid rgba(0,212,255,0.5)", borderRight: "2px solid rgba(0,212,255,0.5)" }} />
      <div style={{ position: "absolute", bottom: 80, left: 20, width: 60, height: 60, borderBottom: "2px solid rgba(0,212,255,0.3)", borderLeft: "2px solid rgba(0,212,255,0.3)" }} />
      <div style={{ position: "absolute", bottom: 80, right: 20, width: 60, height: 60, borderBottom: "2px solid rgba(0,212,255,0.3)", borderRight: "2px solid rgba(0,212,255,0.3)" }} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 4 : 2,
            height: i % 3 === 0 ? 4 : 2,
            borderRadius: "50%",
            background: i % 4 === 0 ? "rgba(255,0,60,0.6)" : "rgba(0,212,255,0.5)",
            left: `${(i * 8.3) % 100}%`,
            top: `${20 + (i * 7) % 60}%`,
            boxShadow: i % 4 === 0 ? "0 0 8px rgba(255,0,60,0.8)" : "0 0 8px rgba(0,212,255,0.8)",
            animation: `float ${3 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}

      {/* Main content */}
      <div style={{ textAlign: "center", maxWidth: 800, padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: "1px solid rgba(0,212,255,0.4)", borderRadius: 2,
          padding: "6px 20px", marginBottom: 32,
          background: "rgba(0,212,255,0.05)",
          fontSize: "0.75rem", letterSpacing: 3, color: "rgba(0,212,255,0.9)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 8px rgba(0,212,255,1)", animation: "blink 1.5s infinite" }} />
          CARDIAC SURGEON ／ 心臟外科專科醫師
        </div>

        {/* Name */}
        <h1
          className="glitch text-glow-cyan"
          data-text="袁明琦醫師"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 10vw, 6rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 8,
            letterSpacing: 4,
          }}
        >
          袁明琦醫師
        </h1>

        <p style={{ fontSize: "1rem", color: "rgba(0,212,255,0.6)", letterSpacing: 6, marginBottom: 24, fontWeight: 300 }}>
          DR. YUAN MING-CHI
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 2, marginBottom: 40, maxWidth: 580, margin: "0 auto 40px" }}>
          仁心仁術守護心臟健康，透過媒體傳播心臟知識<br />
          讓每一顆跳動的心滿懷喜悅
        </p>

        {/* EKG */}
        <div style={{ margin: "32px 0" }}>
          <EKG />
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <a href="#videos" className="btn-neon btn-neon-cyan">
            ▶ 觀看節目影片
          </a>
          <a href="#health-tips" className="btn-neon btn-neon-solid">
            ♥ 心臟保健知識
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(0,8,20,0.8)",
        borderTop: "1px solid rgba(0,212,255,0.15)",
        backdropFilter: "blur(8px)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 16 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1, minWidth: 120 }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 4 }}>{s.icon}</div>
              {s.value ? (
                <Counter target={s.value} suffix={s.suffix} />
              ) : (
                <div className="data-counter" style={{ fontSize: "1.2rem" }}>{s.text}</div>
              )}
              <div style={{ fontSize: "0.72rem", color: "rgba(0,212,255,0.6)", letterSpacing: 2, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 120, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: "0.65rem", color: "rgba(0,212,255,0.4)", letterSpacing: 3 }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, rgba(0,212,255,0.6), transparent)", animation: "float 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
