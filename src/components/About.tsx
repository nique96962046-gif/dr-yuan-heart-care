const cards = [
  {
    icon: "⚕️",
    title: "精湛醫術",
    desc: "專精心臟外科手術，具備豐富臨床經驗，以高超技術和細膩的醫療態度，協助無數患者重獲心臟健康，找回生命活力。",
    color: "#00d4ff",
  },
  {
    icon: "🏥",
    title: "社區義診",
    desc: "深入偏鄉與社區，舉辦免費義診活動，讓醫療資源不足的民眾也能獲得專業心臟檢查與諮詢，實踐醫者仁心的精神。",
    color: "#ff003c",
    featured: true,
  },
  {
    icon: "📡",
    title: "醫學推廣",
    desc: "積極參與各類電視節目和媒體，以淺顯易懂的方式向大眾傳遞心臟健康知識，提升全民心臟保健意識與自我照護能力。",
    color: "#00d4ff",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0", background: "rgba(13,16,64,0.7)", position: "relative", overflow: "hidden" }}>
      {/* Background dot pattern */}
      <div className="dot-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>關於醫師</div>
          <h2 className="section-title">守護心臟的使命</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            從手術台到社區，從診間到螢光幕，袁明琦醫師用行動傳遞愛與關懷
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 64 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: 4,
                padding: "40px 32px",
                textAlign: "center",
                transition: "all 0.3s ease",
                background: c.featured ? "rgba(255,0,60,0.06)" : "rgba(0,212,255,0.03)",
                borderColor: c.featured ? "rgba(255,0,60,0.3)" : "rgba(0,212,255,0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />

              <div style={{ fontSize: "2.4rem", marginBottom: 20 }}>{c.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700,
                color: c.color, marginBottom: 12,
                textShadow: `0 0 20px ${c.color}60`,
              }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission quote */}
        <div style={{
          background: "rgba(10,10,46,0.8)",
          border: "1px solid rgba(0,212,255,0.2)",
          borderRadius: 4,
          padding: "56px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative brackets */}
          <div style={{ position: "absolute", top: 20, left: 24, width: 30, height: 30, borderTop: "2px solid rgba(0,212,255,0.5)", borderLeft: "2px solid rgba(0,212,255,0.5)" }} />
          <div style={{ position: "absolute", bottom: 20, right: 24, width: 30, height: 30, borderBottom: "2px solid rgba(0,212,255,0.5)", borderRight: "2px solid rgba(0,212,255,0.5)" }} />
          {/* Progress line */}
          <div className="progress-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2 }} />

          <p style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.85)", lineHeight: 1.9, marginBottom: 24,
            maxWidth: 600, margin: "0 auto 24px",
          }}>
            「每一顆心臟都值得最好的照護。<br />
            醫學知識不應只在診間，更要走入每個家庭。」
          </p>
          <div style={{ fontSize: "0.88rem", color: "rgba(0,212,255,0.7)", letterSpacing: 2 }}>
            — 袁明琦醫師
          </div>
        </div>
      </div>
    </section>
  );
}
