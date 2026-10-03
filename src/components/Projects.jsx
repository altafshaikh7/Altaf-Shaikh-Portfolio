import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";

const categories = ["Full Stack", "AI / ML", "Frontend"];

const projects = [
  // =====================================================
  // FULL STACK
  // =====================================================

  {
    id: 1,
    title: "SyncSpace",
    category: "Full Stack",
    language: "JavaScript",
    image: "/project/syncspace.png",

    shortDescription:
      "Real-time collaborative workspace for developers with coding, communication, meetings and AI-assisted development.",

    description:
      "SyncSpace is a full-stack collaborative development workspace that brings real-time coding, communication, video meetings, whiteboarding, file sharing and AI-assisted development into one platform.",

    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Yjs",
      "WebRTC",
      "OpenAI",
      "Tailwind CSS",
    ],

    github: "https://github.com/altafshaikh7/SyncSpace",

    live: "https://sync-space-navy.vercel.app/",
  },

  {
    id: 2,
    title: "MockHire",
    category: "Full Stack",
    language: "JavaScript",
    image: "/project/mockhire.png",

    shortDescription:
      "Video interview platform designed for mock interview practice and candidate preparation.",

    description:
      "MockHire is a video interview platform project focused on creating an interactive mock interview experience for candidates through a modern web application.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Video",
    ],

    github:
      "https://github.com/altafshaikh7/mockhire-video-interview-platform",

    live: null,
  },

  {
    id: 3,
    title: "Smart Health Analyzer",
    category: "Full Stack",
    language: "JavaScript",
    image: "/project/healthcare.png",

    shortDescription:
      "Healthcare web application combining MERN, OCR and AI-based analysis.",

    description:
      "Smart Health Analyzer is a healthcare-focused web application combining full-stack development with OCR and AI capabilities for processing health-related information.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "OCR",
      "AI",
      "Tailwind CSS",
    ],

    github: "https://github.com/altafshaikh7/healthcare_project",

    live: "https://healthcare-sgihunters.netlify.app/",
  },

  {
    id: 4,
    title: "ChatGPT Clone",
    category: "Full Stack",
    language: "JavaScript",
    image: "/project/chatgpt-clone.png",

    shortDescription:
      "Chat-based web application inspired by modern AI assistant interfaces.",

    description:
      "A ChatGPT-inspired web application focused on recreating a conversational AI interface and interaction flow.",

    technologies: [
      "React",
      "JavaScript",
      "API",
      "HTML",
      "CSS",
    ],

    github: "https://github.com/altafshaikh7/Chat-Gpt_Clone",

    live: null,
  },

  // =====================================================
  // AI / ML
  // =====================================================

  {
    id: 5,
    title: "SatQuery AI",
    category: "AI / ML",
    language: "Python",
    image: "/project/satquery.png",

    shortDescription:
      "Agentic AI framework for remote-sensing workflows using intelligent retrieval, reasoning and extensible specialist tools.",

    description:
      "SatQuery AI is a research-oriented agentic framework for remote sensing that connects natural-language queries with retrieval, reasoning and extensible specialist workflows. The project focuses on agentic orchestration, retrieval infrastructure, knowledge and solution spaces and modular tool integration.",

    technologies: [
      "Python",
      "LangChain",
      "OpenAI",
      "Hugging Face",
      "FAISS",
      "Sentence Transformers",
      "Ollama",
      "DualRAG",
      "Pydantic",
      "pytest",
    ],

    github: "https://github.com/altafshaikh7/satquery",

    live: null,
  },

  // =====================================================
  // FRONTEND
  // =====================================================

  {
    id: 6,
    title: "3D Digital Twin",
    category: "Frontend",
    language: "JavaScript / TypeScript",

    // No image currently available
    image: null,

    shortDescription:
      "Interactive 3D substation visualization built with React and Three.js technologies.",

    description:
      "A 3D digital-twin interface focused on interactive visualization of an EHV substation environment using React and Three.js based technologies.",

    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "React Three Drei",
      "Vite",
      "Recharts",
    ],

    github: "https://github.com/altafshaikh7/3D_SIH",

    live: null,
  },

  {
    id: 7,
    title: "Campus Connect",
    category: "Frontend",
    language: "JavaScript",

    // No image currently available
    image: null,

    shortDescription:
      "Campus-focused web application designed around a modern student and academic community experience.",

    description:
      "Campus Connect is a campus-oriented web project designed around a modern student experience and academic community interface.",

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    github: "https://github.com/altafshaikh7/Campus-Connect-",

    live: null,
  },

  {
    id: 8,
    title: "Construction Website",
    category: "Frontend",
    language: "JavaScript",
    image: "/project/construction.png",

    shortDescription:
      "Responsive construction website developed using HTML, CSS and JavaScript.",

    description:
      "A responsive construction-focused website created using HTML5, CSS3 and JavaScript with a clean and structured frontend experience.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],

    github:
      "https://github.com/altafshaikh7/Construction-Website",

    live: "https://altaf07.netlify.app/",
  },
];

