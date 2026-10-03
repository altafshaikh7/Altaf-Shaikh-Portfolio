import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hackathons = [
  {
    id: 1,
    title: "Smart India Hackathon 2025",
    achievement: "National-Level Finalist",
    image: "/hackathons/sih-2025.jpg",
    description:
      "Our Team BHASKARA worked on an AI/ML-enabled Digital Twin solution for EHV substations.",
    details:
      "The SIH 2025 journey was an intense learning experience involving system design, AI/ML integration, 3D visualization, teamwork, and problem-solving under real-world constraints.",
  },

  {
    id: 2,
    title: "SIH Internal Hackathon",
    achievement: "Winner",
    image: "/hackathons/sih-internal.jpg",
    description:
      "Participated in the internal selection round for Smart India Hackathon and secured the winning position.",
    details:
      "The internal hackathon provided an opportunity to work as a team, develop the idea, present the solution, and compete in a challenging environment.",
  },

  {
    id: 3,
    title: "BIG-O Battle",
    achievement: "Top 2",
    image: "/hackathons/big-o-battle.jpg",
    description:
      "Participated in the BIG-O Battle: Vibe Coding SaaS Startup Challenge organized by Google Developer Groups on Campus – VIT, Mumbai.",
    details:
      "Representing Team SGI Hunters from Sanjeevan Group of Institutes, Panhala, the competition focused on teamwork, innovation, problem-solving, and real-world SaaS startup challenges.",
  },

  {
    id: 4,
    title: "Buildverse",
    achievement: "Top 5",
    image: "/hackathons/buildverse.jpg",
    description:
      "Participated in Buildverse, a 24-hour Hackathon organized by Scaler School of Technology and Hack with India at the SST campus, Bengaluru.",
    details:
      "It was an experience filled with creativity, coding, collaboration, and real-world problem solving.",
  },

  {
    id: 5,
    title: "Algoverse 2025",
    achievement: "National-Level Hackathon",
    image: "/hackathons/algoverse-2025.jpg",
    description:
      "Participated in Algoverse 2025, a national-level hackathon organized by HackWithIndia IGDTUW.",
    details:
      "The experience involved intense brainstorming, innovative problem-solving, and collaborative development from ideation to execution.",
  },

  {
    id: 6,
    title: "Adobe India Hackathon 2025",
    achievement: "Round 1 Participant",
    image: "/hackathons/adobe-hackathon-2025.jpg",
    description:
      "Participated in Round 1 - Online MCQ Assessment + Coding of the Adobe India Hackathon 2025, organized by Adobe and powered by Unstop.",
    details:
      "Representing Sanjeevan Group Of Institutes, Panhala as part of Team SGI Hunters. The experience focused on problem solving, DSA, coding, debugging, teamwork, and time management.",
  },

  {
    id: 7,
    title: "Bharatiya Antariksh Hackathon 2025",
    achievement: "Idea Submission",
    image: "/hackathons/bharatiya-antariksh-2025.jpg",
    description:
      "Successfully submitted an idea for the Bharatiya Antariksh Hackathon 2025 organized by ISRO.",
    details:
      "The experience provided an opportunity to explore innovation, curiosity, and real-world challenges in space and technology.",
  },

  {
    id: 8,
    title: "Code Cubicle 5.0",
    achievement: "Certificate of Participation",
    image: "/hackathons/code-cubicle-5.jpg",
    description:
      "Participated in Code Cubicle 5.0 Hackathon, organized by Geek Room, during the online round held on 14th September 2025.",
    details:
      "The hackathon provided an opportunity to brainstorm, collaborate, and explore creative technology solutions alongside passionate developers.",
  },
];

