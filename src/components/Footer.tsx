"use client";
const navCols = [
  {
    title: "快速導覽",
    links: [
      { href: "#about", label: "關於醫師" },
      { href: "#videos", label: "節目影片" },
      { href: "#health-tips", label: "心臟保健" },
      { href: "#charity", label: "義診公益" },
    ],
  },
  {
    title: "健康資源",
    links: [
      { href: "#health-tips", label: "心臟保健知識" },
      { href: "#health-tips", label: "警示症狀認識" },
      { href: "#cpr", label: "CPR急救知識" },
    ],
  },
  {
    title: "緊急資訊",
    links: [
      { href: "tel:119", label: "緊急救護：119", accent: true },
      { href: "tel:1925", label: "衛福部專線：1925", accent: true },
      { href: "#contact", label: "就近急診室" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#000510", borderTop: "1px solid rgba(0,212,255,0.15)" }}>
      {/* Top accent */}
      <div className="progress-bar" style={{ height: 2 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 64, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <svg viewBox="0 0 28 28" style={{ width: 28, height: 28 }}>
                <path d="M14 24s-10-6.5-10-14a7 7 0 0 1 10-6.08A7 7 0 0 1 24 10c0 7.5-10 14-10 14z" fill="rgba(255,0,60,0.15)" stroke="#ff003c" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 4px rgba(255,0,60,0.7))" }} />
                <polyline points="7,14 9,10 11,18 13,12 15,14 21,14" stroke="#00d4ff" strokeWidth="1.2" fill="none" style={{ filter: "drop-shadow(0 0 3px rgba(0,212,255,0.8))" }} />
              </svg>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>袁明琦醫師</span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,212,255,0.5)", letterSpacing: 1 }}>守護心臟健康，從了解開始</p>
            <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
              {["·", "·", "·"].map((d, i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(0,212,255,0.3)", animation: `blink ${1 + i * 0.3}s ease-in-out infinite` }} />
              ))}
            </div>
          </div>

          {/* Nav cols */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {navCols.map((col, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(0,212,255,0.7)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
                  {col.title}
                </h4>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {col.links.map((l, j) => (
                    <li key={j} style={{ marginBottom: 10 }}>
                      <a
                        href={l.href}
                        style={{
                          fontSize: "0.83rem",
                          color: (l as { accent?: boolean }).accent ? "rgba(255,0,60,0.7)" : "rgba(255,255,255,0.4)",
                          transition: "color 0.3s",
                          display: "block",
                        }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#00d4ff"}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = (l as { accent?: boolean }).accent ? "rgba(255,0,60,0.7)" : "rgba(255,255,255,0.4)"}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(0,212,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
            © 2025 袁明琦醫師官方網站．All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(0,212,255,0.3)" }}>
            本網站資訊僅供衛教參考，不代替專業醫療建議
          </p>
        </div>
      </div>
    </footer>
  );
}