// =====================================================
// PROJECT SECTION
// =====================================================

function Projects() {
  const [category, setCategory] = useState("Full Stack");

  // 0 = project 1 + 2
  // 1 = project 3 + 4
  const [page, setPage] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);

  const [direction, setDirection] = useState(1);

  // ===================================================
  // FILTER PROJECTS
  // ===================================================

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  // ===================================================
  // TOTAL PAGES
  // ===================================================

  const totalPages = Math.ceil(filteredProjects.length / 2);

  // ===================================================
  // CURRENT TWO PROJECTS
  // ===================================================

  const startIndex = page * 2;

  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + 2
  );

  // ===================================================
  // CATEGORY CHANGE
  // ===================================================

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setPage(0);
    setDirection(1);
  };

  // ===================================================
  // NEXT
  // ===================================================

  const nextProjects = () => {
    if (page >= totalPages - 1) {
      return;
    }

    setDirection(1);

    setPage((currentPage) => currentPage + 1);
  };

  // ===================================================
  // PREVIOUS
  // ===================================================

  const previousProjects = () => {
    if (page <= 0) {
      return;
    }

    setDirection(-1);

    setPage((currentPage) => currentPage - 1);
  };

  // ===================================================
  // ESC CLOSE MODAL
  // ===================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  // ===================================================
  // DISABLE BODY SCROLL
  // ===================================================

  useEffect(() => {
    document.body.style.overflow = selectedProject
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      {/* =====================================================
          PROJECT SECTION
      ===================================================== */}

      <section
        id="projects"
        className="w-full overflow-hidden bg-[#F0E4B8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
                Selected Work
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
                Projects I've
                <br />

                <span className="text-[#596A99]">
                  built.
                </span>
              </h2>
            </div>

            {/* =================================================
                CATEGORY BUTTONS
            ================================================= */}

            <div className="flex w-fit flex-wrap items-center rounded-full border border-[#D9CC9C] bg-white/25 p-1.5 backdrop-blur-sm">

              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    changeCategory(item)
                  }
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    category === item
                      ? "bg-[#3A4A78] text-white shadow-md"
                      : "text-[#596A99] hover:text-[#3A4A78]"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

          {/* =================================================
              PROJECT CARDS
          ================================================= */}

          <div className="relative mt-16">

            <div
              key={`${category}-${page}`}
              className={`grid gap-8 md:grid-cols-2 ${
                direction === 1
                  ? "animate-project-next"
                  : "animate-project-prev"
              }`}
            >

              {visibleProjects.map(
                (project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={() =>
                      setSelectedProject(
                        project
                      )
                    }
                  />
                )
              )}

            </div>

            {/* =================================================
                ARROW BUTTONS
            ================================================= */}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-end gap-3">

                {/* PREVIOUS */}

                <button
                  type="button"
                  onClick={previousProjects}
                  disabled={page === 0}
                  aria-label="Previous projects"
                  className={`group flex h-12 w-12 items-center justify-center rounded-full border border-[#3A4A78]/30 text-[#3A4A78] transition-all duration-300 ${
                    page === 0
                      ? "cursor-not-allowed opacity-30"
                      : "hover:-translate-x-1 hover:bg-[#3A4A78] hover:text-white"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* NEXT */}

                <button
                  type="button"
                  onClick={nextProjects}
                  disabled={
                    page === totalPages - 1
                  }
                  aria-label="Next projects"
                  className={`group flex h-14 w-14 items-center justify-center rounded-full bg-[#3A4A78] text-white shadow-lg transition-all duration-300 ${
                    page === totalPages - 1
                      ? "cursor-not-allowed opacity-30"
                      : "hover:translate-x-1 hover:bg-[#2F3D68]"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

              </div>
            )}

          </div>

          {/* =================================================
              PAGE INDICATOR
          ================================================= */}

          <div className="mt-8 flex items-center justify-between border-t border-[#D9CC9C] pt-5">

            <p className="text-sm font-medium text-[#596A99]">
              {category} Projects
            </p>

            <div className="flex items-center gap-4">

              <p className="text-sm font-bold text-[#3A4A78]">
                Page {page + 1} / {totalPages}
              </p>

              <div className="flex gap-1.5">

                {Array.from({
                  length: totalPages,
                }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setPage(index);

                      setDirection(
                        index > page
                          ? 1
                          : -1
                      );
                    }}
                    aria-label={`Go to page ${
                      index + 1
                    }`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      page === index
                        ? "w-7 bg-[#3A4A78]"
                        : "w-2 bg-[#3A4A78]/20"
                    }`}
                  />
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes projectNext {
          0% {
            opacity: 0;
            transform: translateX(45px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes projectPrev {
          0% {
            opacity: 0;
            transform: translateX(-45px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-project-next {
          animation:
            projectNext
            0.55s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .animate-project-prev {
          animation:
            projectPrev
            0.55s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-project-next,
          .animate-project-prev {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

// =========================================================
// PROJECT CARD
// =========================================================

function ProjectCard({
  project,
  onOpen,
}) {
  return (
    <article
      onClick={onOpen}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-[#D9CC9C]/80 bg-white/20 p-3 shadow-[0_20px_60px_rgba(58,74,120,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(58,74,120,0.16)]"
    >

      {/* =================================================
          IMAGE / FALLBACK
      ================================================= */}

      <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-[#D9CC9C]">

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display =
                "none";

              const fallback =
                event.currentTarget.parentElement?.querySelector(
                  ".image-fallback"
                );

              if (fallback) {
                fallback.classList.remove(
                  "hidden"
                );
              }
            }}
          />
        ) : null}

        {/* =================================================
            PREMIUM FALLBACK
        ================================================= */}

        <div
          className={`image-fallback absolute inset-0 flex flex-col items-center justify-center overflow-hidden ${
            project.image
              ? "hidden"
              : ""
          }`}
        >

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3A4A78] via-[#596A99] to-[#26365F]" />

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-white/10" />

          <div className="absolute right-10 bottom-10 h-20 w-20 rounded-full bg-white/5 blur-xl" />

          {/* Icon */}
          <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">

            {project.category ===
            "Frontend" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-10 w-10 text-white"
              >
                <path
                  d="M4 5.5C4 4.67 4.67 4 5.5 4h13C19.33 4 20 4.67 20 5.5v13c0 .83-.67 1.5-1.5 1.5h-13C4.67 20 4 19.33 4 18.5v-13Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 8h10M7 12h5M7 16h7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-10 w-10 text-white"
              >
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            )}

          </div>

          {/* Project title */}
          <p className="relative z-10 text-xl font-black tracking-tight text-white">
            {project.title}
          </p>

          {/* Category */}
          <p className="relative z-10 mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {project.category}
          </p>

        </div>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26365F]/50 via-transparent to-transparent opacity-60" />

        {/* CATEGORY */}
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#F0E4B8]/90 px-3 py-1.5 text-xs font-bold text-[#3A4A78] backdrop-blur-md">
          {project.category}
        </div>

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="px-3 pb-4 pt-5">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="text-2xl font-black tracking-tight text-[#3A4A78] transition-colors duration-300 group-hover:text-[#596A99]">
              {project.title}
            </h3>

            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#596A99]">
              {project.language}
            </p>

          </div>

          {/* OPEN */}

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3A4A78]/20 text-[#3A4A78] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#3A4A78] group-hover:text-white">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="M7 17L17 7M9 7H17V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </span>

        </div>

        {/* DESCRIPTION */}

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-[#596A99]">
          {project.shortDescription}
        </p>

        {/* TECHNOLOGIES */}

        <div className="mt-5 flex flex-wrap gap-2">

          {project.technologies
            .slice(0, 5)
            .map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#D9CC9C] bg-[#F0E4B8]/60 px-2.5 py-1 text-[11px] font-semibold text-[#3A4A78]"
              >
                {technology}
              </span>
            ))}

          {project.technologies.length >
            5 && (
            <span className="rounded-full border border-[#D9CC9C] bg-[#F0E4B8]/60 px-2.5 py-1 text-[11px] font-semibold text-[#596A99]">
              +
              {project.technologies.length -
                5}
            </span>
          )}

        </div>

        {/* LINKS */}

        <div
          className="mt-6 flex gap-3"
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          {/* GITHUB */}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#3A4A78] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F3D68]"
          >
            <SiGithub className="h-4 w-4" />

            GitHub
          </a>

          {/* LIVE */}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#3A4A78] px-5 py-2.5 text-xs font-bold text-[#3A4A78] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3A4A78] hover:text-white"
            >
              Live Demo

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M7 17L17 7M9 7H17V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </a>
          )}

        </div>

      </div>

    </article>
  );
}

// =========================================================
// PROJECT MODAL
// =========================================================

function ProjectModal({
  project,
  onClose,
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#26365F]/60 p-4 backdrop-blur-md"
      onClick={onClose}
    >

      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[30px] border border-white/40 bg-[#F0E4B8] p-4 shadow-2xl sm:p-6"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#3A4A78] text-xl text-white shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-[#2F3D68]"
        >
          ×
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">

          {/* IMAGE / FALLBACK */}

          <div className="relative min-h-[280px] overflow-hidden rounded-[24px] bg-[#D9CC9C]">

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full min-h-[280px] w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";

                  const fallback =
                    event.currentTarget.parentElement?.querySelector(
                      ".modal-image-fallback"
                    );

                  if (fallback) {
                    fallback.classList.remove(
                      "hidden"
                    );
                  }
                }}
              />
            ) : null}

            {/* MODAL FALLBACK */}

            <div
              className={`modal-image-fallback absolute inset-0 flex flex-col items-center justify-center overflow-hidden ${
                project.image
                  ? "hidden"
                  : ""
              }`}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[#3A4A78] via-[#596A99] to-[#26365F]" />

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-md">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-12 w-12 text-white"
                >
                  <path
                    d="M4 5.5C4 4.67 4.67 4 5.5 4h13C19.33 4 20 4.67 20 5.5v13c0 .83-.67 1.5-1.5 1.5h-13C4.67 20 4 19.33 4 18.5v-13Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M7 8h10M7 12h5M7 16h7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

              <p className="relative z-10 mt-6 text-2xl font-black text-white">
                {project.title}
              </p>

              <p className="relative z-10 mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {project.category}
              </p>

            </div>

          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center px-2 py-4">

            {/* CATEGORY */}

            <span className="w-fit rounded-full bg-[#3A4A78] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white">
              {project.category}
            </span>

            {/* TITLE */}

            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-[#3A4A78]">
              {project.title}
            </h2>

            {/* LANGUAGE */}

            <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[#596A99]">
              Built with{" "}
              {project.language}
            </p>

            {/* DESCRIPTION */}

            <p className="mt-6 text-base leading-7 text-[#596A99]">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}

            <div className="mt-7">

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#3A4A78]">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">

                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#D9CC9C] bg-white/40 px-3 py-1.5 text-xs font-semibold text-[#3A4A78]"
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>

            </div>

            {/* LINKS */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#3A4A78] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F3D68]"
              >
                <SiGithub className="h-5 w-5" />

                View GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#3A4A78] px-6 py-3 text-sm font-bold text-[#3A4A78] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A4A78] hover:text-white"
                >
                  Live Demo

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M7 17L17 7M9 7H17V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </a>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;