import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import aboutImage from "../assets/about.png";

/* =====================================================
   SHARED EASING & VARIANTS
===================================================== */

const EASE = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const eyebrowVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const lineVariant = {
  hidden: { y: "115%" },
  visible: {
    y: "0%",
    transition: { duration: 0.95, ease: EASE },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

function About() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  /* =====================================================
     SCROLL PARALLAX
  ===================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowLeftY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], [-55, 65]);
  const visualY = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate w-full overflow-hidden bg-[#F0E4B8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft glow — left */}
        <motion.div
          style={{ y: reduce ? 0 : glowLeftY }}
          className="
            absolute
            left-[-120px]
            top-[15%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#3A4A78]/[0.06]
            blur-[100px]
          "
        />

        {/* Soft glow — right */}
        <motion.div
          style={{ y: reduce ? 0 : glowRightY }}
          className="
            absolute
            right-[-100px]
            bottom-[5%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#596A99]/[0.07]
            blur-[100px]
          "
        />

        {/* Technical grid — seamless diagonal drift */}
        <motion.div
          className="absolute -inset-[55px] opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                #3A4A78 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                #3A4A78 1px,
                transparent 1px
              )
            `,
            backgroundSize: "55px 55px",
          }}
          animate={reduce ? {} : { x: [0, 55], y: [0, 55] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={eyebrowVariant}
            className="mb-4 flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="h-px w-8 origin-left bg-[#596A99]/60"
            />

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#596A99]
              "
            >
              About Me
            </p>
          </motion.div>

          {/* Headline — masked line reveal */}
          <h2
            className="
              text-4xl
              font-black
              leading-[1.08]
              tracking-[-0.03em]
              text-[#3A4A78]
              sm:text-5xl
              lg:text-6xl
            "
          >
            <span className="block overflow-hidden">
              <motion.span variants={lineVariant} className="block">
                Building with
              </motion.span>
            </span>

            <span className="block overflow-hidden">
              <motion.span
                variants={lineVariant}
                className="
                  block
                  bg-gradient-to-r
                  from-[#596A99]
                  via-[#3A4A78]
                  to-[#596A99]
                  bg-[length:200%_100%]
                  bg-clip-text
                  text-transparent
                "
                animate={
                  reduce
                    ? {}
                    : { backgroundPosition: ["0% 50%", "200% 50%"] }
                }
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                purpose & technology.
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <motion.div
            style={{ y: reduce ? 0 : visualY }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="
              relative
              flex
              min-h-[460px]
              items-center
              justify-center
              lg:min-h-[560px]
              lg:justify-start
            "
          >
            {/* ============================================
                AMBIENT GLOW BEHIND SUBJECT
            ============================================ */}

            <motion.div
              animate={
                reduce
                  ? {}
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-[8%]
                top-[18%]
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#596A99]/25
                blur-[80px]
                lg:h-[380px]
                lg:w-[380px]
              "
            />

            {/* ============================================
                ABSTRACT BACKGROUND ELEMENTS
            ============================================ */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="
                absolute
                left-[5%]
                top-[8%]
                h-[330px]
                w-[330px]
                lg:h-[440px]
                lg:w-[440px]
              "
            >
              <motion.div
                animate={reduce ? {} : { rotate: [-12, -2, -12] }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  w-full
                  rounded-[45%]
                  border
                  border-[#3A4A78]/10
                "
              />
            </motion.div>

            {/* Second abstract frame */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.35 }}
              className="
                absolute
                left-[10%]
                top-[12%]
                h-[300px]
                w-[300px]
                lg:h-[410px]
                lg:w-[410px]
              "
            >
              <motion.div
                animate={reduce ? {} : { rotate: [12, 3, 12] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  w-full
                  rounded-[45%]
                  border
                  border-[#596A99]/10
                "
              />
            </motion.div>

            {/* ============================================
                FLOOR SHADOW
            ============================================ */}

            <motion.div
              initial={{ opacity: 0, scaleX: 0.4 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="
                absolute
                bottom-[7%]
                left-[12%]
                h-[35px]
                w-[270px]
                rounded-full
                bg-[#3A4A78]/20
                blur-[25px]
                lg:bottom-[8%]
                lg:w-[360px]
              "
            />

            {/* ============================================
                IMAGE
            ============================================ */}

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="
                relative
                z-10
                flex
                w-full
                items-end
                justify-center
                lg:justify-start
              "
            >
              <motion.div
                animate={reduce ? {} : { y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  flex
                  w-full
                  justify-center
                  lg:justify-start
                "
              >
                <img
                  src={aboutImage}
                  alt="Altaf Shaikh"
                  className="
                    relative
                    z-10
                    h-auto
                    w-[78%]
                    max-w-[430px]
                    object-contain
                    drop-shadow-[0_30px_35px_rgba(58,74,120,0.18)]
                    sm:w-[65%]
                    lg:w-[88%]
                    lg:max-w-[500px]
                  "
                />
              </motion.div>
            </motion.div>

            {/* ============================================
                FLOATING LABEL
            ============================================ */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="
                absolute
                bottom-[13%]
                left-[3%]
                z-20
                hidden
                sm:block
              "
            >
              <motion.div
                animate={reduce ? {} : { y: [0, -7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-[#D9CC9C]
                  bg-[#F0E4B8]/80
                  px-4
                  py-2
                  shadow-[0_10px_30px_-18px_rgba(58,74,120,0.6)]
                  backdrop-blur-md
                "
              >
                {/* shimmer sweep */}
                <motion.span
                  aria-hidden="true"
                  animate={
                    reduce ? {} : { x: ["-160%", "160%"] }
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-white/45
                    to-transparent
                  "
                />

                <p
                  className="
                    relative
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#3A4A78]
                  "
                >
                  AI • ML • FULL STACK
                </p>
              </motion.div>
            </motion.div>

            {/* Small technical number */}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="
                absolute
                right-[8%]
                top-[12%]
                z-20
                hidden
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-[#596A99]/50
                lg:block
              "
            >
              01 / ABOUT
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div>
            {/* =================================================
                ABOUT TEXT
            ================================================= */}

            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.p
                variants={paragraphVariant}
                className="
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#596A99]
                "
              >
                I'm Altaf Shaikh, a final-year Computer Science &
                Engineering student passionate about Artificial
                Intelligence, Machine Learning, and modern web
                development.
              </motion.p>

              <motion.p
                variants={paragraphVariant}
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#596A99]
                "
              >
                I enjoy turning ideas into practical applications by
                combining AI/ML with full-stack technologies. My focus
                is on building useful, scalable, and user-friendly
                digital experiences.
              </motion.p>

              <motion.p
                variants={paragraphVariant}
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#596A99]
                "
              >
                Alongside academics, I actively work on projects,
                hackathons, and technology communities where I get to
                learn, experiment, and solve real-world problems.
              </motion.p>
            </motion.div>

            {/* =================================================
                EDUCATION
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-10"
            >
              <motion.div
                whileHover={reduce ? {} : { y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#3A4A78]/10
                  bg-white/35
                  p-6
                  shadow-[0_18px_50px_-32px_rgba(58,74,120,0.55)]
                  backdrop-blur-sm
                  transition-shadow
                  duration-500
                  hover:shadow-[0_30px_65px_-30px_rgba(58,74,120,0.55)]
                  sm:p-7
                "
              >
                {/* Accent bar */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    origin-top
                    scale-y-[0.35]
                    bg-gradient-to-b
                    from-[#3A4A78]
                    via-[#596A99]
                    to-transparent
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-y-100
                  "
                />

                {/* Soft inner glow on hover */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#596A99]/15
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <p
                  className="
                    relative
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#596A99]
                  "
                >
                  Education
                </p>

                <h3
                  className="
                    relative
                    mt-3
                    text-xl
                    font-bold
                    leading-8
                    text-[#3A4A78]
                    sm:text-2xl
                  "
                >
                  B.Tech — Computer Science & Engineering
                </h3>

                <p
                  className="
                    relative
                    mt-2
                    text-sm
                    leading-6
                    text-[#596A99]
                  "
                >
                  Sanjeevan Engineering & Technology Institute
                </p>

                {/* ============================================
                    LOCATION
                ============================================ */}

                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=Sanjeevan+Engineering+and+Technology+Institute+Panhala+Kolhapur+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? {} : { x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 24,
                  }}
                  className="
                    group/link
                    relative
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#3A4A78]
                    transition-colors
                    duration-300
                    hover:text-[#596A99]
                  "
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={reduce ? {} : { y: [0, -3, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      d="M20 10.2C20 15.5 12 22 12 22S4 15.5 4 10.2C4 5.67 7.58 2 12 2s8 3.67 8 8.2Z"
                      fill="#EA4335"
                    />

                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      fill="white"
                    />
                  </motion.svg>

                  <span className="relative">
                    <span
                      className="
                        underline
                        decoration-[#596A99]/40
                        underline-offset-4
                      "
                    >
                      Panhala, Kolhapur, Maharashtra
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        w-0
                        bg-[#3A4A78]
                        transition-all
                        duration-500
                        ease-out
                        group-hover/link:w-full
                      "
                    />
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;