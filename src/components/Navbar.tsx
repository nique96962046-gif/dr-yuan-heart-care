"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "關於醫師" },
  { href: "#videos", label: "節目影片" },
  { href: "#health-tips", label: "心臟保健" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "10px 0" : "18px 0",
        background: scrolled ? "rgba(10,10,46,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.2)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 0 30px rgba(0,212,255,0.08)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ position: "relative", width: 32, height: 32 }}>
            <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
              <path
                d="M16 28s-12-7.5-12-16a8 8 0 0 1 12-6.93A8 8 0 0 1 28 12c0 8.5-12 16-12 16z"
                fill="rgba(255,0,60,0.15)"
                stroke="#ff003c"
                strokeWidth="1.5"
                style={{ filter: "drop-shadow(0 0 6px rgba(255,0,60,0.8))" }}
              />
              <line x1="8" y1="16" x2="11" y2="16" stroke="#00d4ff" strokeWidth="1.5" />
              <polyline points="11,16 13,11 15,21 17,13 19,16 24,16" stroke="#00d4ff" strokeWidth="1.5" fill="none" style={{ filter: "drop-shadow(0 0 4px rgba(0,212,255,0.9))" }} />
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", letterSpacing: 1 }}>
            袁明琦醫師
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", listStyle: "none", gap: 4, margin: 0, padding: 0 }} className="nav-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  padding: "8px 16px",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#00d4ff";
                  (e.target as HTMLElement).style.textShadow = "0 0 12px rgba(0,212,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
          className="nav-hamburger"
          aria-label="選單"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: "#00d4ff", borderRadius: 2, boxShadow: "0 0 6px rgba(0,212,255,0.8)", transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(10,10,46,0.97)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24,
          zIndex: 999,
        }}>
          <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "1px solid rgba(0,212,255,0.4)", color: "#00d4ff", width: 40, height: 40, borderRadius: 2, cursor: "pointer", fontSize: "1.2rem" }}>✕</button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "#00d4ff", fontSize: "1.3rem", fontWeight: 600, letterSpacing: 3, textShadow: "0 0 20px rgba(0,212,255,0.6)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
