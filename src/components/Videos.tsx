"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: () => void } };
  }
}

const videos = [
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
      {/* Animated background grid */}
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

        {/* Video grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 48 }}>
          {videos.map((v, i) => (
            <div key={i} className="video-card">
              {/* Header bar */}
              <div className="video-header">
                <div className="video-dot" />
                <span className="video-label-text">{v.tag}</span>
                <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(0,212,255,0.4)", fontFamily: "monospace" }}>
                  SRC_{String(i + 1).padStart(3, "0")}
                </span>
              </div>

              {/* FB Embed */}
              <div style={{
                background: "#000c1a",
                minHeight: v.reel ? 380 : 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderBottom: "1px solid rgba(0,212,255,0.1)",
              }}>
                <div
                  className="fb-video"
                  data-href={v.href}
                  data-width={v.reel ? "380" : "500"}
                  data-show-text="false"
                  data-allowfullscreen="true"
                />
              </div>

              {/* Info */}
              <div style={{ padding: "20px 20px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "#00d4ff", marginBottom: 8, textShadow: "0 0 12px rgba(0,212,255,0.4)" }}>
                  ▸ {v.title}
                </h3>
                <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 20, fontSize: "0.9rem", letterSpacing: 1 }}>
            ── 想觀看更多袁醫師的分享 ──
          </p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-cyan"
          >
            ▸ 追蹤 Facebook 專頁
          </a>
        </div>
      </div>
    </section>
  );
}
