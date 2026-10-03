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
  const [selectedHackathon, setSelectedHackathon] =
    useState(null);

  // NEW:
  // Stores the selected image's aspect ratio.
  const [imageRatio, setImageRatio] = useState(null);

  const itemsPerPage = 3;

  const totalPages = Math.ceil(
    hackathons.length / itemsPerPage
  );

  const startIndex = page * itemsPerPage;

  const visibleHackathons = hackathons.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // =====================================================
  // OPEN MODAL
  // =====================================================

  const openHackathon = (hackathon) => {
    setImageRatio(null);
    setSelectedHackathon(hackathon);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================

  const closeHackathon = () => {
    setSelectedHackathon(null);
    setImageRatio(null);
  };

  // =====================================================
  // NEXT PAGE
  // =====================================================

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  // =====================================================
  // PREVIOUS PAGE
  // =====================================================

  const previousPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  // =====================================================
  // ESCAPE + BODY SCROLL LOCK
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeHackathon();
      }
    };

    if (selectedHackathon) {
      document.body.style.overflow = "hidden";

      window.addEventListener(
        "keydown",
        handleEscape
      );
    }

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedHackathon]);

  return (
    <>
      {/* =====================================================
          HACKATHONS
      ===================================================== */}

      <section
        id="hackathons"
        className="w-full overflow-hidden bg-[#F0E4B8] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">

          {/* =================================================
              HEADING
          ================================================= */}

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
            className="mb-10 sm:mb-14"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#596A99] sm:text-sm">
              Hackathons
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
              Competing,
              <br />

              <span className="text-[#596A99]">
                building & learning.
              </span>
            </h2>
          </motion.div>

          {/* =================================================
              CARDS
          ================================================= */}

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
                className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleHackathons.map(
                  (hackathon, index) => (
                    <motion.button
                      key={hackathon.id}
                      type="button"
                      onClick={() =>
                        openHackathon(hackathon)
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
                      className="group flex h-full min-w-0 text-left"
                    >
                      <div
                        className="
                          flex
                          h-full
                          w-full
                          flex-col
                          overflow-hidden
                          rounded-[22px]
                          border
                          border-[#D9CC9C]
                          bg-[#F5EBCB]
                          shadow-[0_18px_50px_rgba(58,74,120,0.08)]
                          transition-all
                          duration-500
                          group-hover:-translate-y-2
                          group-hover:shadow-[0_25px_60px_rgba(58,74,120,0.16)]
                          sm:rounded-[26px]
                        "
                      >

                        {/* =================================================
                            CARD IMAGE
                        ================================================= */}

                        <div
                          className="
                            relative
                            h-[270px]
                            min-h-[270px]
                            w-full
                            shrink-0
                            overflow-hidden
                            bg-[#D9CC9C]
                            sm:h-[280px]
                            sm:min-h-[280px]
                          "
                        >
                          <img
                            src={hackathon.image}
                            alt={hackathon.title}
                            className="
                              absolute
                              inset-0
                              block
                              h-full
                              w-full
                              object-cover
                              object-top
                            "
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26365F]/80 via-transparent to-transparent opacity-70" />

                          <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                            <span className="inline-flex max-w-[calc(100vw-70px)] rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#3A4A78] shadow-lg backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs">
                              {hackathon.achievement}
                            </span>
                          </div>

                          <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#3A4A78] shadow-lg transition-all duration-300 sm:bottom-5 sm:right-5 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="h-4 w-4 sm:h-5 sm:w-5"
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

                        {/* =================================================
                            CARD CONTENT
                        ================================================= */}

                        <div className="flex flex-1 flex-col p-4 sm:p-6">

                          <p className="mb-2 shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#596A99] sm:text-xs">
                            {hackathon.achievement}
                          </p>

                          <h3 className="shrink-0 text-lg font-bold leading-tight text-[#3A4A78] sm:text-xl lg:text-2xl">
                            {hackathon.title}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#596A99] sm:mt-4 sm:text-sm sm:leading-6">
                            {hackathon.description}
                          </p>

                          <div className="mt-auto flex items-center gap-2 pt-5 text-xs font-bold text-[#3A4A78] sm:pt-6 sm:text-sm">
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

            {/* =================================================
                PAGINATION
            ================================================= */}

            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">

                <button
                  type="button"
                  onClick={previousPage}
                  disabled={page === 0}
                  aria-label="Previous hackathons"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A4A78]/20 bg-[#F5EBCB] text-[#3A4A78] transition-all duration-300 hover:-translate-x-1 hover:border-[#3A4A78] hover:bg-[#3A4A78] hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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

                <div className="text-xs font-semibold text-[#596A99] sm:text-sm">
                  {page + 1} / {totalPages}
                </div>

                <button
                  type="button"
                  onClick={nextPage}
                  disabled={
                    page === totalPages - 1
                  }
                  aria-label="Next hackathons"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A4A78]/20 bg-[#F5EBCB] text-[#3A4A78] transition-all duration-300 hover:translate-x-1 hover:border-[#3A4A78] hover:bg-[#3A4A78] hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedHackathon && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#26365F]/75 p-2 backdrop-blur-md sm:p-4"
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
                closeHackathon();
              }
            }}
          >

            {/* =================================================
                MODAL

                Width is calculated from IMAGE RATIO.
            ================================================= */}

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
              style={
                imageRatio
                  ? {
                      width: `min(90vw, calc(54vh * ${imageRatio}))`,
                    }
                  : undefined
              }
              className="
                relative
                flex
                max-h-[90vh]
                w-[90vw]
                flex-col
                overflow-hidden
                rounded-[18px]
                bg-[#F0E4B8]
                shadow-2xl
                sm:max-h-[88vh]
                sm:rounded-[22px]
              "
            >

              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={closeHackathon}
                aria-label="Close"
                className="
                  absolute
                  right-2.5
                  top-2.5
                  z-30
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/95
                  text-[#3A4A78]
                  shadow-md
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-[#3A4A78]
                  hover:text-white
                  sm:right-3.5
                  sm:top-3.5
                  sm:h-9
                  sm:w-9
                "
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
                  IMAGE AREA

                  The image itself controls the width.
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  shrink-0
                  overflow-hidden
                  bg-transparent
                "
              >
                <img
                  src={selectedHackathon.image}
                  alt={selectedHackathon.title}
                  onLoad={(event) => {
                    const image =
                      event.currentTarget;

                    if (
                      image.naturalWidth &&
                      image.naturalHeight
                    ) {
                      setImageRatio(
                        image.naturalWidth /
                          image.naturalHeight
                      );
                    }
                  }}
                  className="
                    mx-auto
                    block
                    h-auto
                    w-full
                    max-h-[54vh]
                    object-contain
                  "
                />

                {/* Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26365F]/65 via-transparent to-transparent" />

                {/* Achievement */}

                <div className="absolute bottom-2.5 left-3">
                  <span className="inline-flex max-w-[calc(100vw-70px)] rounded-full bg-white/95 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#3A4A78] shadow sm:px-3">
                    {selectedHackathon.achievement}
                  </span>
                </div>
              </div>

              {/* =================================================
                  MODAL CONTENT
              ================================================= */}

              <div className="w-full shrink-0 px-4 py-3 sm:px-5 sm:py-3.5">

                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#596A99]">
                  Hackathon Experience
                </p>

                <h2 className="mt-1 break-words text-lg font-black leading-tight tracking-[-0.02em] text-[#3A4A78] sm:text-xl">
                  {selectedHackathon.title}
                </h2>

                <div className="mt-1.5 h-px w-9 bg-[#596A99]/40" />

                <p className="mt-2 text-[10px] leading-[1.4] text-[#596A99] sm:text-[11px] sm:leading-[1.45]">
                  {selectedHackathon.description}
                </p>

                <p className="mt-1.5 text-[10px] leading-[1.4] text-[#596A99] sm:text-[11px] sm:leading-[1.45]">
                  {selectedHackathon.details}
                </p>

                <button
                  type="button"
                  onClick={closeHackathon}
                  className="
                    mt-2.5
                    rounded-full
                    bg-[#3A4A78]
                    px-4
                    py-1.5
                    text-[9px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#2F3D68]
                    sm:px-4
                    sm:py-1.5
                    sm:text-[10px]
                  "
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