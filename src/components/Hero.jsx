import { useEffect, useState } from "react";

function Hero() {
  const [revealed, setRevealed] = useState(false);

  /* =====================================================
     ENTRANCE TRIGGER (runs on mount since Hero is above fold)
  ===================================================== */

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 60);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Soft glow — left */}
        <div className="hero-glow hero-glow-left absolute -left-32 top-[20%] h-[380px] w-[380px] rounded-full bg-[#3A4A78]/[0.06] blur-[110px]" />

        {/* Soft glow — right */}
        <div className="hero-glow hero-glow-right absolute -right-24 top-[10%] h-[420px] w-[420px] rounded-full bg-[#596A99]/[0.09] blur-[120px]" />

        {/* Grid */}
        <div
          className="hero-grid absolute -inset-[55px] opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#3A4A78 1px, transparent 1px),
              linear-gradient(90deg, #3A4A78 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10">

          <p className="hero-label mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
            <span className="hero-label-line" aria-hidden="true" />
            Hello, I'm
          </p>

          <h1 className="hero-title max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#3A4A78] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="hero-title-mask">
              <span className="hero-title-line">Altaf</span>
            </span>

            <span className="hero-title-mask">
              <span className="hero-title-line">
                Shaikh
                <span className="hero-title-dot text-[#596A99]">.</span>
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

          {/* ================= BUTTONS ================= */}
          <div className="hero-buttons mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#projects"
              className="hero-btn group relative overflow-hidden rounded-full bg-[#3A4A78] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(58,74,120,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F3D68] hover:shadow-[0_20px_40px_-12px_rgba(58,74,120,0.7)]"
            >
              <span className="relative z-10">View My Work</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#contact"
              className="hero-btn rounded-full border border-[#3A4A78] px-7 py-3.5 text-center text-sm font-semibold text-[#3A4A78] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A4A78] hover:text-white"
            >
              Let's Connect
            </a>

          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="hero-social mt-8 flex items-center gap-5">

            <a
              href="https://github.com/altafshaikh7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              GitHub
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="#"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              Resume
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
            </a>

          </div>
        </div>

        {/* ================= RIGHT PHOTO (bottom-cropped, seamless) ================= */}
        <div className="hero-photo-wrap relative flex justify-center lg:justify-end">

          {/* Floating gradient glow behind photo */}
          <div className="hero-photo-glow pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="h-[340px] w-[340px] rounded-full bg-[#596A99]/25 blur-[90px] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]" />
          </div>

          {/* Rotating dashed ring */}
          <div className="hero-photo-ring pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="h-[360px] w-[360px] rounded-full border border-dashed border-[#3A4A78]/20 sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]" />
          </div>

          {/* Orbiting dots */}
          <div className="hero-photo-dots pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="relative h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]">
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#3A4A78]" />
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#596A99]" />
              <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#596A99]" />
            </div>
          </div>

          {/* =================================================
              PHOTO FRAME
              - Crops image from bottom
              - Mask + gradient fade → invisible cut edge
          ================================================= */}

          <div className="hero-photo relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">

            <div className="hero-photo-crop relative w-full overflow-hidden">

              <img
                src="/src/assets/profile.jpg"
                alt="Altaf Shaikh"
                className="hero-photo-img block h-auto w-full object-contain object-top"
              />

              {/* Soft fade to background — makes crop edge invisible */}
              <div
                aria-hidden="true"
                className="hero-photo-fade pointer-events-none absolute inset-x-0 bottom-0 h-[40%]"
              />

            </div>

          </div>

        </div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <a
        href="#about"
        className="hero-scroll absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#3A4A78]/60 transition-colors hover:text-[#3A4A78] sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="hero-scroll-line h-8 w-px bg-[#3A4A78]/30" />
      </a>

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>{`

        /* ===============================================
           AMBIENT BACKGROUND
        =============================================== */

        .hero-glow {
          animation: heroGlowFloat 12s ease-in-out infinite;
        }

        .hero-glow-right {
          animation-duration: 15s;
          animation-direction: reverse;
        }

        @keyframes heroGlowFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(24px, -32px, 0) scale(1.08); }
        }

        .hero-grid {
          animation: heroGridDrift 22s linear infinite;
        }

        @keyframes heroGridDrift {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(55px, 55px, 0); }
        }


        /* ===============================================
           LABEL
        =============================================== */

        .hero-label {
          display: flex;
          align-items: center;
          gap: 12px;

          opacity: 0;
          translate: -18px 0;

          transition:
            opacity
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s,

            translate
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s;
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

          transition:
            scale
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.3s;
        }

        .is-revealed .hero-label-line {
          scale: 1 1;
        }


        /* ===============================================
           TITLE — masked line reveal
        =============================================== */

        .hero-title-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }

        .hero-title-line {
          display: inline-block;
          translate: 0 115%;

          transition:
            translate
            1s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-title-mask:nth-child(1) .hero-title-line {
          transition-delay: 0.2s;
        }

        .hero-title-mask:nth-child(2) .hero-title-line {
          transition-delay: 0.32s;
        }

        .is-revealed .hero-title-line {
          translate: 0 0;
        }

        .hero-title-dot {
          display: inline-block;
          animation: heroDotPulse 2.4s ease-in-out 1.6s infinite;
        }

        @keyframes heroDotPulse {
          0%, 60%, 100% { opacity: 1; }
          75%           { opacity: 0.35; }
        }


        /* ===============================================
           ROLE + DESCRIPTION
        =============================================== */

        .hero-role {
          opacity: 0;
          translate: 0 22px;
          filter: blur(6px);

          transition:
            opacity
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.55s,

            translate
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.55s,

            filter
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.55s;
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
            opacity
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.7s,

            translate
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.7s;
        }

        .is-revealed .hero-desc {
          opacity: 1;
          translate: 0 0;
        }


        /* ===============================================
           BUTTONS
        =============================================== */

        .hero-buttons {
          opacity: 0;
          translate: 0 24px;

          transition:
            opacity
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.85s,

            translate
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.85s;
        }

        .is-revealed .hero-buttons {
          opacity: 1;
          translate: 0 0;
        }


        /* ===============================================
           SOCIAL LINKS
        =============================================== */

        .hero-social {
          opacity: 0;
          translate: 0 20px;

          transition:
            opacity
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            1s,

            translate
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            1s;
        }

        .is-revealed .hero-social {
          opacity: 1;
          translate: 0 0;
        }


        /* ===============================================
           PHOTO — entrance
        =============================================== */

        .hero-photo-wrap {
          opacity: 0;
          translate: 40px 0;
          scale: 0.94;
          filter: blur(10px);

          transition:
            opacity
            1.1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s,

            translate
            1.1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s,

            scale
            1.2s
            cubic-bezier(0.34, 1.3, 0.64, 1)
            0.35s,

            filter
            1.1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s;
        }

        .is-revealed .hero-photo-wrap {
          opacity: 1;
          translate: 0 0;
          scale: 1;
          filter: blur(0);
        }

        /* Continuous float */

        .hero-photo {
          animation: heroPhotoFloat 6s ease-in-out infinite;
        }

        @keyframes heroPhotoFloat {
          0%, 100% { translate: 0 0; }
          50%      { translate: 0 -16px; }
        }


        /* ===============================================
           PHOTO CROP — bottom edge made invisible
        =============================================== */

        .hero-photo-crop {
          /* Hard crop, but with mask that makes the bottom fade */
          max-height: 620px;

          -webkit-mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 72%,
            rgba(0, 0, 0, 0.85) 82%,
            rgba(0, 0, 0, 0.4) 92%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 72%,
            rgba(0, 0, 0, 0.85) 82%,
            rgba(0, 0, 0, 0.4) 92%,
            transparent 100%
          );
        }

        /* Photo itself moves up a touch inside crop frame
           so the focus stays on face/upper body */

        .hero-photo-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: top center;
          filter: drop-shadow(0 30px 45px rgba(58, 74, 120, 0.25));
        }

        /* Secondary safety fade — blends any residual edge
           straight into the section background */

        .hero-photo-fade {
          background: linear-gradient(
            to bottom,
            rgba(240, 228, 184, 0) 0%,
            rgba(240, 228, 184, 0.35) 40%,
            rgba(240, 228, 184, 0.75) 70%,
            rgba(240, 228, 184, 1) 100%
          );
        }


        /* ===============================================
           GLOW / RING / DOTS BEHIND PHOTO
        =============================================== */

        .hero-photo-glow {
          animation: heroGlowBreathe 7s ease-in-out infinite;
        }

        @keyframes heroGlowBreathe {
          0%, 100% { opacity: 0.7; scale: 1; }
          50%      { opacity: 1; scale: 1.06; }
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
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
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
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }


        /* ===============================================
           SCROLL INDICATOR
        =============================================== */

        .hero-scroll {
          opacity: 0;
          transition: opacity 1s ease 1.3s;
        }

        .is-revealed .hero-scroll {
          opacity: 1;
        }

        .hero-scroll-line {
          animation: heroScrollLine 2.2s ease-in-out infinite;
          transform-origin: top center;
        }

        @keyframes heroScrollLine {
          0%, 100% { scale: 1 1; opacity: 1; }
          50%      { scale: 1 0.5; opacity: 0.4; }
        }


        /* ===============================================
           RESPONSIVE ADJUST
        =============================================== */

        @media (max-width: 640px) {
          .hero-photo-crop {
            max-height: 460px;

            -webkit-mask-image: linear-gradient(
              to bottom,
              #000 0%,
              #000 68%,
              rgba(0, 0, 0, 0.8) 80%,
              rgba(0, 0, 0, 0.35) 92%,
              transparent 100%
            );

            mask-image: linear-gradient(
              to bottom,
              #000 0%,
              #000 68%,
              rgba(0, 0, 0, 0.8) 80%,
              rgba(0, 0, 0, 0.35) 92%,
              transparent 100%
            );
          }
        }


        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {
          .hero-glow,
          .hero-grid,
          .hero-title-dot,
          .hero-photo,
          .hero-photo-glow,
          .hero-photo-ring > div,
          .hero-photo-dots > div,
          .hero-scroll-line {
            animation: none !important;
          }

          .hero-label,
          .hero-title-line,
          .hero-label-line,
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
        }

      `}</style>
    </section>
  );
}

export default Hero;