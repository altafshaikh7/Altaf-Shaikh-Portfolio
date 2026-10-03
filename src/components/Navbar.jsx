import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = {
    github: "https://github.com/altafshaikh7",
    linkedin: "https://www.linkedin.com/in/altafshaikh7781/",
    instagram:
      "https://www.instagram.com/er.altaf_shaikh?stkn=bjhvcnZ1OTU3dHF0",
  };

  /* ===========================================
     SCROLL — hide on scroll down, show on up
  =========================================== */

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 200) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===========================================
     ACTIVE SECTION HIGHLIGHT
  =========================================== */

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  /* ===========================================
     CLOSE ON RESIZE
  =========================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        bg-transparent
        transition-[opacity,transform,filter]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          hidden && !menuOpen
            ? "pointer-events-none -translate-y-6 opacity-0 blur-[6px]"
            : "pointer-events-auto translate-y-0 opacity-100 blur-0"
        }
      `}
    >
      {/* ===========================================
          NAV — always transparent
      =========================================== */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between bg-transparent px-5 py-5 sm:px-8 lg:px-10">
        {/* =====================================
            LOGO — glow + scale on hover
        ===================================== */}

        <a
          href="#"
          onClick={closeMenu}
          aria-label="Developer home"
          className="group relative flex items-center"
        >
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-12
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#596A99]/0
              blur-2xl
              transition-all
              duration-500
              group-hover:bg-[#596A99]/25
            "
          />

          <img
            src="/logo.png"
            alt="Developer Logo"
            className="
              relative
              h-16
              w-auto
              max-w-[190px]
              object-contain
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.06]
              sm:h-20
            "
          />
        </a>

        {/* =====================================
            DESKTOP NAV — pill + underline
        ===================================== */}

        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    transitionDelay: hidden
                      ? `${index * 30}ms`
                      : `${(navLinks.length - index) * 30}ms`,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    px-3
                    py-2
                    text-[13px]
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    lg:px-4
                    lg:text-sm
                    ${
                      isActive
                        ? "text-[#3A4A78]"
                        : "text-[#3A4A78]/70 hover:text-[#3A4A78]"
                    }
                  `}
                >
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
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:bg-[#3A4A78]/[0.08]
                    "
                  />

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[#3A4A78]
                      "
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>

                  <span
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      bottom-1.5
                      left-1/2
                      h-[1.5px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#3A4A78]
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? "w-6" : "w-0 group-hover:w-6"}
                    `}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* =====================================
            DESKTOP RIGHT
        ===================================== */}

        <div className="hidden items-center gap-1.5 md:flex">
          <SocialIcon
            href={socialLinks.github}
            label="GitHub"
            icon={
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.412-.012 2.739 0 .268.18.575.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
            }
          />

          <SocialIcon
            href={socialLinks.linkedin}
            label="LinkedIn"
            icon={
              <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.29-5.07-1.97 0-2.85 1.08-3.34 1.84V8.5H9.43V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.26-6.59Z" />
            }
          />

          <SocialIcon
            href={socialLinks.instagram}
            label="Instagram"
            outline
            icon={
              <>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </>
            }
          />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              ml-2
              inline-flex
              items-center
              gap-2
              overflow-hidden
              rounded-full
              bg-[#3A4A78]
              px-6
              py-3
              text-sm
              font-semibold
              text-[#F0E4B8]
              shadow-[0_8px_25px_-10px_rgba(58,74,120,0.7)]
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-0.5
              hover:bg-[#2F3D68]
              hover:shadow-[0_15px_35px_-10px_rgba(58,74,120,0.8)]
            "
          >
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
                ease-out
                group-hover:translate-x-full
              "
            />

            <span className="relative">Resume</span>

            <svg
              viewBox="0 0 24 24"
              className="
                relative
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        {/* =====================================
            MOBILE MENU BUTTON
        ===================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            group
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-[#3A4A78]
            transition-all
            duration-300
            hover:bg-[#3A4A78]/10
            md:hidden
          "
        >
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              border
              border-[#3A4A78]/0
              transition-all
              duration-500
              group-hover:border-[#3A4A78]/20
              group-hover:scale-110
            "
          />

          <span className="relative block h-5 w-5">
            <span
              className={`
                absolute
                left-0
                h-[2px]
                w-full
                rounded-full
                bg-current
                transition-all
                duration-400
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-1 group-hover:top-0.5"
                }
              `}
            />

            <span
              className={`
                absolute
                left-0
                top-1/2
                h-[2px]
                w-full
                -translate-y-1/2
                rounded-full
                bg-current
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                }
              `}
            />

            <span
              className={`
                absolute
                left-0
                h-[2px]
                w-full
                rounded-full
                bg-current
                transition-all
                duration-400
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-1 group-hover:bottom-0.5"
                }
              `}
            />
          </span>
        </button>
      </nav>

      {/* =====================================
          MOBILE MENU
      ===================================== */}

      <div
        className={`
          mx-4
          mt-2
          overflow-hidden
          rounded-3xl
          border
          border-[#D9CC9C]/50
          bg-[#F0E4B8]/85
          shadow-[0_20px_60px_-15px_rgba(58,74,120,0.25)]
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${
            menuOpen
              ? "max-h-[700px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
          }
        `}
      >
        <div className="p-6">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
                }}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  py-4
                  text-sm
                  font-semibold
                  text-[#3A4A78]/80
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:translate-x-1
                  hover:text-[#3A4A78]
                  ${
                    index !== navLinks.length - 1
                      ? "border-b border-[#3A4A78]/10"
                      : ""
                  }
                `}
              >
                <span>{link.name}</span>

                <svg
                  viewBox="0 0 24 24"
                  className="
                    h-4
                    w-4
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            style={{
              transitionDelay: menuOpen ? "280ms" : "0ms",
            }}
            className="
              group
              relative
              mt-5
              block
              overflow-hidden
              rounded-full
              bg-[#3A4A78]
              px-5
              py-3
              text-center
              text-sm
              font-semibold
              text-[#F0E4B8]
              shadow-[0_10px_25px_-10px_rgba(58,74,120,0.7)]
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.02]
              hover:bg-[#2F3D68]
            "
          >
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
            <span className="relative">View Resume</span>
          </a>

          <div className="mt-6 flex items-center gap-3 border-t border-[#3A4A78]/10 pt-5">
            <SocialIcon
              href={socialLinks.github}
              label="GitHub"
              mobile
              icon={
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.412-.012 2.739 0 .268.18.575.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              }
            />

            <SocialIcon
              href={socialLinks.linkedin}
              label="LinkedIn"
              mobile
              icon={
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.29-5.07-1.97 0-2.85 1.08-3.34 1.84V8.5H9.43V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.26-6.59Z" />
              }
            />

            <SocialIcon
              href={socialLinks.instagram}
              label="Instagram"
              mobile
              outline
              icon={
                <>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ href, label, icon, outline = false, mobile = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        group
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-1
        ${
          mobile
            ? "h-10 w-10 bg-[#3A4A78]/10 text-[#3A4A78] hover:bg-[#3A4A78] hover:text-[#F0E4B8] hover:shadow-[0_10px_25px_-8px_rgba(58,74,120,0.6)]"
            : "h-9 w-9 text-[#3A4A78]/80 hover:bg-[#3A4A78] hover:text-[#F0E4B8] hover:shadow-[0_10px_25px_-8px_rgba(58,74,120,0.6)]"
        }
      `}
    >
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

      <svg
        viewBox="0 0 24 24"
        className="
          relative
          h-[18px]
          w-[18px]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:rotate-[8deg]
          group-hover:scale-110
        "
        fill={outline ? "none" : "currentColor"}
        stroke={outline ? "currentColor" : "none"}
        strokeWidth={outline ? "1.8" : "0"}
        aria-hidden="true"
      >
        {icon}
      </svg>
    </a>
  );
}

export default Navbar;