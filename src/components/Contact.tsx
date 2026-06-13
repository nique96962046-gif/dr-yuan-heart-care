const cards = [
  {
    icon: "▶",
    title: "Facebook 粉絲專頁",
    desc: "追蹤袁明琦醫師的 Facebook 專頁，獲取最新節目影片、義診活動訊息及每日健康小提醒。",
    link: "https://www.facebook.com/share/v/17ykdE1Luy/",
    linkText: "前往 Facebook →",
    color: "#00d4ff",
  },
  {
    icon: "📡",
    title: "節目合作邀約",
    desc: "袁醫師積極參與電視節目、廣播及網路媒體，分享心臟健康知識。歡迎各媒體洽詢節目合作邀約。",
    link: "mailto:contact@example.com",
    linkText: "洽詢合作 →",
    color: "#00d4ff",
  },
  {
    icon: "🏥",
    title: "義診合作邀請",
    desc: "若您的機構、社區或企業希望舉辦心臟健康義診活動，歡迎聯絡袁醫師團隊，共同推廣心臟健康。",
    link: "mailto:contact@example.com",
    linkText: "申請義診 →",
    color: "#ff003c",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0", background: "#000c1a", position: "relative" }}>
      <div className="dot-bg" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>聯絡資訊</div>
          <h2 className="section-title">與袁醫師保持連結</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            追蹤袁醫師的社群媒體，掌握最新的義診資訊與健康知識分享
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 40 }}>
          {cards.map((c, i) => (
            <div key={i} className="contact-card">
              {/* Top line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${c.color}80, transparent)` }} />
              {/* Corner brackets */}
              <div style={{ position: "absolute", top: 12, left: 12, width: 16, height: 16, borderTop: `1px solid ${c.color}60`, borderLeft: `1px solid ${c.color}60` }} />
              <div style={{ position: "absolute", bottom: 12, right: 12, width: 16, height: 16, borderBottom: `1px solid ${c.color}60`, borderRight: `1px solid ${c.color}60` }} />

              <div style={{ fontSize: "2.4rem", marginBottom: 20 }}>{c.icon}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 700, color: c.color, marginBottom: 12, textShadow: `0 0 16px ${c.color}50` }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 24 }}>{c.desc}</p>
              <a
                href={c.link}
                target={c.link.startsWith("http") ? "_blank" : undefined}
                rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-block", fontWeight: 600, fontSize: "0.88rem",
                  color: c.color, letterSpacing: 1, transition: "all 0.3s",
                  textShadow: `0 0 12px ${c.color}60`,
                }}
              >
                {c.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          background: "rgba(255,170,0,0.05)", border: "1px solid rgba(255,170,0,0.2)",
          borderRadius: 4, padding: "16px 24px",
          fontSize: "0.83rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
        }}>
          <span style={{ color: "rgba(255,170,0,0.7)" }}>⚠ </span>
          <strong style={{ color: "rgba(255,255,255,0.7)" }}>免責聲明：</strong>
          本網站提供的健康資訊僅供教育參考，不能取代專業醫療診斷與建議。若有任何身體不適或健康疑慮，請務必諮詢合格醫療人員。
        </div>
      </div>
    </section>
  );
}
