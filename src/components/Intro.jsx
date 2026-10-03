import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Intro({ onComplete }) {
  const videoRef = useRef(null);

  const [phase, setPhase] = useState("intro");
  const [soundOn, setSoundOn] = useState(false);

  // Lock page scrolling while intro is active
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Sound ON / OFF
  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    if (soundOn) {
      video.muted = true;
      setSoundOn(false);
    } else {
      video.muted = false;
      video.volume = 1;
      setSoundOn(true);
    }
  };

  // Video finished
  const handleVideoEnd = () => {
    setPhase("loading");

    // EXACT 1.2 SECOND LOADER
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {/* =====================================================
          CINEMATIC INTRO VIDEO
      ====================================================== */}
      {phase === "intro" && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-black"
        >
          {/* VIDEO */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/intro/portfolio-intro.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark cinematic overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          {/* Cinematic vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.72) 100%)",
            }}
          />

          {/* Top cinematic line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="pointer-events-none absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-[#F0E4B8] to-transparent opacity-70"
          />

          {/* =================================================
              SOUND BUTTON
          ================================================== */}
          <motion.button
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            onClick={toggleSound}
            className="absolute bottom-7 right-7 z-20 flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2.5 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#F0E4B8]/60 hover:bg-black/55"
            aria-label={soundOn ? "Mute sound" : "Turn sound on"}
          >
            {/* Text */}
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
              {soundOn ? "Sound On" : "Sound Off"}
            </span>

            {/* Icon */}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">
              {soundOn ? (
                /* Volume ON */
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              ) : (
                /* Volume OFF */
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              )}
            </span>
          </motion.button>

          {/* Bottom cinematic progress */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
            <motion.div
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 8,
                ease: "linear",
              }}
              className="h-full bg-[#F0E4B8]"
            />
          </div>
        </motion.div>
      )}

      {/* =====================================================
          1.2 SECOND PREMIUM CINEMATIC LOADER
      ====================================================== */}
      {phase === "loading" && (
        <motion.div
          key="loading"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* =================================================
              AMBIENT GLOW
          ================================================== */}
          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1.2,
              opacity: 0.22,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="absolute h-[300px] w-[300px] rounded-full blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, #F0E4B8 0%, #3A4A78 40%, transparent 72%)",
            }}
          />

          {/* =================================================
              MAIN LOADER
          ================================================== */}
          <div className="relative flex flex-col items-center">

            {/* OUTER ROTATING RING */}
            <motion.div
              initial={{
                scale: 0.45,
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 360,
              }}
              transition={{
                scale: {
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.25,
                },
                rotate: {
                  duration: 1.2,
                  ease: "linear",
                },
              }}
              className="absolute h-20 w-20 rounded-full border border-transparent border-t-[#F0E4B8] border-r-[#3A4A78]"
            />

            {/* SECOND ROTATING RING */}
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: -360,
              }}
              transition={{
                scale: {
                  delay: 0.08,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  delay: 0.08,
                  duration: 0.25,
                },
                rotate: {
                  duration: 0.9,
                  ease: "linear",
                },
              }}
              className="h-12 w-12 rounded-full border border-white/10 border-b-[#F0E4B8]"
            />

            {/* CENTER GLOW / DOT */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0.8],
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
              className="absolute h-3 w-3 rounded-full bg-[#F0E4B8] shadow-[0_0_25px_rgba(240,228,184,0.9)]"
            />

            {/* ENTERING TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
                letterSpacing: "0.2em",
              }}
              animate={{
                opacity: 1,
                y: 0,
                letterSpacing: "0.5em",
              }}
              transition={{
                delay: 0.25,
                duration: 0.45,
                ease: "easeOut",
              }}
              className="mt-28 pl-[0.5em] text-[9px] font-semibold uppercase text-white/60"
            >
              Entering
            </motion.div>
          </div>

          {/* =================================================
              CINEMATIC HORIZONTAL REVEAL LINE
          ================================================== */}
          <div className="absolute bottom-14 left-1/2 w-[180px] -translate-x-1/2">
            <div className="h-[1px] w-full overflow-hidden bg-white/10">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="h-full w-full bg-gradient-to-r from-transparent via-[#F0E4B8] to-[#3A4A78]"
              />
            </div>
          </div>

          {/* SMALL PROGRESS NUMBER */}
          <div className="absolute bottom-14 right-8 text-[8px] font-medium tracking-[0.3em] text-white/25">
            01
          </div>

          {/* TOP MINI LINE */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-[#F0E4B8] to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;