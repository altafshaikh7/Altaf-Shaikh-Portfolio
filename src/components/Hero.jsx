import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";

function Hero() {
  const [revealed, setRevealed] = useState(false);

  /* =====================================================
     SMOOTH TYPEWRITER — "Altaf" + "Shaikh."
  ===================================================== */

  const FIRST_NAME = "Altaf";
  const LAST_NAME = "Shaikh";

  const [firstCount, setFirstCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);
  const [showDot, setShowDot] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 60);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!revealed) return;

    let firstIndex = 0;
    let firstTimer;
    let lastTimer;
    let lastTimeout;
    let dotTimeout;

    firstTimer = setInterval(() => {
      firstIndex++;
      setFirstCount(firstIndex);

      if (firstIndex >= FIRST_NAME.length) {
        clearInterval(firstTimer);

        lastTimeout = setTimeout(() => {
          let lastIndex = 0;

          lastTimer = setInterval(() => {
            lastIndex++;
            setLastCount(lastIndex);

            if (lastIndex >= LAST_NAME.length) {
              clearInterval(lastTimer);

              dotTimeout = setTimeout(() => {
                setShowDot(true);
                setTypingDone(true);
              }, 260);
            }
          }, 160);
        }, 420);
      }
    }, 175);

    return () => {
      clearInterval(firstTimer);
      clearInterval(lastTimer);
      clearTimeout(lastTimeout);
      clearTimeout(dotTimeout);
    };
  }, [revealed]);

  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =====================================================
     RENDER CHARS
  ===================================================== */

  const renderChars = (text, visibleCount) =>
    text.split("").map((char, i) => (
      <span
        key={`${char}-${i}`}
        className={`hero-char ${i < visibleCount ? "is-visible" : ""}`}
        aria-hidden="true"
      >
        {char}
      </span>
    ));

  const cursorOnFirst =
    firstCount > 0 && firstCount < FIRST_NAME.length;

  const cursorOnLast =
    firstCount >= FIRST_NAME.length &&
    lastCount > 0 &&
    lastCount < LAST_NAME.length;

  return (
    <section
      id="home"
      className={`hero-section relative flex min-h-screen items-center overflow-hidden bg-[#F0E4B8] px-6 pt-28 sm:px-8 lg:px-10 ${
        revealed ? "is-revealed" : ""
      }`}
    >
      {/* =================================================
          AMBIENT BACKGROUND DECOR
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-glow hero-glow-left absolute -left-32 top-[20%] h-[380px] w-[380px] rounded-full bg-[#3A4A78]/[0.06] blur-[110px]" />

        <div className="hero-glow hero-glow-right absolute -right-24 top-[10%] h-[420px] w-[420px] rounded-full bg-[#596A99]/[0.09] blur-[120px]" />

        <div
          className="hero-grid absolute -inset-[55px] opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#3A4A78 1px, transparent 1px),
              linear-gradient(90deg, #3A4A78 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                #000 0%,
                #000 55%,
                rgba(0, 0, 0, 0.7) 72%,
                rgba(0, 0, 0, 0.25) 88%,
                transparent 100%
              )
            `,
            maskImage: `
              linear-gradient(
                to bottom,
                #000 0%,
                #000 55%,
                rgba(0, 0, 0, 0.7) 72%,
                rgba(0, 0, 0, 0.25) 88%,
                transparent 100%
              )
            `,
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#F0E4B8] via-[#F0E4B8]/90 to-transparent" />
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-10">
          <p className="hero-label mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
            <span className="hero-label-line" aria-hidden="true" />
            Hello, I'm
          </p>

          {/* NAME */}

          <h1 className="hero-title max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#3A4A78] sm:text-6xl md:text-7xl lg:text-8xl">
            {/* First name */}
            <span className="hero-title-mask">
              <span className="hero-title-line">
                <span className="sr-only">{FIRST_NAME}</span>

                <span aria-hidden="true">
                  {renderChars(FIRST_NAME, firstCount)}

                  {cursorOnFirst && (
                    <span
                      className="hero-cursor"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </span>
            </span>

            {/* Last name */}
            <span className="hero-title-mask">
              <span className="hero-title-line">
                <span className="sr-only">{LAST_NAME}</span>

                <span aria-hidden="true">
                  {renderChars(LAST_NAME, lastCount)}

                  {cursorOnLast && (
                    <span
                      className="hero-cursor"
                      aria-hidden="true"
                    />
                  )}

                  {showDot && (
                    <span className="hero-title-dot-pop text-[#596A99]">
                      .
                    </span>
                  )}

                  {typingDone && (
                    <span
                      className="hero-cursor hero-cursor-idle"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </span>
            </span>
          </h1>

          <h2 className="hero-role mt-7 max-w-2xl text-xl font-semibold leading-tight text-[#26365F] sm:text-2xl md:text-3xl">
            AI/ML Enthusiast &amp; Full-Stack Developer
          </h2>

          <p className="hero-desc mt-5 max-w-xl text-base leading-7 text-[#596A99] sm:text-lg">
            I build intelligent applications and modern web experiences
            using AI/ML and full-stack technologies.
          </p>

          {/* BUTTONS */}

          <div className="hero-buttons mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="hero-btn group relative overflow-hidden rounded-full bg-[#3A4A78] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(58,74,120,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F3D68] hover:shadow-[0_20px_40px_-12px_rgba(58,74,120,0.7)]"
            >
              <span className="relative z-10">
                View My Work
              </span>

              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#contact"
              className="hero-btn rounded-full border border-[#3A4A78] px-7 py-3.5 text-center text-sm font-semibold text-[#3A4A78] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A4A78] hover:text-white"
            >
              Let's Connect
            </a>
          </div>

          {/* SOCIAL LINKS */}

          <div className="hero-social mt-8 flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/altafshaikh7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              GitHub
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="https://www.linkedin.com/in/altafshaikh7781/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="https://www.instagram.com/er.altaf_shaikh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              Instagram
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              Resume
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        {/* =================================================
            RIGHT PHOTO
        ================================================= */}

        <div className="hero-photo-wrap relative flex justify-center lg:justify-end">
          <div className="hero-photo-glow pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="h-[340px] w-[340px] rounded-full bg-[#596A99]/25 blur-[90px] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]" />
          </div>

          <div className="hero-photo-ring pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="h-[360px] w-[360px] rounded-full border border-dashed border-[#3A4A78]/20 sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]" />
          </div>

          <div className="hero-photo-dots pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="relative h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]">
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#3A4A78]" />

              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#596A99]" />

              <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#596A99]" />
            </div>
          </div>

          <div className="hero-photo relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
            <div className="hero-photo-crop relative w-full overflow-hidden">
              {/* IMPORTANT:
                  Vite-safe image import
              */}
              <img
                src={profileImage}
                alt="Altaf Shaikh"
                className="hero-photo-img block h-auto w-full object-contain object-top"
              />

              <div
                aria-hidden="true"
                className="hero-photo-fade pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
              />

              <div
                aria-hidden="true"
                className="hero-photo-fade-solid pointer-events-none absolute inset-x-0 bottom-0 h-[22%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          PREMIUM MOUSE SCROLL INDICATOR
      ================================================= */}

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="hero-scroll group absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="hero-scroll-text mb-2 text-[8px] font-bold uppercase tracking-[0.38em] text-[#3A4A78]/50 transition-all duration-300 group-hover:text-[#3A4A78]">
          Explore
        </span>

        <span className="hero-mouse relative flex h-[56px] w-[34px] items-start justify-center rounded-full border-[1.5px] border-[#3A4A78]/45 bg-[#F0E4B8]/30 shadow-[0_8px_30px_rgba(58,74,120,0.08)] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#3A4A78] group-hover:shadow-[0_15px_35px_rgba(58,74,120,0.18)]">
          <span className="pointer-events-none absolute inset-x-2 top-1 h-3 rounded-full bg-white/20 blur-sm" />

          <span className="hero-mouse-wheel absolute left-1/2 top-[10px] h-[9px] w-[3px] -translate-x-1/2 rounded-full bg-[#3A4A78]" />

          <span className="pointer-events-none absolute left-1/2 top-[8px] h-4 w-4 -translate-x-1/2 rounded-full bg-[#596A99]/10 blur-md" />
        </span>

        <span className="hero-scroll-arrow mt-2 flex h-5 w-5 items-center justify-center text-[#3A4A78]/55 transition-all duration-300 group-hover:translate-y-1 group-hover:text-[#3A4A78]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className="hero-scroll-line mt-1 h-[2px] w-1 rounded-full bg-[#596A99]/40 transition-all duration-500 group-hover:w-4 group-hover:bg-[#3A4A78]/60" />
      </button>

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>{`
        .hero-glow {
          animation: heroGlowFloat 12s ease-in-out infinite;
        }

        .hero-glow-right {
          animation-duration: 15s;
          animation-direction: reverse;
        }

        @keyframes heroGlowFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(24px, -32px, 0) scale(1.08);
          }
        }

        .hero-grid {
          animation: heroGridDrift 22s linear infinite;
        }

        @keyframes heroGridDrift {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(55px, 55px, 0);
          }
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          translate: -18px 0;
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
            translate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .is-revealed .hero-label {
          opacity: 1;
          translate: 0 0;
        }

        .hero-label-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: rgba(89, 106, 153, 0.6);
          transform-origin: left center;
          scale: 0 1;
          transition: scale 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }

        .is-revealed .hero-label-line {
          scale: 1 1;
        }

        .hero-title-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }

        .hero-title-line {
          display: inline-block;
          min-height: 1em;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .hero-char {
          display: inline-block;
          opacity: 0;
          translate: 0 0.9em;
          filter: blur(8px);
          scale: 0.7;
          transition:
            opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            translate 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            scale 0.7s cubic-bezier(0.34, 1.4, 0.64, 1);
        }

        .hero-char.is-visible {
          opacity: 1;
          translate: 0 0;
          filter: blur(0);
          scale: 1;
        }

        .hero-cursor {
          display: inline-block;
          width: 0.07em;
          height: 0.85em;
          margin-left: 0.06em;
          vertical-align: -0.05em;
          background-color: #3A4A78;
          border-radius: 2px;
          translate: 0 0.02em;
          animation: heroCursorBlink 1s ease-in-out infinite;
        }

        .hero-cursor-idle {
          animation: heroCursorBlink 1.2s ease-in-out infinite;
        }

        @keyframes heroCursorBlink {
          0%, 45% {
            opacity: 1;
          }

          50%, 100% {
            opacity: 0.1;
          }
        }

        .hero-title-dot-pop {
          display: inline-block;
          animation: heroDotPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          transform-origin: center bottom;
        }

        @keyframes heroDotPop {
          0% {
            opacity: 0;
            scale: 0.3;
            translate: 0 10px;
            filter: blur(6px);
          }

          60% {
            opacity: 1;
            scale: 1.18;
            translate: 0 -2px;
            filter: blur(0);
          }

          100% {
            opacity: 1;
            scale: 1;
            translate: 0 0;
            filter: blur(0);
          }
        }

        .hero-role {
          opacity: 0;
          translate: 0 22px;
          filter: blur(6px);
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.6s,
            translate 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.6s,
            filter 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.6s;
        }

        .is-revealed .hero-role {
          opacity: 1;
          translate: 0 0;
          filter: blur(0);
        }

        .hero-desc {
          opacity: 0;
          translate: 0 22px;
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.75s,
            translate 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.75s;
        }

        .is-revealed .hero-desc {
          opacity: 1;
          translate: 0 0;
        }

        .hero-buttons {
          opacity: 0;
          translate: 0 24px;
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.9s,
            translate 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.9s;
        }

        .is-revealed .hero-buttons {
          opacity: 1;
          translate: 0 0;
        }

        .hero-social {
          opacity: 0;
          translate: 0 20px;
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 3.05s,
            translate 0.9s cubic-bezier(0.22, 1, 0.36, 1) 3.05s;
        }

        .is-revealed .hero-social {
          opacity: 1;
          translate: 0 0;
        }

        .hero-photo-wrap {
          opacity: 0;
          translate: 40px 0;
          scale: 0.94;
          filter: blur(10px);
          transition:
            opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s,
            translate 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s,
            scale 1.2s cubic-bezier(0.34, 1.3, 0.64, 1) 0.35s,
            filter 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s;
        }

        .is-revealed .hero-photo-wrap {
          opacity: 1;
          translate: 0 0;
          scale: 1;
          filter: blur(0);
        }

        .hero-photo {
          animation: heroPhotoFloat 6s ease-in-out infinite;
        }

        @keyframes heroPhotoFloat {
          0%, 100% {
            translate: 0 0;
          }

          50% {
            translate: 0 -16px;
          }
        }

        .hero-photo-crop {
          max-height: 620px;
          -webkit-mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 55%,
            rgba(0, 0, 0, 0.95) 68%,
            rgba(0, 0, 0, 0.7) 78%,
            rgba(0, 0, 0, 0.35) 88%,
            rgba(0, 0, 0, 0.1) 95%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 55%,
            rgba(0, 0, 0, 0.95) 68%,
            rgba(0, 0, 0, 0.7) 78%,
            rgba(0, 0, 0, 0.35) 88%,
            rgba(0, 0, 0, 0.1) 95%,
            transparent 100%
          );
        }

        .hero-photo-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: top center;
          filter: drop-shadow(
            0 30px 45px rgba(58, 74, 120, 0.25)
          );
        }

        .hero-photo-fade {
          background: linear-gradient(
            to bottom,
            rgba(240, 228, 184, 0) 0%,
            rgba(240, 228, 184, 0.15) 25%,
            rgba(240, 228, 184, 0.4) 45%,
            rgba(240, 228, 184, 0.7) 65%,
            rgba(240, 228, 184, 0.9) 82%,
            rgba(240, 228, 184, 0.98) 94%,
            #F0E4B8 100%
          );
        }

        .hero-photo-fade-solid {
          background: linear-gradient(
            to bottom,
            rgba(240, 228, 184, 0) 0%,
            rgba(240, 228, 184, 0.6) 40%,
            #F0E4B8 100%
          );
        }

        .hero-photo-glow {
          animation: heroGlowBreathe 7s ease-in-out infinite;
        }

        @keyframes heroGlowBreathe {
          0%, 100% {
            opacity: 0.7;
            scale: 1;
          }

          50% {
            opacity: 1;
            scale: 1.06;
          }
        }

        .hero-photo-ring {
          opacity: 0;
          transition: opacity 1.2s ease 0.9s;
        }

        .is-revealed .hero-photo-ring {
          opacity: 1;
        }

        .hero-photo-ring > div {
          animation: heroRingSpin 40s linear infinite;
        }

        @keyframes heroRingSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .hero-photo-dots {
          opacity: 0;
          transition: opacity 1.2s ease 1s;
        }

        .is-revealed .hero-photo-dots {
          opacity: 1;
        }

        .hero-photo-dots > div {
          animation: heroDotsSpin 26s linear infinite;
        }

        @keyframes heroDotsSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .hero-scroll {
          opacity: 0;
          transition:
            opacity 1s ease 1.3s,
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .is-revealed .hero-scroll {
          opacity: 1;
        }

        .hero-scroll-text {
          white-space: nowrap;
        }

        .hero-mouse {
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            0 8px 25px rgba(58, 74, 120, 0.08);
        }

        .hero-mouse-wheel {
          animation:
            mouseWheelMove 2s cubic-bezier(0.65, 0, 0.35, 1)
            infinite;
        }

        @keyframes mouseWheelMove {
          0% {
            transform: translate(-50%, 0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          55% {
            transform: translate(-50%, 20px);
            opacity: 0.85;
          }

          75% {
            transform: translate(-50%, 25px);
            opacity: 0;
          }

          100% {
            transform: translate(-50%, 25px);
            opacity: 0;
          }
        }

        .hero-scroll-arrow {
          animation: scrollArrowMove 2s ease-in-out infinite;
        }

        @keyframes scrollArrowMove {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.45;
          }

          50% {
            transform: translateY(4px);
            opacity: 1;
          }
        }

        .hero-scroll-line {
          animation: scrollLinePulse 2s ease-in-out infinite;
        }

        @keyframes scrollLinePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(1);
          }

          50% {
            opacity: 0.8;
            transform: scaleX(2);
          }
        }

        .hero-scroll:hover .hero-mouse-wheel {
          animation-duration: 1s;
        }

        .hero-scroll:hover .hero-scroll-text {
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .hero-scroll {
            bottom: 16px;
          }

          .hero-scroll-text {
            font-size: 7px;
            letter-spacing: 0.3em;
          }

          .hero-mouse {
            width: 30px;
            height: 50px;
          }

          .hero-photo-crop {
            max-height: 460px;

            -webkit-mask-image: linear-gradient(
              to bottom,
              #000 0%,
              #000 50%,
              rgba(0, 0, 0, 0.9) 65%,
              rgba(0, 0, 0, 0.55) 78%,
              rgba(0, 0, 0, 0.2) 90%,
              transparent 100%
            );

            mask-image: linear-gradient(
              to bottom,
              #000 0%,
              #000 50%,
              rgba(0, 0, 0, 0.9) 65%,
              rgba(0, 0, 0, 0.55) 78%,
              rgba(0, 0, 0, 0.2) 90%,
              transparent 100%
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-glow,
          .hero-grid,
          .hero-photo,
          .hero-photo-glow,
          .hero-photo-ring > div,
          .hero-photo-dots > div,
          .hero-mouse-wheel,
          .hero-scroll-arrow,
          .hero-scroll-line,
          .hero-cursor,
          .hero-title-dot-pop {
            animation: none !important;
          }

          .hero-label,
          .hero-role,
          .hero-desc,
          .hero-buttons,
          .hero-social,
          .hero-photo-wrap,
          .hero-photo-ring,
          .hero-photo-dots,
          .hero-scroll {
            opacity: 1 !important;
            translate: 0 0 !important;
            scale: 1 !important;
            filter: none !important;
            transition: none !important;
          }

          .hero-char {
            opacity: 1 !important;
            translate: 0 0 !important;
            filter: none !important;
            scale: 1 !important;
            transition: none !important;
          }

          .hero-cursor {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;