function Hackathons() {
  const [page, setPage] = useState(0);
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const itemsPerPage = 3;

  const totalPages = Math.ceil(
    hackathons.length / itemsPerPage
  );

  const startIndex = page * itemsPerPage;

  const visibleHackathons = hackathons.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  /* Close modal with ESC */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedHackathon(null);
      }
    };

    if (selectedHackathon) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedHackathon]);

  return (
    <>
      {/* =====================================================
          HACKATHONS SECTION
      ====================================================== */}

      <section
        id="hackathons"
        className="w-full overflow-hidden bg-[#F0E4B8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-14"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
              Hackathons
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.03em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
              Competing,
              <br />

              <span className="text-[#596A99]">
                building & learning.
              </span>
            </h2>
          </motion.div>

          {/* =====================================================
              CARDS
          ====================================================== */}

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{
                  opacity: 0,
                  x: 45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -45,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleHackathons.map(
                  (hackathon, index) => (
                    <motion.button
                      key={hackathon.id}
                      type="button"
                      onClick={() =>
                        setSelectedHackathon(hackathon)
                      }
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group text-left"
                    >
                      <div className="overflow-hidden rounded-[28px] border border-[#D9CC9C] bg-[#F5EBCB] shadow-[0_18px_50px_rgba(58,74,120,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(58,74,120,0.16)]">

                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#D9CC9C]">
                          <img
                            src={hackathon.image}
                            alt={hackathon.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#26365F]/80 via-transparent to-transparent opacity-70" />

                          {/* Achievement */}
                          <div className="absolute left-5 top-5">
                            <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#3A4A78] shadow-lg backdrop-blur-sm">
                              {hackathon.achievement}
                            </span>
                          </div>

                          {/* Arrow */}
                          <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#3A4A78] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="h-5 w-5"
                            >
                              <path
                                d="M5 12h14M13 6l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#596A99]">
                            {hackathon.achievement}
                          </p>

                          <h3 className="text-xl font-bold leading-tight text-[#3A4A78] sm:text-2xl">
                            {hackathon.title}
                          </h3>

                          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#596A99]">
                            {hackathon.description}
                          </p>

                          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#3A4A78]">
                            View Details

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  )
                )}
              </motion.div>
            </AnimatePresence>

            {/* =====================================================
                PAGINATION
            ====================================================== */}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-5">

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousPage}
                  disabled={page === 0}
                  aria-label="Previous hackathons"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3A4A78]/20 bg-[#F5EBCB] text-[#3A4A78] transition-all duration-300 hover:-translate-x-1 hover:border-[#3A4A78] hover:bg-[#3A4A78] hover:text-white disabled:pointer-events-none disabled:opacity-30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M19 12H5M11 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Page */}
                <div className="text-sm font-semibold text-[#596A99]">
                  {page + 1} / {totalPages}
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextPage}
                  disabled={
                    page === totalPages - 1
                  }
                  aria-label="Next hackathons"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3A4A78]/20 bg-[#F5EBCB] text-[#3A4A78] transition-all duration-300 hover:translate-x-1 hover:border-[#3A4A78] hover:bg-[#3A4A78] hover:text-white disabled:pointer-events-none disabled:opacity-30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
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
        </div>
      </section>

      {/* =====================================================
          COMPACT MOBILE-FRIENDLY MODAL
          PHOTO TOP + TEXT BOTTOM
      ====================================================== */}

      <AnimatePresence>
        {selectedHackathon && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#26365F]/70 p-2 backdrop-blur-md sm:p-4"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setSelectedHackathon(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[520px] overflow-hidden rounded-[20px] bg-[#F0E4B8] shadow-2xl"
            >

              {/* Close */}
              <button
                type="button"
                onClick={() =>
                  setSelectedHackathon(null)
                }
                aria-label="Close"
                className="absolute right-2.5 top-2.5 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#3A4A78] shadow-md transition-all duration-300 hover:rotate-90 hover:bg-[#3A4A78] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* =================================================
                  MODAL PHOTO
              ================================================== */}

              <div className="relative h-[120px] w-full overflow-hidden bg-[#D9CC9C] sm:h-[180px]">
                <img
                  src={selectedHackathon.image}
                  alt={selectedHackathon.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#26365F]/65 via-transparent to-transparent" />

                {/* Achievement */}
                <div className="absolute bottom-2.5 left-3">
                  <span className="inline-flex rounded-full bg-white/95 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#3A4A78] shadow">
                    {selectedHackathon.achievement}
                  </span>
                </div>
              </div>

              {/* =================================================
                  MODAL CONTENT
              ================================================== */}

              <div className="px-4 py-4 sm:px-6 sm:py-5">

                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#596A99]">
                  Hackathon Experience
                </p>

                <h2 className="mt-1.5 text-xl font-black leading-tight tracking-[-0.02em] text-[#3A4A78] sm:text-2xl">
                  {selectedHackathon.title}
                </h2>

                <div className="mt-2.5 h-px w-10 bg-[#596A99]/40" />

                <p className="mt-3 text-[11px] leading-[1.55] text-[#596A99] sm:text-xs">
                  {selectedHackathon.description}
                </p>

                <p className="mt-2 text-[11px] leading-[1.55] text-[#596A99] sm:text-xs">
                  {selectedHackathon.details}
                </p>

                {/* Close */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedHackathon(null)
                  }
                  className="mt-3 rounded-full bg-[#3A4A78] px-4 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:bg-[#2F3D68]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hackathons;