import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   DATA (same)
========================================================= */

const certificates = [
  { id: 1, title: "Google DevFest Goa 2025", issuer: "Google Developer Groups, Goa", year: "2025", category: "Google", image: "/certificates/google-devfest-goa.jpg", credential: "#" },
  { id: 2, title: "Data Visualization with Python", issuer: "Cognitive Class • IBM Developer Skills Network", year: "2025", category: "Data", image: "/certificates/data-visualization-python.png", credential: "https://courses.cognitiveclass.ai/certificates/0bc1ca42183442f0a49d7eb7124a7cd8" },
  { id: 3, title: "Data Analytics and Visualization Job Simulation", issuer: "Accenture • Forage", year: "2025", category: "Data", image: "/certificates/accenture-data-analytics.jpg", credential: "#" },
  { id: 4, title: "Exam Prep Plan Overview: AWS Certified Cloud Practitioner (CLF-C02 - English)", issuer: "AWS Training & Certification", year: "2026", category: "Cloud", image: "/certificates/aws-exam-prep-plan.jpg", credential: "#" },
  { id: 5, title: "Domain 1 Practice: AWS Certified Cloud Practitioner (CLF-C02 - English)", issuer: "AWS Training & Certification", year: "2026", category: "Cloud", image: "/certificates/aws-domain-1-practice.jpg", credential: "#" },
  { id: 6, title: "Social Summer of Code (SSOC) Season 5 — Contributor", issuer: "Social Summer of Code", year: "2025", category: "Open Source", image: "/certificates/ssoc-season-5.jpg", credential: "#" },
  { id: 7, title: "Google Workspace – Bring AI to Work Workshop", issuer: "Google Workspace", year: "2026", category: "Google", image: "/certificates/google-workspace-ai.jpg", credential: "#" },
  { id: 8, title: "Google Cloud Agentic AI Day", issuer: "Hack2skill", year: "2025", category: "AI / ML", image: "/certificates/google-cloud-agentic-ai.jpg", credential: "#" },
  { id: 9, title: "Introduction to Soft Skills", issuer: "TCS iON • Tata Consultancy Services", year: "2025", category: "Other", image: "/certificates/tcs-introduction-soft-skills.jpg", credential: "#" },
  { id: 10, title: "Java Programming", issuer: "Great Learning Academy", year: "2024", category: "Development", image: "/certificates/java-programming.jpg", credential: "#" },
  { id: 11, title: "Student Development Program on Engineering Mathematics", issuer: "Sanjeevan Engineering & Technology Institute, Panhala", year: "2024", category: "Other", image: "/certificates/engineering-mathematics.png", credential: "#" },
];

const filters = ["ALL", "AI / ML", "DEVELOPMENT", "DATA", "CLOUD", "GOOGLE", "OPEN SOURCE", "OTHER"];

