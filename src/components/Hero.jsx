function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F0E4B8] px-6 pt-28 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
            Hello, I'm
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#3A4A78] sm:text-6xl md:text-7xl lg:text-8xl">
            Altaf
            <br />
            Shaikh<span className="text-[#596A99]">.</span>
          </h1>

          <h2 className="mt-7 max-w-2xl text-xl font-semibold leading-tight text-[#26365F] sm:text-2xl md:text-3xl">
            AI/ML Enthusiast & Full-Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#596A99] sm:text-lg">
            I build intelligent applications and modern web experiences
            using AI/ML and full-stack technologies.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#projects"
              className="rounded-full bg-[#3A4A78] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F3D68]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#3A4A78] px-7 py-3.5 text-center text-sm font-semibold text-[#3A4A78] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A4A78] hover:text-white"
            >
              Let's Connect
            </a>

          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="mt-8 flex items-center gap-5">

            <a
              href="https://github.com/altafshaikh7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="#"
              className="text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-[#596A99]" />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#3A4A78]/70 transition-colors hover:text-[#3A4A78]"
            >
              Resume
            </a>

          </div>
        </div>

        {/* ================= RIGHT PHOTO ================= */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Decorative circle */}
          <div className="absolute h-72 w-72 rounded-full border border-[#3A4A78]/15 sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px]" />

          {/* Photo container */}
          <div className="relative z-10 h-72 w-72 overflow-hidden rounded-full border-[10px] border-[#F0E4B8] bg-[#D9CC9C] shadow-2xl sm:h-96 sm:w-96 lg:h-[460px] lg:w-[460px]">

            <img
              src="/src/assets/profile.jpg"
              alt="Altaf Shaikh"
              className="h-full w-full object-cover object-[center_35%]"
            />

          </div>

        </div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#3A4A78]/60 transition-colors hover:text-[#3A4A78] sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-[#3A4A78]/30" />
      </a>

    </section>
  );
}

export default Hero;