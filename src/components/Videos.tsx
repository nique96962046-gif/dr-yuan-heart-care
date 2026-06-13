"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: () => void } };
  }
}

const fbVideos = [
  {
    href: "https://www.facebook.com/share/v/17ykdE1Luy/",
    title: "心臟健康衛教分享",
    desc: "袁明琦醫師於節目中深入淺出地分享心臟健康知識，讓民眾了解如何預防心臟疾病，守護自身健康。",
    tag: "HEALTH EDUCATION",
  },
  {
    href: "https://www.facebook.com/share/v/1DaynET9PE/",
    title: "醫學常識教學",
    desc: "透過生動的節目形式，袁醫師解析常見心臟問題，提供實用保健建議，讓每個人都能掌握健康知識。",
    tag: "MEDICAL KNOWLEDGE",
  },
  {
    href: "https://www.facebook.com/share/r/14eiqH8bH1F/",
    title: "心臟保健精華短片",
    desc: "袁明琦醫師精彩的節目精華片段，在短短數分鐘內傳遞最重要的心臟健康資訊，隨時增進健康知識。",
    tag: "SHORT REEL",
    reel: true,
  },
];

export default function Videos() {
  useEffect(() => {
    const parse = () => {
      if (window.FB) window.FB.XFBML.parse();
    };
    const timer = setTimeout(parse, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="videos" style={{ padding: "100px 0", background: "#000814", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg scanline" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>節目影片</div>
          <h2 className="section-title">媒體衛教分享</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            袁醫師於各大節目分享心臟與醫學知識，帶您了解身體的奧秘
          </p>
        </div>

        {/* ── Featured YouTube Live ── */}
        <div className="video-card" style={{ marginBottom: 32 }}>
          <div className="video-header">
            <div className="video-dot" style={{ background: "#ff0000", boxShadow: "0 0 8px rgba(255,0,0,0.9)" }} />
            <span className="video-label-text" style={{ color: "rgba(255,80,80,0.8)" }}>YOUTUBE LIVE ／ 完整直播節目</span>
            <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(255,80,80,0.4)", fontFamily: "monospace" }}>
              YT_LIVE_001
            </span>
          </div>

          <div style={{
            background: "#000",
            borderBottom: "1px solid rgba(255,50,50,0.2)",
            position: "relative",
            paddingTop: "56.25%",
          }}>
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

        {/* ── Facebook Videos ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 24,
          fontSize: "0.72rem", letterSpacing: 3, color: "rgba(0,212,255,0.5)",
        }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3))" }} />
          FACEBOOK 節目精華
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,212,255,0.3), transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 48 }}>
          {fbVideos.map((v, i) => (
            <div key={i} className="video-card">
              <div className="video-header">
                <div className="video-dot" />
                <span className="video-label-text">{v.tag}</span>
                <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(0,212,255,0.4)", fontFamily: "monospace" }}>
                  FB_{String(i + 1).padStart(3, "0")}
                </span>
              </div>

              <div style={{
                background: "#000c1a",
                minHeight: v.reel ? 360 : 280,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
                borderBottom: "1px solid rgba(0,212,255,0.1)",
              }}>
                <div
                  className="fb-video"
                  data-href={v.href}
                  data-width={v.reel ? "360" : "480"}
                  data-show-text="false"
                  data-allowfullscreen="true"
                />
              </div>

              <div style={{ padding: "18px 20px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 700, color: "#00d4ff", marginBottom: 8, textShadow: "0 0 12px rgba(0,212,255,0.4)" }}>
                  ▸ {v.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://www.youtube.com/live/zZptoz_2FOQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-red"
          >
            ▶ YouTube 訂閱頻道
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-cyan"
          >
            ▸ Facebook 追蹤專頁
          </a>
        </div>
      </div>
    </section>
  );
}