/* =========================================================
   COMPONENT
========================================================= */

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const sectionRef = useRef(null);
  const vaultRef = useRef(null);

  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setRevealed(true), obs.disconnect())),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const visible =
    activeFilter === "ALL"
      ? certificates
      : certificates.filter((c) => c.category.toUpperCase() === activeFilter);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % visible.length);
  }, [visible.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + visible.length) % visible.length);
  }, [visible.length]);

  /* =====================================================
     KEYBOARD NAV
  ===================================================== */

  useEffect(() => {
    const onKey = (e) => {
      if (selectedCertificate) return;
      if (!vaultRef.current) return;
      const rect = vaultRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
      if (!inView) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, selectedCertificate]);

  /* =====================================================
     WHEEL NAV
  ===================================================== */

  useEffect(() => {
    const el = vaultRef.current;
    if (!el) return;
    let locked = false;

    const onWheel = (e) => {
      const rect = el.getBoundingClientRect();
      const centered = rect.top < window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.45;
      if (!centered || locked) return;
      if (Math.abs(e.deltaY) < 6) return;

      locked = true;
      setTimeout(() => (locked = false), 350);

      if (e.deltaY > 0) next();
      else prev();
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  /* =====================================================
     RELATIVE OFFSET (circular)
  ===================================================== */

  const getOffset = (idx) => {
    const total = visible.length;
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  /* =====================================================
     STYLE PER OFFSET
  ===================================================== */

  const getStyle = (offset) => {
    const abs = Math.abs(offset);

    if (abs > 2) {
      return {
        y: offset > 0 ? 180 : -180,
        scale: 0.6,
        opacity: 0,
        rotateX: 0,
        zIndex: 0,
        filter: "blur(6px)",
        pointerEvents: "none",
      };
    }

    const spacing = 58;

    return {
      y: offset * spacing,
      scale: 1 - abs * 0.08,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25,
      rotateX: 0,
      zIndex: 50 - abs,
      filter: abs === 0 ? "blur(0px)" : abs === 1 ? "blur(2px)" : "blur(4px)",
      pointerEvents: "auto",
    };
  };

  const activeCertificate = visible[activeIndex] || visible[0];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className={`certificates-section relative w-full overflow-hidden bg-[#F0E4B8] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${
        revealed ? "is-revealed" : ""
      }`}
    >
      {/* ===================================================
          BACKGROUND (glow only — no grid)
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[15%] h-[300px] w-[300px] rounded-full bg-[#3A4A78]/[0.06] blur-[110px]" />
        <div className="absolute bottom-[-120px] right-[-140px] h-[320px] w-[320px] rounded-full bg-[#596A99]/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="certificates-header mb-10 max-w-3xl sm:mb-14">
          <p className="certificates-label mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#596A99] sm:text-xs">
            <span className="certificates-label-line" />
            Certificates
          </p>

          <h2 className="certificates-title text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
            <span className="certificates-title-mask">
              <span className="certificates-title-line">Learning that</span>
            </span>
            <span className="certificates-title-mask">
              <span className="certificates-title-line certificates-title-accent">
                became proof.
              </span>
            </span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="certificates-filters mb-10 flex w-full flex-wrap items-center gap-2 sm:mb-14">
          {filters.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] transition-all duration-300 sm:px-4 sm:py-2 sm:text-[10px] ${
                  active
                    ? "border-[#3A4A78] bg-[#3A4A78] text-[#F0E4B8] shadow-[0_8px_20px_-8px_rgba(58,74,120,0.6)]"
                    : "border-[#D9CC9C] bg-transparent text-[#596A99] hover:border-[#3A4A78]/40 hover:text-[#3A4A78]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* VAULT LAYOUT */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">

          {/* LEFT — INFO PANEL */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCertificate.id}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4A78]/15 bg-white/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#3A4A78] backdrop-blur-sm sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3A4A78]" />
                    {activeCertificate.category}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#D9CC9C] bg-[#F0E4B8]/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#596A99] sm:text-[10px]">
                    {activeCertificate.year}
                  </span>
                </div>

                <h3 className="max-w-xl text-2xl font-black leading-[1.15] tracking-[-0.02em] text-[#3A4A78] sm:text-3xl lg:text-4xl">
                  {activeCertificate.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-[#596A99] sm:text-base">
                  {activeCertificate.issuer}
                </p>

                <div className="my-6 h-px w-16 bg-[#596A99]/40" />

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(activeCertificate)}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#3A4A78] px-5 py-2.5 text-[11px] font-bold text-white shadow-[0_10px_25px_-10px_rgba(58,74,120,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F3D68] sm:px-6 sm:py-3 sm:text-xs"
                  >
                    View Certificate
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </button>

                  {activeCertificate.credential !== "#" && (
                    <a
                      href={activeCertificate.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#3A4A78]/40 px-5 py-2.5 text-[11px] font-bold text-[#3A4A78] transition-all duration-300 hover:bg-[#3A4A78] hover:text-white sm:px-6 sm:py-3 sm:text-xs"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>

                <div className="mt-10 flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A4A78]/20 text-[#3A4A78] transition-all duration-300 hover:-translate-x-0.5 hover:border-[#3A4A78] hover:bg-[#3A4A78] hover:text-white sm:h-11 sm:w-11"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A4A78] text-white shadow-md transition-all duration-300 hover:translate-x-0.5 hover:bg-[#2F3D68] sm:h-11 sm:w-11"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="font-mono text-xs tracking-[0.2em] text-[#596A99] sm:text-sm">
                    <span className="font-bold text-[#3A4A78]">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="opacity-50">
                      {" / "}
                      {String(visible.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="mt-6 h-px w-full max-w-md bg-[#3A4A78]/15">
                  <motion.div
                    className="h-px bg-[#3A4A78]"
                    animate={{
                      width: `${((activeIndex + 1) / visible.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — VAULT STACK */}
          <div
            ref={vaultRef}
            className="certificates-vault relative order-1 flex h-[420px] items-center justify-center sm:h-[520px] lg:order-2 lg:h-[600px]"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[360px] w-[360px] rounded-full bg-[#596A99]/25 blur-[110px] sm:h-[460px] sm:w-[460px]" />
            </div>

            {/* Perspective */}
            <div
              className="relative flex h-full w-full items-center justify-center"
              style={{ perspective: "1600px" }}
            >
              <div
                className="relative flex h-full w-full items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {visible.map((cert, idx) => {
                  const offset = getOffset(idx);
                  const style = getStyle(offset);
                  const isActive = offset === 0;

                  return (
                    <motion.div
                      key={cert.id}
                      animate={style}
                      transition={{
                        type: "spring",
                        stiffness: 130,
                        damping: 22,
                        mass: 0.9,
                      }}
                      onClick={() => {
                        if (isActive) setSelectedCertificate(cert);
                        else setActiveIndex(idx);
                      }}
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                        isActive ? "cursor-zoom-in" : "cursor-pointer"
                      }`}
                      style={{
                        width: "min(88vw, 460px)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className={`certificate-card relative w-full overflow-hidden rounded-[12px] border bg-[#F7F0D7] transition-shadow duration-500 ${
                          isActive
                            ? "border-[#3A4A78]/25 shadow-[0_40px_90px_-25px_rgba(58,74,120,0.55)]"
                            : "border-[#D9CC9C] shadow-[0_20px_45px_-15px_rgba(58,74,120,0.35)]"
                        }`}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="block h-auto w-full rounded-[11px] object-contain"
                          loading="lazy"
                        />

                        {/* ID badge */}
                        <div className="absolute right-3 top-3 rounded-full border border-[#3A4A78]/10 bg-[#F0E4B8]/95 px-3 py-1 text-[9px] font-bold tracking-[0.15em] text-[#3A4A78] backdrop-blur-md sm:text-[10px]">
                          {String(cert.id).padStart(2, "0")}
                        </div>

                        {/* Active sheen */}
                        {isActive && (
                          <motion.div
                            initial={{ x: "-120%" }}
                            animate={{ x: "220%" }}
                            transition={{
                              duration: 1.6,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 3.5,
                            }}
                            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                            style={{ transform: "skewX(-18deg)" }}
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#596A99]/55 sm:text-[9px]">
                Scroll · Click · Arrow keys
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ===================================================
          MODAL
      =================================================== */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#26365F]/80 p-3 backdrop-blur-xl sm:p-5"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative w-fit max-w-[92vw] overflow-hidden rounded-xl border border-[#D9CC9C]/60 bg-[#F7F0D7] p-1 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-w-[85vw] sm:rounded-2xl sm:p-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="block h-auto w-auto max-h-[70vh] max-w-[90vw] rounded-lg object-contain sm:max-h-[75vh] sm:max-w-[82vw]"
              />

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#D9CC9C] bg-[#F0E4B8]/95 text-base font-semibold text-[#3A4A78] shadow-lg backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:scale-105 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
                aria-label="Close"
              >
                ×
              </button>

              <div className="absolute bottom-1.5 left-1.5 right-1.5 rounded-lg bg-[#26365F]/90 px-3 py-2.5 backdrop-blur-xl sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-xl sm:px-5 sm:py-3">
                <p className="text-[10px] font-bold leading-4 text-white sm:text-sm">
                  {selectedCertificate.title}
                </p>
                <p className="mt-0.5 text-[8px] leading-3 text-white/60 sm:mt-1 sm:text-xs">
                  {selectedCertificate.issuer} · {selectedCertificate.year}
                </p>
                {selectedCertificate.credential !== "#" && (
                  <a
                    href={selectedCertificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-[0.12em] text-[#F0E4B8] sm:mt-2 sm:text-[9px]"
                  >
                    View Credential ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`

        .certificates-label {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          translate: -18px 0;
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s,
            translate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }
        .is-revealed .certificates-label { opacity: 1; translate: 0 0; }

        .certificates-label-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: rgba(89, 106, 153, 0.6);
          transform-origin: left center;
          scale: 0 1;
          transition: scale 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s;
        }
        .is-revealed .certificates-label-line { scale: 1 1; }

        .certificates-title-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }
        .certificates-title-line {
          display: inline-block;
          translate: 0 115%;
          transition: translate 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .certificates-title-mask:nth-child(1) .certificates-title-line { transition-delay: 0.15s; }
        .certificates-title-mask:nth-child(2) .certificates-title-line { transition-delay: 0.28s; }
        .is-revealed .certificates-title-line { translate: 0 0; }

        .certificates-title-accent {
          color: #596A99;
          background-image: linear-gradient(100deg, #596A99 0%, #596A99 40%, #3A4A78 50%, #596A99 60%, #596A99 100%);
          background-size: 200% 100%;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .is-revealed .certificates-title-accent {
          animation: certTitleShimmer 9s linear 1.2s infinite;
        }
        @keyframes certTitleShimmer {
          from { background-position: 0% 50%; }
          to   { background-position: 200% 50%; }
        }

        .certificates-filters {
          opacity: 0;
          translate: 0 20px;
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s,
            translate 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s;
        }
        .is-revealed .certificates-filters { opacity: 1; translate: 0 0; }

        .certificates-vault {
          opacity: 0;
          translate: 0 40px;
          scale: 0.96;
          filter: blur(8px);
          transition:
            opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
            translate 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
            scale 1.2s cubic-bezier(0.34, 1.3, 0.64, 1) 0.55s,
            filter 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s;
        }
        .is-revealed .certificates-vault { opacity: 1; translate: 0 0; scale: 1; filter: blur(0); }

        .certificate-card { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }

        @media (prefers-reduced-motion: reduce) {
          .certificates-label,
          .certificates-title-line,
          .certificates-label-line,
          .certificates-filters,
          .certificates-vault {
            opacity: 1 !important;
            translate: 0 0 !important;
            scale: 1 !important;
            filter: none !important;
            transition: none !important;
          }
          .certificates-title-accent {
            animation: none !important;
            -webkit-text-fill-color: #596A99;
            background: none;
          }
        }

      `}</style>
    </section>
  );
}

export default Certificates;