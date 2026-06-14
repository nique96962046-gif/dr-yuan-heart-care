"use client";
import { useState } from "react";

const tabs = [
  { id: "prevention", label: "預防保健" },
  { id: "symptoms", label: "警示症狀" },
  { id: "lifestyle", label: "生活習慣" },
  { id: "diet", label: "飲食建議" },
];

const content: Record<string, { icon: string; title: string; desc: string; urgent?: boolean }[]> = {
  prevention: [
    { icon: "🩺", title: "定期心臟檢查", desc: "40歲以上建議每年進行心電圖及心臟超音波檢查，及早發現潛在問題。有家族病史者應提前至35歲開始定期追蹤。" },
    { icon: "💓", title: "監測血壓血脂", desc: "高血壓是心臟病的頭號殺手。建議家中備有血壓計，每天固定時間量測，維持血壓在120/80 mmHg以下為最佳。" },
    { icon: "💪", title: "規律有氧運動", desc: "每週至少150分鐘中等強度有氧運動，如快走、游泳、騎腳踏車，可有效強化心肌功能，降低心臟病風險達30%。" },
    { icon: "😴", title: "充足優質睡眠", desc: "每晚7-8小時睡眠是心臟修復的黃金時間。長期睡眠不足會增加心臟病和中風風險，保持規律作息至關重要。" },
  ],
  symptoms: [
    { icon: "💔", title: "胸口疼痛或壓迫感", desc: "突然出現胸口悶痛、壓迫感或燒灼感，特別是延伸至左臂、下巴或背部，可能是心肌梗塞的徵兆，應立即就醫。", urgent: true },
    { icon: "⚡", title: "心跳異常", desc: "心跳突然加速、過慢、不規律跳動或感覺心臟「漏拍」，可能是心律不整的症狀，需要及時接受心電圖檢查。", urgent: true },
    { icon: "🌬️", title: "呼吸困難", desc: "在輕度活動或休息時出現氣喘，躺下時呼吸困難，或夜間突然喘不過氣，可能是心臟衰竭的早期信號。", urgent: true },
    { icon: "😵", title: "暈眩或昏厥", desc: "突然感到頭暈目眩、眼前發黑甚至短暫昏厥，可能與心臟輸血功能異常有關，切勿輕忽，應儘速就醫評估。", urgent: true },
  ],
  lifestyle: [
    { icon: "🚭", title: "戒菸遠離二手菸", desc: "吸菸者心臟病風險是非吸菸者的2-4倍。戒菸後1年，心臟病風險降低一半；戒菸15年後，風險接近從未吸菸者。" },
    { icon: "🍷", title: "適量飲酒", desc: "過量飲酒會升高血壓和心律不整風險。建議男性每日酒精不超過30克，女性不超過15克，最好完全不飲酒。" },
    { icon: "🧘", title: "壓力管理", desc: "長期壓力導致腎上腺素升高，傷害心臟血管。建議透過冥想、瑜伽、深呼吸或嗜好活動來有效紓解壓力。" },
    { icon: "⚖️", title: "維持健康體重", desc: "BMI維持在18.5-24.9之間，腰圍男性不超過90公分、女性不超過80公分，可大幅降低心臟代謝症候群風險。" },
  ],
  diet: [
    { icon: "🥗", title: "增加蔬果攝取", desc: "每天至少攝取5份蔬果，富含的抗氧化劑、膳食纖維和植化素能降低心血管疾病風險，深色蔬菜效果尤佳。" },
    { icon: "🐟", title: "選擇好油脂", desc: "以橄欖油、苦茶油取代動物油，多攝取富含Omega-3的深海魚類（鮭魚、鯖魚）和堅果，有助降低壞膽固醇。" },
    { icon: "🧂", title: "減少鈉鹽攝取", desc: "每日鈉攝取量不超過2000毫克（約5克食鹽）。少吃加工食品、醃製品、泡麵等高鈉食物，有助控制血壓。" },
    { icon: "🌾", title: "選擇全穀雜糧", desc: "以糙米、燕麥、全麥麵包取代精製白米白麵，豐富的膳食纖維能降低血脂、穩定血糖，保護心血管健康。" },
  ],
};

export default function HealthTips() {
  const [active, setActive] = useState("prevention");
  const tips = content[active];

  return (
    <section id="health-tips" style={{ padding: "100px 0", background: "rgba(13,16,64,0.7)", position: "relative" }}>
      <div className="dot-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>心臟保健</div>
          <h2 className="section-title">守護心臟的日常</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            袁醫師推薦的心臟保健知識，從生活細節開始守護您的心臟
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-btn ${active === t.id ? "active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {tips.map((tip, i) => (
            <div key={`${active}-${i}`} className={`tip-card ${tip.urgent ? "urgent" : ""}`}>
              <div style={{
                position: "absolute", top: 16, right: 16,
                fontSize: "0.7rem", fontFamily: "monospace",
                color: tip.urgent ? "rgba(255,0,60,0.5)" : "rgba(0,212,255,0.4)",
                letterSpacing: 1,
              }}>
                {tip.urgent ? "ALERT" : `0${i + 1}`}
              </div>
              <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{tip.icon}</div>
              <h4 style={{
                fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700,
                color: tip.urgent ? "rgba(255,0,60,0.9)" : "#00d4ff",
                marginBottom: 10,
                textShadow: tip.urgent ? "0 0 12px rgba(255,0,60,0.4)" : "0 0 12px rgba(0,212,255,0.3)",
              }}>
                {tip.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{tip.desc}</p>
            </div>
          ))}
        </div>

        {/* Emergency notice */}
        {active === "symptoms" && (
          <div style={{
            marginTop: 28,
            padding: "16px 24px",
            background: "rgba(255,0,60,0.06)",
            border: "1px solid rgba(255,0,60,0.3)",
            borderRadius: 4,
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.75)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ fontSize: "1.2rem" }}>🚨</span>
            <span>
              <strong style={{ color: "#ff003c" }}>緊急提醒：</strong>
              若出現上述症狀，請立即撥打
              <strong style={{ color: "#ff003c", textShadow: "0 0 8px rgba(255,0,60,0.6)", marginLeft: 4, marginRight: 4 }}>119</strong>
              或前往急診室，黃金救援時間是挽救生命的關鍵！
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
