import { useEffect, useRef, useState } from "react";
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
      "A full-stack collaborative workspace combining real-time coding, communication, video meetings, whiteboarding, file sharing and AI-assisted development.",

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
      "A modern video interview platform focused on creating an interactive mock interview experience for candidates.",

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
      "A healthcare-focused web application combining full-stack development with OCR and AI capabilities.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "OCR",
      "AI",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/altafshaikh7/healthcare_project",

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

    github:
      "https://github.com/altafshaikh7/Chat-Gpt_Clone",

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
      "Agentic AI framework for remote-sensing workflows using intelligent retrieval and reasoning.",

    description:
      "A research-oriented agentic framework for remote sensing connecting natural-language queries with retrieval, reasoning and extensible specialist workflows.",

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

    github:
      "https://github.com/altafshaikh7/satquery",

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

    image: null,

    shortDescription:
      "Interactive 3D substation visualization built with React and Three.js.",

    description:
      "A 3D digital-twin interface focused on interactive visualization of an EHV substation environment.",

    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "React Three Drei",
      "Vite",
      "Recharts",
    ],

    github:
      "https://github.com/altafshaikh7/3D_SIH",

    live: null,
  },

  {
    id: 7,
    title: "Campus Connect",
    category: "Frontend",
    language: "JavaScript",

    image: null,

    shortDescription:
      "Campus-focused web application designed around a modern student experience.",

    description:
      "A campus-oriented web project designed around a modern student experience and academic community interface.",

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/altafshaikh7/Campus-Connect-",

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
      "A responsive construction-focused website created using HTML5, CSS3 and JavaScript.",

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

// =========================================================
// PROJECTS SECTION
// =========================================================

function Projects() {
  const [category, setCategory] = useState("Full Stack");
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [direction, setDirection] = useState(1);

  /* =====================================================
     ENTRANCE ANIMATION TRIGGER (whole section)
  ===================================================== */

  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // =====================================================
  // FILTER
  // =====================================================

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  // =====================================================
  // PAGINATION
  // =====================================================

  const totalPages = Math.ceil(
    filteredProjects.length / 2
  );

  const startIndex = page * 2;

  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + 2
  );

  // =====================================================
  // CATEGORY CHANGE
  // =====================================================

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setPage(0);
    setDirection(1);
  };

  // =====================================================
  // NEXT
  // =====================================================

  const nextProjects = () => {
    if (page >= totalPages - 1) {
      return;
    }

    setDirection(1);
    setPage((currentPage) => currentPage + 1);
  };

  // =====================================================
  // PREVIOUS
  // =====================================================

  const previousProjects = () => {
    if (page <= 0) {
      return;
    }

    setDirection(-1);
    setPage((currentPage) => currentPage - 1);
  };

  // =====================================================
  // ESCAPE TO CLOSE
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  // =====================================================
  // LOCK BACKGROUND SCROLL
  // =====================================================

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      {/* =================================================
          PROJECT SECTION
      ================================================= */}

      <section
        id="projects"
        ref={sectionRef}
        className={`projects-section w-full overflow-hidden bg-[#F0E4B8] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
          revealed ? "is-revealed" : ""
        }`}
      >
        <div className="mx-auto w-full max-w-6xl">

          {/* =================================================
              HEADER  (About.jsx style)
          ================================================= */}

          <div className="projects-header flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="projects-label mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#596A99] sm:text-xs">
                <span
                  className="projects-label-line"
                  aria-hidden="true"
                />
                Selected Work
              </p>

              <h2 className="projects-title text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
                <span className="projects-title-mask">
                  <span className="projects-title-line">
                    Projects I've
                  </span>
                </span>

                <span className="projects-title-mask">
                  <span className="projects-title-line projects-title-accent">
                    built.
                  </span>
                </span>
              </h2>
            </div>

            {/* =================================================
                CATEGORY BUTTONS
            ================================================= */}

            <div className="projects-categories flex w-fit max-w-full flex-wrap gap-1 rounded-full border border-[#D9CC9C] bg-white/30 p-1.5 backdrop-blur-sm">

              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    changeCategory(item)
                  }
                  className={`rounded-full px-3 py-2 text-[11px] font-bold transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-xs ${
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
              PROJECT GRID
          ================================================= */}

          <div className="mx-auto mt-10 w-full max-w-5xl sm:mt-12">

            <div
              key={`${category}-${page}`}
              className={`grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 ${
                direction === 1
                  ? "animate-project-next"
                  : "animate-project-prev"
              }`}
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={() =>
                    setSelectedProject(project)
                  }
                />
              ))}
            </div>

            {/* =================================================
                ARROWS
            ================================================= */}

            {totalPages > 1 && (
              <div className="projects-arrows mt-7 flex justify-end gap-2">

                <button
                  type="button"
                  onClick={previousProjects}
                  disabled={page === 0}
                  aria-label="Previous projects"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#3A4A78]/30 text-[#3A4A78] transition-all sm:h-11 sm:w-11 ${
                    page === 0
                      ? "cursor-not-allowed opacity-30"
                      : "hover:bg-[#3A4A78] hover:text-white"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
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

                <button
                  type="button"
                  onClick={nextProjects}
                  disabled={
                    page === totalPages - 1
                  }
                  aria-label="Next projects"
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#3A4A78] text-white shadow-md transition-all sm:h-11 sm:w-11 ${
                    page === totalPages - 1
                      ? "cursor-not-allowed opacity-30"
                      : "hover:bg-[#2F3D68]"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
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
              PAGE INFO
          ================================================= */}

          <div className="projects-pageinfo mx-auto mt-6 flex max-w-5xl items-center justify-between border-t border-[#D9CC9C] pt-4">

            <p className="text-[10px] font-medium text-[#596A99] sm:text-xs">
              {category} Projects
            </p>

            <div className="flex items-center gap-3">

              <p className="text-[10px] font-bold text-[#3A4A78] sm:text-xs">
                {page + 1} / {totalPages}
              </p>

              <div className="flex gap-1">

                {Array.from({
                  length: totalPages,
                }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setPage(index);

                      setDirection(
                        index > page ? 1 : -1
                      );
                    }}
                    aria-label={`Page ${
                      index + 1
                    }`}
                    className={`h-1.5 rounded-full transition-all ${
                      page === index
                        ? "w-6 bg-[#3A4A78]"
                        : "w-1.5 bg-[#3A4A78]/20"
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
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes projectPrev {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-project-next {
          animation:
            projectNext
            0.45s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-project-prev {
          animation:
            projectPrev
            0.45s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ===============================================
           HEADER — About.jsx style
        =============================================== */

        .projects-label {
          display: flex;
          align-items: center;
          gap: 12px;

          opacity: 0;
          translate: -18px 0;

          transition:
            opacity
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.1s,

            translate
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.1s;
        }

        .is-revealed .projects-label {
          opacity: 1;
          translate: 0 0;
        }

        .projects-label-line {
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
            0.25s;
        }

        .is-revealed .projects-label-line {
          scale: 1 1;
        }

        .projects-title-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }

        .projects-title-line {
          display: inline-block;
          translate: 0 115%;

          transition:
            translate
            0.95s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .projects-title-mask:nth-child(1) .projects-title-line {
          transition-delay: 0.15s;
        }

        .projects-title-mask:nth-child(2) .projects-title-line {
          transition-delay: 0.28s;
        }

        .is-revealed .projects-title-line {
          translate: 0 0;
        }

        .projects-title-accent {
          color: #596A99;

          background-image:
            linear-gradient(
              100deg,
              #596A99 0%,
              #596A99 40%,
              #3A4A78 50%,
              #596A99 60%,
              #596A99 100%
            );

          background-size: 200% 100%;
          background-position: 0% 50%;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .is-revealed .projects-title-accent {
          animation:
            projectsTitleShimmer
            9s
            linear
            1.2s
            infinite;
        }

        @keyframes projectsTitleShimmer {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 200% 50%;
          }
        }

        /* ===============================================
           CATEGORY BUTTONS — slide in from right
        =============================================== */

        .projects-categories {
          opacity: 0;
          translate: 24px 0;

          transition:
            opacity
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.4s,

            translate
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.4s;
        }

        .is-revealed .projects-categories {
          opacity: 1;
          translate: 0 0;
        }

        /* ===============================================
           PROJECT CARD — scroll entrance
        =============================================== */

        .project-card {
          opacity: 0;
          translate: 0 40px;
          scale: 0.94;
          filter: blur(6px);

          transition:
            opacity
            0.95s
            cubic-bezier(0.22, 1, 0.36, 1),

            translate
            0.95s
            cubic-bezier(0.22, 1, 0.36, 1),

            scale
            1s
            cubic-bezier(0.34, 1.4, 0.64, 1),

            filter
            0.95s
            cubic-bezier(0.22, 1, 0.36, 1),

            box-shadow
            0.4s
            ease,

            border-color
            0.4s
            ease;
        }

        /* Stagger per card */
        .is-revealed .project-card {
          opacity: 1;
          translate: 0 0;
          scale: 1;
          filter: blur(0);

          transition-delay:
            calc(var(--card-index, 0) * 0.14s + 0.35s);
        }

        /* ===============================================
           ARROWS — slide in from right
        =============================================== */

        .projects-arrows {
          opacity: 0;
          translate: 24px 0;

          transition:
            opacity
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.6s,

            translate
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.6s;
        }

        .is-revealed .projects-arrows {
          opacity: 1;
          translate: 0 0;
        }

        /* ===============================================
           PAGE INFO — fade + rise
        =============================================== */

        .projects-pageinfo {
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

        .is-revealed .projects-pageinfo {
          opacity: 1;
          translate: 0 0;
        }

        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {
          .animate-project-next,
          .animate-project-prev {
            animation: none;
          }

          .projects-label,
          .projects-title-line,
          .projects-label-line,
          .projects-categories,
          .project-card,
          .projects-arrows,
          .projects-pageinfo {
            opacity: 1 !important;
            translate: 0 0 !important;
            scale: 1 !important;
            filter: none !important;
            transition: none !important;
          }

          .projects-title-accent {
            animation: none !important;
            -webkit-text-fill-color: #596A99;
            background: none;
          }
        }
      `}</style>
    </>
  );
}

// =========================================================
// PROJECT CARD
// =========================================================

function ProjectCard({ project, index = 0, onOpen }) {
  return (
    <article
      onClick={onOpen}
      style={{ "--card-index": index }}
      className="project-card group min-w-0 cursor-pointer overflow-hidden rounded-[22px] border border-[#D9CC9C]/80 bg-white/20 p-2 shadow-[0_15px_45px_rgba(58,74,120,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(58,74,120,0.13)] sm:rounded-[24px] sm:p-2.5"
    >

      {/* =================================================
          CATEGORY
      ================================================= */}

      <div className="mb-2.5 px-1 sm:mb-3 sm:px-1.5">

        <span className="inline-flex rounded-full border border-white/80 bg-[#F0E4B8] px-3 py-1.5 text-[10px] font-bold text-[#3A4A78] shadow-sm sm:px-3.5 sm:text-[11px]">
          {project.category}
        </span>

      </div>

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="w-full overflow-hidden rounded-[17px] bg-[#D9CC9C] sm:rounded-[19px]">

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="block h-auto w-full object-contain"
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
            MISSING IMAGE FALLBACK
        ================================================= */}

        <div
          className={`image-fallback relative flex min-h-[180px] w-full items-center justify-center overflow-hidden ${
            project.image ? "hidden" : ""
          }`}
        >

          <div className="absolute inset-0 bg-gradient-to-br from-[#3A4A78] via-[#596A99] to-[#26365F]" />

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />

          <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[17px] border border-white/20 bg-white/10 backdrop-blur-md">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7 text-white"
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

          <p className="absolute bottom-5 left-0 right-0 z-10 px-4 text-center text-base font-black text-white">
            {project.title}
          </p>

        </div>

      </div>

      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div className="px-1.5 pb-2.5 pt-3 sm:px-2 sm:pb-3 sm:pt-3.5">

        <div className="flex items-start justify-between gap-2">

          <div className="min-w-0">

            <h3 className="break-words text-lg font-black tracking-tight text-[#3A4A78] sm:text-xl">
              {project.title}
            </h3>

            <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#596A99] sm:text-[10px]">
              {project.language}
            </p>

          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3A4A78]/20 text-[#3A4A78] transition-all duration-300 group-hover:bg-[#3A4A78] group-hover:text-white sm:h-9 sm:w-9">

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

          </span>

        </div>

        {/* DESCRIPTION */}

        <p className="mt-2 line-clamp-2 text-[11px] leading-[1.5] text-[#596A99] sm:text-xs">
          {project.shortDescription}
        </p>

        {/* TECHNOLOGIES */}

        <div className="mt-3 flex flex-wrap gap-1">

          {project.technologies
            .slice(0, 4)
            .map((technology) => (
              <span
                key={technology}
                className="max-w-full break-words rounded-full border border-[#D9CC9C] bg-[#F0E4B8]/60 px-2 py-1 text-[8px] font-semibold text-[#3A4A78] sm:text-[9px]"
              >
                {technology}
              </span>
            ))}

          {project.technologies.length > 4 && (
            <span className="rounded-full border border-[#D9CC9C] bg-[#F0E4B8]/60 px-2 py-1 text-[8px] font-semibold text-[#596A99]">
              +{project.technologies.length - 4}
            </span>
          )}

        </div>

        {/* =================================================
            LINKS
        ================================================= */}

        <div
          className="mt-3 flex flex-wrap gap-2"
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#3A4A78] px-3.5 py-1.5 text-[9px] font-bold text-white transition-all hover:bg-[#2F3D68] sm:px-4 sm:py-2 sm:text-[10px]"
          >
            <SiGithub className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4A78] px-3.5 py-1.5 text-[9px] font-bold text-[#3A4A78] transition-all hover:bg-[#3A4A78] hover:text-white sm:px-4 sm:py-2 sm:text-[10px]"
            >
              Live Demo
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

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#26365F]/75 p-2 backdrop-blur-md sm:p-4"
      onClick={onClose}
    >

      {/* =================================================
          MODAL
      ================================================= */}

      <div
        className="relative w-full max-w-[620px] overflow-hidden rounded-[20px] bg-[#F0E4B8] shadow-2xl sm:rounded-[24px]"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-2.5 top-2.5 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-[#3A4A78] text-base font-bold text-white shadow-lg transition-all hover:rotate-90 hover:bg-[#2F3D68] sm:right-3.5 sm:top-3.5 sm:h-9 sm:w-9 sm:text-lg"
        >
          ×
        </button>

        {/* =================================================
            MODAL IMAGE
        ================================================= */}

        <div className="flex w-full items-center justify-center overflow-hidden bg-[#D9CC9C]">

          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="
                block
                h-auto
                w-auto
                max-h-[38vh]
                max-w-full
                object-contain
                sm:max-h-[44vh]
              "
            />
          ) : (
            /* =================================================
              FALLBACK
            ================================================= */

            <div className="relative flex h-[170px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#3A4A78] via-[#596A99] to-[#26365F] sm:h-[210px]">

              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />

              <div className="absolute -bottom-20 -left-16 h-60 w-60 rounded-full border border-white/10" />

              <div className="relative z-10 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-md">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7 text-white"
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

                <p className="mt-3 text-lg font-black text-white">
                  {project.title}
                </p>

              </div>
            </div>
          )}

        </div>

        {/* =================================================
            MODAL CONTENT
        ================================================= */}

        <div className="px-4 py-3 sm:px-5 sm:py-3.5">

          {/* CATEGORY */}

          <span className="inline-flex rounded-full bg-[#3A4A78] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white sm:px-3 sm:text-[9px]">
            {project.category}
          </span>

          {/* TITLE */}

          <h2 className="mt-1.5 break-words text-lg font-black leading-tight tracking-tight text-[#3A4A78] sm:text-2xl">
            {project.title}
          </h2>

          {/* LANGUAGE */}

          <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#596A99] sm:text-[9px]">
            {project.language}
          </p>

          <div className="mt-2 h-px w-8 bg-[#596A99]/40" />

          {/* DESCRIPTION */}

          <p className="mt-2 max-w-xl text-[10px] leading-[1.4] text-[#596A99] sm:text-[11px] sm:leading-[1.5]">
            {project.description}
          </p>

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          <div className="mt-2.5">

            <p className="mb-1.5 text-[7px] font-bold uppercase tracking-[0.17em] text-[#3A4A78] sm:text-[8px]">
              Technologies
            </p>

            <div className="flex flex-wrap gap-1">

              {project.technologies
                .slice(0, 6)
                .map((technology) => (
                  <span
                    key={technology}
                    className="max-w-full break-words rounded-full border border-[#D9CC9C] bg-white/40 px-2 py-0.5 text-[8px] font-semibold text-[#3A4A78] sm:px-2.5 sm:py-1 sm:text-[9px]"
                  >
                    {technology}
                  </span>
                ))}

              {project.technologies.length > 6 && (
                <span className="rounded-full border border-[#D9CC9C] bg-white/40 px-2 py-0.5 text-[8px] font-semibold text-[#596A99]">
                  +{project.technologies.length - 6}
                </span>
              )}

            </div>
          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="mt-3 flex flex-wrap gap-2">

            {/* GITHUB */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#3A4A78] px-3.5 py-1.5 text-[9px] font-bold text-white transition-all hover:bg-[#2F3D68] sm:px-4 sm:py-2 sm:text-[10px]"
            >
              <SiGithub className="h-3 w-3" />
              GitHub
            </a>

            {/* LIVE */}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4A78] px-3.5 py-1.5 text-[9px] font-bold text-[#3A4A78] transition-all hover:bg-[#3A4A78] hover:text-white sm:px-4 sm:py-2 sm:text-[10px]"
              >
                Live Demo
              </a>
            )}

            {/* CLOSE */}

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#3A4A78]/30 px-3.5 py-1.5 text-[9px] font-bold text-[#3A4A78] transition-all hover:bg-[#3A4A78] hover:text-white sm:px-4 sm:py-2 sm:text-[10px]"
            >
              Close
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;