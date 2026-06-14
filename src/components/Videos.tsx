"use client";

export default function Videos() {
  return (
    <section id="videos" style={{ padding: "100px 0", background: "transparent", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg scanline" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>節目影片</div>
          <h2 className="section-title">媒體衛教分享</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            袁醫師於節目中分享心臟與醫學知識，帶您了解身體的奧秘
          </p>
        </div>

        {/* YouTube */}
        <div className="video-card">
          <div className="video-header">
            <div className="video-dot" style={{ background: "#ff0000", boxShadow: "0 0 8px rgba(255,0,0,0.9)" }} />
            <span className="video-label-text" style={{ color: "rgba(255,80,80,0.8)" }}>YOUTUBE LIVE ／ 完整直播節目</span>
            <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(255,80,80,0.4)", fontFamily: "monospace" }}>
              YT_LIVE_001
            </span>
          </div>

          <div style={{ background: "#000", borderBottom: "1px solid rgba(255,50,50,0.2)", position: "relative", paddingTop: "56.25%" }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              src="https://www.youtube.com/embed/zZptoz_2FOQ"
              title="袁明琦醫師 心臟健康完整直播節目"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div style={{ padding: "20px 24px", display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "#ff5050", marginBottom: 8, textShadow: "0 0 12px rgba(255,0,0,0.4)" }}>
                ▸ 完整直播節目｜心臟健康全方位講座
              </h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
                袁明琦醫師完整直播節目，深入探討心臟疾病預防、治療與日常保健，歡迎隨時重播學習，掌握完整心臟健康知識。
              </p>
            </div>
            <a
              href="https://www.youtube.com/live/zZptoz_2FOQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-red"
              style={{ whiteSpace: "nowrap", alignSelf: "center" }}
            >
              ▶ YouTube 觀看
            </a>
          </div>
        </div>

        {/* Facebook links */}
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: "0.8rem", letterSpacing: 3, color: "rgba(0,212,255,0.4)", textAlign: "center", marginBottom: 8 }}>
            MORE VIDEOS · 更多影片
          </p>
          {[
            { href: "https://www.facebook.com/share/v/17ykdE1Luy/", label: "▸ 心臟健康衛教分享" },
            { href: "https://www.facebook.com/share/v/1DaynET9PE/", label: "▸ 醫學常識教學" },
            { href: "https://www.facebook.com/share/r/14eiqH8bH1F/", label: "▸ 心臟保健精華短片" },
          ].map((v, i) => (
            <a
              key={i}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 16, padding: "14px 20px",
                background: "rgba(13,16,64,0.7)", border: "1px solid #1a3a5c", borderRadius: 8,
                color: "#00d4ff", fontSize: "0.95rem", textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <span style={{ fontSize: "1.4rem" }}>▶</span>
              <span>{v.label}</span>
              <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "rgba(0,212,255,0.4)", fontFamily: "monospace" }}>
                Facebook →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
