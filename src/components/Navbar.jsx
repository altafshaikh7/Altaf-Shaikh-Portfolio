import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Hackathons",
      href: "#hackathons",
    },
    {
      name: "Certificates",
      href: "#certificates",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  /* --------------------------------
     Detect page scroll
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------
     Close mobile menu on resize
  -------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* --------------------------------
     Close mobile menu
  -------------------------------- */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10 ${
          scrolled
            ? "rounded-full border border-[#D9CC9C]/60 bg-[#F0E4B8]/80 py-3 backdrop-blur-xl"
            : "py-2"
        }`}
      >
        {/* =====================================
            LOGO
        ====================================== */}
        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center text-lg font-extrabold tracking-tight text-[#3A4A78]"
        >
          <span>ALTAF</span>

          <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
            SHAIKH
          </span>
        </a>

        {/* =====================================
            DESKTOP NAVIGATION
        ====================================== */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2 text-[13px] font-semibold tracking-wide text-[#3A4A78]/80 transition-colors duration-300 hover:text-[#3A4A78] lg:text-sm"
              >
                {link.name}

                {/* Underline */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#3A4A78] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* =====================================
            DESKTOP RIGHT SIDE
        ====================================== */}
        <div className="hidden items-center gap-2 md:flex">

          {/* GitHub */}
          <a
            href="https://github.com/altafshaikh7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#3A4A78]/80 transition-all duration-300 hover:bg-[#3A4A78]/10 hover:text-[#3A4A78]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.412-.012 2.739 0 .268.18.575.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#3A4A78]/80 transition-all duration-300 hover:bg-[#3A4A78]/10 hover:text-[#3A4A78]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="currentColor"
            >
              <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.29-5.07-1.97 0-2.85 1.08-3.34 1.84V8.5H9.43V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.26-6.59Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#3A4A78]/80 transition-all duration-300 hover:bg-[#3A4A78]/10 hover:text-[#3A4A78]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />

              <circle cx="12" cy="12" r="4" />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-[#3A4A78] px-6 py-3 text-sm font-semibold text-[#F0E4B8] transition-all duration-300 hover:scale-105 hover:bg-[#2F3D68]"
          >
            Resume
          </a>
        </div>

        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#3A4A78] transition-colors hover:bg-[#3A4A78]/10 md:hidden"
        >
          {menuOpen ? (
            /* Close icon */
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            /* Menu icon */
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </button>
      </nav>

      {/* =====================================
          MOBILE MENU
      ====================================== */}
      <div
        className={`mx-4 mt-2 overflow-hidden rounded-3xl border border-[#D9CC9C]/60 bg-[#F0E4B8]/95 shadow-lg backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[600px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="p-6">

          {/* Mobile Links */}
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`py-4 text-sm font-semibold text-[#3A4A78]/80 transition-colors hover:text-[#3A4A78] ${
                  index !== navLinks.length - 1
                    ? "border-b border-[#3A4A78]/10"
                    : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-5 block rounded-full bg-[#3A4A78] px-5 py-3 text-center text-sm font-semibold text-[#F0E4B8] transition-transform duration-300 hover:scale-[1.02]"
          >
            View Resume
          </a>

          {/* Mobile Social Icons */}
          <div className="mt-6 flex items-center gap-3 border-t border-[#3A4A78]/10 pt-5">

            {/* GitHub */}
            <a
              href="https://github.com/altafshaikh7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A4A78]/10 text-[#3A4A78]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 .237-.009.866-.014 1.7-.002.266.18.575.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A4A78]/10 text-[#3A4A78]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="currentColor"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.29-5.07-1.97 0-2.85 1.08-3.34 1.84V8.5H9.43V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.26-6.59Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A4A78]/10 text-[#3A4A78]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;