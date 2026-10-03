import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  /* ===========================================
     SCROLL REVEAL
  =========================================== */

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ===========================================
     BACK TO TOP
  =========================================== */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/altafshaikh7",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/altafshaikh7781/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/er.altaf_shaikh",
      icon: FaInstagram,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className={`footer-section relative overflow-hidden border-t border-[#D9CC9C] bg-[#F0E4B8] text-[#26365F] ${
        revealed ? "is-revealed" : ""
      }`}
    >
      {/* ===========================================
          BACKGROUND DECOR
      =========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="footer-glow footer-glow-right pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#596A99]/10 blur-3xl" />
        <div className="footer-glow footer-glow-left pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#3A4A78]/10 blur-3xl" />

        {/* Subtle bottom fade to cream */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F0E4B8] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        {/* ===========================================
            MAIN FOOTER
        =========================================== */}

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* =========================================
              BRAND
          ========================================= */}

          <div className="footer-brand max-w-md">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group inline-flex items-center"
              aria-label="Back to top"
            >
              <span
                className="
                  relative
                  text-2xl
                  font-black
                  tracking-[-0.08em]
                  text-[#3A4A78]
                  transition-colors
                  duration-500
                  group-hover:text-[#596A99]
                  sm:text-3xl
                "
              >
                &lt;DEV
                <span className="text-[#596A99] transition-colors duration-500 group-hover:text-[#3A4A78]">
                  /&gt;
                </span>

                {/* underline sweep */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-[#3A4A78]
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-full
                  "
                />
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#596A99] sm:text-[15px]">
              Building meaningful digital experiences through
              <span className="font-semibold text-[#3A4A78]">
                {" "}
                AI, ML &amp; Full Stack Development.
              </span>
            </p>
          </div>

          {/* =========================================
              NAVIGATION
          ========================================= */}

          <nav aria-label="Footer navigation" className="footer-nav">
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#596A99]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    relative
                    py-1
                    transition-colors
                    duration-300
                    hover:text-[#3A4A78]
                  "
                >
                  {link.name}

                  {/* Center-out underline */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[1.5px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#3A4A78]
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* =========================================
              SOCIALS
          ========================================= */}

          <div className="footer-socials flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    group
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-[#D9CC9C]
                    bg-white/40
                    text-[#3A4A78]
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-1
                    hover:border-[#3A4A78]
                    hover:bg-[#3A4A78]
                    hover:text-white
                    hover:shadow-[0_12px_25px_-10px_rgba(58,74,120,0.6)]
                  "
                >
                  {/* Fill overlay */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      bg-[#3A4A78]/0
                      transition-all
                      duration-500
                      group-hover:bg-[#3A4A78]
                    "
                  />

                  {/* Icon — rotate + scale on hover */}
                  <Icon
                    size={17}
                    className="
                      relative
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      group-hover:rotate-[8deg]
                      group-hover:scale-110
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ===========================================
            DIVIDER (with center accent)
        =========================================== */}

        <div className="footer-divider my-9 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D9CC9C] to-[#D9CC9C]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3A4A78]/60" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D9CC9C] to-[#D9CC9C]" />
        </div>

        {/* ===========================================
            BOTTOM BAR
        =========================================== */}

        <div className="footer-bottom flex flex-col gap-4 text-xs text-[#596A99] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            © {currentYear} Altaf Shaikh. All rights reserved.
          </p>

          <p className="group flex items-center gap-2">
            Designed &amp; built with{" "}
            <span className="font-semibold text-[#3A4A78]">React</span>

            {/* Tiny heart pulse */}
            <span
              aria-hidden="true"
              className="inline-block text-[#3A4A78] transition-transform duration-500 group-hover:scale-125"
            >
              ♥
            </span>
          </p>
        </div>
      </div>

      {/* ===========================================
          BACK TO TOP
      =========================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          footer-top
          group
          absolute
          bottom-6
          right-5
          flex
          h-11
          w-11
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-[#D9CC9C]
          bg-[#F0E4B8]/80
          text-[#3A4A78]
          shadow-[0_8px_25px_-10px_rgba(58,74,120,0.4)]
          backdrop-blur-md
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-1
          hover:border-[#3A4A78]
          hover:bg-[#3A4A78]
          hover:text-[#F0E4B8]
          hover:shadow-[0_15px_30px_-10px_rgba(58,74,120,0.65)]
          sm:bottom-8
          sm:right-8
          sm:h-12
          sm:w-12
        "
      >
        {/* Sheen */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="
            relative
            h-4
            w-4
            transition-transform
            duration-500
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            group-hover:-translate-y-0.5
            sm:h-[18px]
            sm:w-[18px]
          "
          aria-hidden="true"
        >
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ===========================================
          STYLES
      =========================================== */}

      <style>{`

        /* ===========================================
           BACKGROUND GLOWS
        =========================================== */

        .footer-glow {
          animation: footerGlowFloat 14s ease-in-out infinite;
        }

        .footer-glow-left {
          animation-duration: 18s;
          animation-direction: reverse;
        }

        @keyframes footerGlowFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(24px, -28px, 0) scale(1.08); }
        }

        /* ===========================================
           ENTRANCE ANIMATIONS
        =========================================== */

        .footer-brand {
          opacity: 0;
          translate: -20px 0;
          filter: blur(6px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
            filter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .is-revealed .footer-brand {
          opacity: 1;
          translate: 0 0;
          filter: blur(0);
        }

        .footer-nav {
          opacity: 0;
          translate: 0 20px;
          filter: blur(6px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s,
            filter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }

        .is-revealed .footer-nav {
          opacity: 1;
          translate: 0 0;
          filter: blur(0);
        }

        .footer-socials {
          opacity: 0;
          translate: 20px 0;
          filter: blur(6px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s,
            filter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s;
        }

        .is-revealed .footer-socials {
          opacity: 1;
          translate: 0 0;
          filter: blur(0);
        }

        .footer-divider {
          opacity: 0;
          scale: 0.85;
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s,
            scale 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s;
        }

        .is-revealed .footer-divider {
          opacity: 1;
          scale: 1;
        }

        .footer-bottom {
          opacity: 0;
          translate: 0 15px;
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.75s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.75s;
        }

        .is-revealed .footer-bottom {
          opacity: 1;
          translate: 0 0;
        }

        .footer-top {
          opacity: 0;
          translate: 0 20px;
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.9s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.9s,
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.5s ease,
            color 0.5s ease,
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }

        .is-revealed .footer-top {
          opacity: 1;
          translate: 0 0;
        }

        /* ===========================================
           REDUCED MOTION
        =========================================== */

        @media (prefers-reduced-motion: reduce) {
          .footer-glow {
            animation: none !important;
          }

          .footer-brand,
          .footer-nav,
          .footer-socials,
          .footer-divider,
          .footer-bottom,
          .footer-top {
            opacity: 1 !important;
            translate: 0 0 !important;
            scale: 1 !important;
            filter: none !important;
            transition: none !important;
          }
        }

      `}</style>
    </footer>
  );
};

export default Footer;