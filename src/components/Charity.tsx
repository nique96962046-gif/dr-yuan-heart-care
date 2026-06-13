const features = [
  "免費心臟健康評估",
  "血壓與血脂篩檢",
  "心電圖初步判讀",
  "個人化健康諮詢",
  "用藥安全衛教",
  "轉介後續治療資源",
];

export default function Charity() {
  return (
    <section id="charity" style={{ padding: "100px 0", background: "#000814", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg scanline" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(255,0,60,0.06) 0%, transparent 60%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>義診公益</div>
          <h2 className="section-title">醫療服務．深入社區</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            袁醫師相信每個人都有獲得優質醫療服務的權利，透過義診將專業帶進社區每個角落
          </p>
        </div>

        {/* Content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 40, alignItems: "start" }}>
          {/* Main */}
          <div>
            {/* System panel header */}
            <div style={{
              background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "4px 4px 0 0", padding: "10px 20px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff003c", boxShadow: "0 0 6px rgba(255,0,60,0.8)" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffaa00", boxShadow: "0 0 6px rgba(255,170,0,0.8)" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 6px rgba(0,255,136,0.8)" }} />
              <span style={{ marginLeft: 8, fontSize: "0.72rem", color: "rgba(0,212,255,0.6)", letterSpacing: 2, fontFamily: "monospace" }}>
                CHARITY_MISSION.exe
              </span>
            </div>

            <div style={{
              background: "rgba(0,8,20,0.8)", border: "1px solid rgba(0,212,255,0.2)",
              borderTop: "none", borderRadius: "0 0 4px 4px", padding: "32px",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: 20 }}>🏥</div>
              <h3 style={{
                fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 700,
                color: "#fff", marginBottom: 16,
              }}>
                社區心臟義診
              </h3>
              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 12 }}>
                袁明琦醫師長期投入社區義診服務，深入偏鄉地區和醫療資源不足的社區，提供免費的心臟評估、血壓量測、心電圖檢查及健康諮詢服務。
              </p>
              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 32 }}>
                義診不僅是給予醫療協助，更是傳遞「預防勝於治療」的健康理念，讓更多民眾了解自身心臟狀況，及早預防疾病發生。
              </p>

              {/* Features grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                {features.map((f, i) => (
                  <div key={i} className="charity-feature">
                    <span style={{ color: "#00d4ff", fontWeight: 700, fontFamily: "monospace", fontSize: "0.8rem" }}>
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Quote */}
            <div style={{
              background: "rgba(255,0,60,0.05)", border: "1px solid rgba(255,0,60,0.2)",
              borderRadius: 4, padding: "28px 24px", textAlign: "center",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(255,0,60,0.6), transparent)" }} />
              <div style={{ fontSize: "2rem", marginBottom: 16 }}>❤️</div>
              <blockquote style={{
                fontFamily: "var(--font-serif)", fontSize: "0.95rem",
                color: "rgba(255,255,255,0.75)", lineHeight: 1.9,
                fontStyle: "italic", marginBottom: 16,
              }}>
                「醫療不應該是特權，每一個人無論身在何處，都應該有機會接受良好的心臟保健服務。」
              </blockquote>
              <cite style={{ fontSize: "0.82rem", color: "rgba(255,0,60,0.7)", letterSpacing: 2 }}>
                — 袁明琦醫師
              </cite>
            </div>

            {/* Info card */}
            <div style={{
              background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: 4, padding: "24px",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)" }} />
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#00d4ff", marginBottom: 12 }}>
                🔔 義診資訊
              </h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: 20, lineHeight: 1.7 }}>
                袁醫師定期舉辦社區義診活動，若您的社區或機構有需求，歡迎洽詢合作。
              </p>
              <a href="#contact" className="btn-neon btn-neon-cyan" style={{ display: "block", textAlign: "center" }}>
                了解義診詳情
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #charity .charity-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
