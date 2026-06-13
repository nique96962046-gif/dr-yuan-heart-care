const steps = [
  "確認環境安全，拍肩呼叫確認意識",
  "立即撥打119，請人取得AED",
  "開始胸部按壓，每分鐘100-120次",
  "AED到場立即使用，持續直到救援到達",
];

export default function CPR() {
  return (
    <section style={{ padding: "72px 0", background: "#0d0000", position: "relative", overflow: "hidden" }}>
      {/* Red glow bg */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,0,60,0.12) 0%, transparent 70%)" }} />
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(255,0,60,0.8), rgba(255,0,60,0.4), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          {/* Text */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.4,
            }}>
              <span style={{ color: "#ff003c", textShadow: "0 0 20px rgba(255,0,60,0.8)" }}>🚨</span>
              {" "}學會CPR，守護身邊的人
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 28, maxWidth: 560 }}>
              心臟停止後每延誤1分鐘，存活率下降7-10%。學習正確的心肺復甦術（CPR）和自動體外去顫器（AED）使用方法，在緊急時刻你就能成為救命英雄。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {steps.map((step, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(255,0,60,0.06)",
                  border: "1px solid rgba(255,0,60,0.2)",
                  borderRadius: 2, padding: "12px 16px",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(255,0,60,0.15)", border: "1px solid rgba(255,0,60,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#ff003c", fontWeight: 700, fontSize: "0.85rem",
                    boxShadow: "0 0 8px rgba(255,0,60,0.3)",
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency callout */}
          <div style={{
            textAlign: "center",
            background: "rgba(255,0,60,0.08)",
            border: "1px solid rgba(255,0,60,0.4)",
            borderRadius: 4, padding: "40px 48px",
            minWidth: 200,
            boxShadow: "0 0 40px rgba(255,0,60,0.2)",
          }}>
            {/* Pulse ring */}
            <div className="pulse-ring" style={{ width: 60, height: 60, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "2rem", position: "relative", zIndex: 1 }}>📞</span>
            </div>
            <div style={{
              fontFamily: "monospace", fontSize: "4rem", fontWeight: 700,
              color: "#ff003c", lineHeight: 1,
              textShadow: "0 0 30px rgba(255,0,60,0.9), 0 0 60px rgba(255,0,60,0.5)",
            }}>
              119
            </div>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginTop: 8 }}>緊急救護專線</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,0,60,0.6)", marginTop: 8, letterSpacing: 1 }}>發現心臟驟停立即撥打</div>
          </div>
        </div>
      </div>
    </section>
  );
}
