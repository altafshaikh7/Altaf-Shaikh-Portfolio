import { useEffect, useRef, useState } from "react";

import {
  SiPython,
  SiTensorflow,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: SiReact,
    symbol: "",
    size: "large",
    x: 6,
    y: 7,
    delay: "0s",
    duration: "5s",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    symbol: "",
    size: "medium",
    x: 25,
    y: 3,
    delay: "-1.5s",
    duration: "6s",
  },
  {
    name: "Python",
    icon: SiPython,
    symbol: "",
    size: "large",
    x: 46,
    y: 8,
    delay: "-2s",
    duration: "5.5s",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    symbol: "",
    size: "medium",
    x: 67,
    y: 4,
    delay: "-3s",
    duration: "6.5s",
  },
  {
    name: "CSS",
    icon: null,
    symbol: "CSS",
    size: "small",
    x: 87,
    y: 8,
    delay: "-2.5s",
    duration: "5.8s",
  },

  {
    name: "HTML5",
    icon: SiHtml5,
    symbol: "",
    size: "small",
    x: 3,
    y: 31,
    delay: "-1s",
    duration: "6s",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    symbol: "",
    size: "medium",
    x: 20,
    y: 29,
    delay: "-2.5s",
    duration: "5.5s",
  },
  {
    name: "Bootstrap",
    icon: null,
    symbol: "B",
    size: "small",
    x: 39,
    y: 31,
    delay: "-1.5s",
    duration: "6s",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    symbol: "",
    size: "medium",
    x: 57,
    y: 29,
    delay: "-2s",
    duration: "6s",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    symbol: "",
    size: "small",
    x: 76,
    y: 31,
    delay: "-3.5s",
    duration: "5s",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    symbol: "",
    size: "medium",
    x: 89,
    y: 29,
    delay: "-2.5s",
    duration: "5.5s",
  },

  {
    name: "TensorFlow",
    icon: SiTensorflow,
    symbol: "",
    size: "medium",
    x: 7,
    y: 54,
    delay: "-2.5s",
    duration: "5.5s",
  },
  {
    name: "NumPy",
    icon: null,
    symbol: "NP",
    size: "small",
    x: 27,
    y: 53,
    delay: "-1.8s",
    duration: "6.2s",
  },
  {
    name: "Pandas",
    icon: null,
    symbol: "PD",
    size: "small",
    x: 44,
    y: 54,
    delay: "-3.2s",
    duration: "5.6s",
  },
  {
    name: "LangChain",
    icon: null,
    symbol: "LC",
    size: "medium",
    x: 61,
    y: 53,
    delay: "-2.2s",
    duration: "6.2s",
  },
  {
    name: "Java",
    icon: null,
    symbol: "J",
    size: "medium",
    x: 82,
    y: 53,
    delay: "-1.2s",
    duration: "6s",
  },

  {
    name: "Git",
    icon: SiGit,
    symbol: "",
    size: "small",
    x: 7,
    y: 78,
    delay: "-1s",
    duration: "6.5s",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    symbol: "",
    size: "small",
    x: 28,
    y: 77,
    delay: "-3s",
    duration: "5.5s",
  },
  {
    name: "Figma",
    icon: SiFigma,
    symbol: "",
    size: "small",
    x: 49,
    y: 78,
    delay: "-2s",
    duration: "6s",
  },
  {
    name: "Data Structures & Algorithms",
    icon: null,
    symbol: "DSA",
    size: "large",
    x: 73,
    y: 76,
    delay: "-2.8s",
    duration: "6.5s",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0.5,
    y: 0.5,
    active: false,
  });

  /* =================================================
     ENTRANCE ANIMATION TRIGGER
  ================================================= */

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

  /* =================================================
     CURSOR PUSH EFFECT (unchanged logic)
  ================================================= */

  useEffect(() => {
    const handleMouseMove = (event) => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const cursorX = event.clientX - rect.left;
      const cursorY = event.clientY - rect.top;

      const normalizedX = cursorX / rect.width;
      const normalizedY = cursorY / rect.height;

      const inside =
        cursorX >= 0 &&
        cursorX <= rect.width &&
        cursorY >= 0 &&
        cursorY <= rect.height;

      setMouse({
        x: Math.max(0, Math.min(1, normalizedX)),
        y: Math.max(0, Math.min(1, normalizedY)),
        active: inside,
      });
    };

    const handleMouseLeave = () => {
      setMouse({
        x: 0.5,
        y: 0.5,
        active: false,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    sectionRef.current?.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      sectionRef.current?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section ${
        revealed ? "is-revealed" : ""
      }`}
    >
      <div className="skills-container">

        {/* ============================
            HEADER  (About.jsx style)
        ============================ */}

        <div className="skills-header">
          <p className="skills-label">
            <span
              className="skills-label-line"
              aria-hidden="true"
            />
            Skills
          </p>

          <h2 className="skills-title">
            <span className="skills-title-mask">
              <span className="skills-title-line">
                Technologies I
              </span>
            </span>

            <span className="skills-title-mask">
              <span className="skills-title-line skills-title-accent">
                work with.
              </span>
            </span>
          </h2>
        </div>

        {/* ============================
            BUBBLE AREA
        ============================ */}

        <div className="skills-orbit">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            const bubbleX = skill.x / 100;
            const bubbleY = skill.y / 100;

            const distanceX = mouse.x - bubbleX;
            const distanceY = mouse.y - bubbleY;

            const distance = Math.sqrt(
              distanceX * distanceX +
                distanceY * distanceY
            );

            const reactionRadius = 0.24;

            const influence = Math.max(
              0,
              1 - distance / reactionRadius
            );

            const force = influence * influence;

            const moveX = mouse.active
              ? -distanceX * force * 210
              : 0;

            const moveY = mouse.active
              ? -distanceY * force * 210
              : 0;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="skill-position"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,

                  "--move-x": `${moveX}px`,
                  "--move-y": `${moveY}px`,

                  "--delay": skill.delay,
                  "--duration": skill.duration,

                  "--enter-delay":
                    `${index * 0.045}s`,
                }}
              >
                <div
                  className={`skill-bubble ${skill.size}`}
                >
                  <div className="bubble-content">

                    {Icon ? (
                      <Icon className="skill-icon" />
                    ) : (
                      <span
                        className={`custom-icon ${
                          skill.symbol === "DSA"
                            ? "dsa-icon"
                            : ""
                        }`}
                      >
                        {skill.symbol}
                      </span>
                    )}

                    <span className="skill-name">
                      {skill.name}
                    </span>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* ============================
            BOTTOM TEXT
        ============================ */}

        <div className="skills-bottom">
          <p>
            I continuously learn and experiment
            with new technologies to build
            AI-powered and full-stack applications.
          </p>
        </div>

      </div>

      {/* =================================================
          CSS
      ================================================= */}

      <style>{`

        /* ===============================================
           SECTION
        =============================================== */

        .skills-section {
          width: 100%;
          min-height: 100vh;

          overflow: hidden;

          background: #F0E4B8;

          padding:
            100px
            40px
            120px;
        }

        .skills-container {
          width: 100%;
          max-width: 1200px;

          margin: 0 auto;
        }


        /* ===============================================
           HEADER  — About.jsx style
           (label with line + masked line reveal
            + gradient shimmer on accent line)
        =============================================== */

        .skills-header {
          max-width: 700px;

          margin-bottom: 55px;
        }

        .skills-label {
          display: flex;

          align-items: center;

          gap: 12px;

          margin:
            0
            0
            15px;

          color: #596A99;

          font-size: 13px;

          font-weight: 700;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

          opacity: 0;

          translate:
            -18px
            0;

          transition:
            opacity
            0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.1s,

            translate
            0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.1s;
        }

        .is-revealed .skills-label {
          opacity: 1;
          translate: 0 0;
        }

        .skills-label-line {
          display: inline-block;

          width: 32px;
          height: 1px;

          background:
            rgba(
              89,
              106,
              153,
              0.6
            );

          transform-origin:
            left center;

          scale: 0 1;

          transition:
            scale
            0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.25s;
        }

        .is-revealed .skills-label-line {
          scale: 1 1;
        }

        .skills-title {
          margin: 0;

          color: #3A4A78;

          font-size:
            clamp(
              42px,
              6vw,
              72px
            );

          line-height: 1.05;

          font-weight: 900;

          letter-spacing:
            -0.045em;
        }

        .skills-title-mask {
          display: block;

          overflow: hidden;

          padding-bottom:
            0.12em;

          margin-bottom:
            -0.12em;
        }

        .skills-title-line {
          display: inline-block;

          translate:
            0
            115%;

          transition:
            translate
            0.95s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .skills-title-mask:nth-child(1)
        .skills-title-line {
          transition-delay:
            0.15s;
        }

        .skills-title-mask:nth-child(2)
        .skills-title-line {
          transition-delay:
            0.28s;
        }

        .is-revealed
        .skills-title-line {
          translate: 0 0;
        }

        .skills-title-accent {
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

          background-size:
            200% 100%;

          background-position:
            0% 50%;

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;
        }

        .is-revealed
        .skills-title-accent {
          animation:
            titleShimmer
            9s
            linear
            1.2s
            infinite;
        }

        @keyframes titleShimmer {

          from {
            background-position:
              0% 50%;
          }

          to {
            background-position:
              200% 50%;
          }
        }


        /* ===============================================
           BUBBLE AREA
        =============================================== */

        .skills-orbit {
          position: relative;

          width: 100%;

          max-width: 1150px;

          height: 650px;

          margin: 0 auto;
        }


        /* ===============================================
           BUBBLE POSITION
        =============================================== */

        .skill-position {
          position: absolute;

          transform:
            translate3d(
              var(--move-x),
              var(--move-y),
              0
            );

          opacity: 0;

          scale: 0.4;

          transition:
            transform
            0.12s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            ),

            opacity
            0.85s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            var(--enter-delay, 0s),

            scale
            0.9s
            cubic-bezier(
              0.34,
              1.56,
              0.64,
              1
            )
            var(--enter-delay, 0s);

          z-index: 2;

          will-change:
            transform,
            opacity,
            scale;
        }

        .is-revealed .skill-position {
          opacity: 1;
          scale: 1;
        }


        /* ===============================================
           3D BUBBLE
        =============================================== */

        .skill-bubble {
          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 29% 22%,

              rgba(
                255,
                255,
                255,
                0.99
              )
              0%,

              rgba(
                255,
                255,
                255,
                0.88
              )
              7%,

              rgba(
                247,
                239,
                211,
                0.98
              )
              24%,

              rgba(
                224,
                211,
                169,
                0.98
              )
              55%,

              rgba(
                177,
                163,
                117,
                1
              )
              100%
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.85
            );

          box-shadow:

            inset
            -22px
            -28px
            38px
            rgba(
              58,
              74,
              120,
              0.23
            ),

            inset
            14px
            14px
            28px
            rgba(
              255,
              255,
              255,
              0.88
            ),

            0
            15px
            28px
            rgba(
              58,
              74,
              120,
              0.14
            ),

            0
            30px
            60px
            rgba(
              58,
              74,
              120,
              0.09
            );

          animation:
            bubbleFloat
            var(--duration)
            ease-in-out
            infinite;

          animation-delay:
            var(--delay);

          transition:
            scale
            0.35s
            cubic-bezier(
              0.34,
              1.56,
              0.64,
              1
            ),

            filter
            0.35s
            ease,

            box-shadow
            0.35s
            ease;

          will-change:
            translate,
            rotate,
            scale;
        }


        /* ===============================================
           BUBBLE SIZES
        =============================================== */

        .skill-bubble.large {
          width: 148px;
          height: 148px;
        }

        .skill-bubble.medium {
          width: 126px;
          height: 126px;
        }

        .skill-bubble.small {
          width: 104px;
          height: 104px;
        }


        /* ===============================================
           FLOATING ANIMATION
        =============================================== */

        @keyframes bubbleFloat {

          0% {
            translate:
              0
              0;

            rotate:
              0deg;
          }

          25% {
            translate:
              0
              -7px;

            rotate:
              1.2deg;
          }

          50% {
            translate:
              0
              -14px;

            rotate:
              -1.6deg;
          }

          75% {
            translate:
              0
              -6px;

            rotate:
              1deg;
          }

          100% {
            translate:
              0
              0;

            rotate:
              0deg;
          }
        }


        /* ===============================================
           GLASS HIGHLIGHT — subtle shimmer
        =============================================== */

        .skill-bubble::before {
          content: "";

          position: absolute;

          top: 11%;
          left: 18%;

          width: 30%;
          height: 17%;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.82
            );

          filter:
            blur(5px);

          transform:
            rotate(-25deg);

          pointer-events:
            none;

          animation:
            highlightShimmer
            5s
            ease-in-out
            infinite;

          animation-delay:
            var(--delay);
        }

        @keyframes highlightShimmer {

          0%,
          100% {
            opacity: 0.82;
          }

          50% {
            opacity: 0.55;
          }
        }


        /* ===============================================
           LOWER REFLECTION
        =============================================== */

        .skill-bubble::after {
          content: "";

          position: absolute;

          right: 13%;
          bottom: 13%;

          width: 23%;
          height: 13%;

          border-radius: 50%;

          background:
            rgba(
              58,
              74,
              120,
              0.13
            );

          filter:
            blur(7px);

          transform:
            rotate(-20deg);

          pointer-events:
            none;
        }


        /* ===============================================
           CONTENT
        =============================================== */

        .bubble-content {
          position: relative;

          z-index: 5;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 8px;

          width: 100%;

          padding: 10px;

          text-align: center;

          pointer-events:
            none;
        }


        /* ===============================================
           ICON
        =============================================== */

        .skill-icon {
          width: 34px;
          height: 34px;

          color: #3A4A78;

          flex-shrink: 0;

          transition:
            transform
            0.4s
            cubic-bezier(
              0.34,
              1.56,
              0.64,
              1
            ),

            color
            0.3s
            ease;
        }

        .large .skill-icon {
          width: 40px;
          height: 40px;
        }

        .small .skill-icon {
          width: 27px;
          height: 27px;
        }


        /* ===============================================
           CUSTOM ICON
        =============================================== */

        .custom-icon {
          display: flex;

          align-items: center;

          justify-content: center;

          min-width: 38px;

          height: 38px;

          padding:
            0
            7px;

          border-radius:
            10px;

          background:
            #3A4A78;

          color:
            #F0E4B8;

          font-size:
            15px;

          font-weight:
            900;

          line-height:
            1;

          box-shadow:
            0
            7px
            15px
            rgba(
              58,
              74,
              120,
              0.20
            );

          transition:
            transform
            0.4s
            cubic-bezier(
              0.34,
              1.56,
              0.64,
              1
            ),

            box-shadow
            0.35s
            ease;
        }

        .dsa-icon {
          min-width:
            60px;

          font-size:
            13px;
        }


        /* ===============================================
           SKILL NAME
        =============================================== */

        .skill-name {
          display: block;

          max-width:
            105px;

          color:
            #3A4A78;

          font-size:
            11px;

          font-weight:
            800;

          line-height:
            1.15;

          text-align:
            center;

          overflow-wrap:
            anywhere;

          transition:
            color
            0.3s
            ease;
        }

        .large .skill-name {
          max-width:
            120px;
        }


        /* ===============================================
           DESKTOP HOVER
        =============================================== */

        @media (
          hover: hover
        ) and (
          pointer: fine
        ) {

          .skill-bubble:hover {
            scale:
              1.08;

            filter:
              brightness(1.07);

            box-shadow:

              inset
              -22px
              -28px
              40px
              rgba(
                58,
                74,
                120,
                0.18
              ),

              inset
              15px
              15px
              30px
              rgba(
                255,
                255,
                255,
                0.9
              ),

              0
              24px
              45px
              rgba(
                58,
                74,
                120,
                0.24
              ),

              0
              0
              35px
              rgba(
                89,
                106,
                153,
                0.25
              );
          }

          .skill-bubble:hover
          .skill-icon {
            transform:
              scale(1.18)
              rotate(-7deg);
          }

          .skill-bubble:hover
          .custom-icon {
            transform:
              scale(1.15)
              rotate(-5deg);

            box-shadow:
              0
              0
              20px
              rgba(
                58,
                74,
                120,
                0.35
              );
          }

          .skill-bubble:hover
          .skill-name {
            color:
              #596A99;
          }
        }


        /* ===============================================
           BOTTOM TEXT — entrance
        =============================================== */

        .skills-bottom {
          margin-top:
            45px;

          padding-top:
            28px;

          border-top:
            1px solid
            #D9CC9C;

          opacity: 0;

          translate:
            0
            25px;

          transition:
            opacity
            0.9s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.5s,

            translate
            0.9s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.5s;
        }

        .is-revealed .skills-bottom {
          opacity: 1;
          translate: 0 0;
        }

        .skills-bottom p {
          max-width:
            720px;

          margin:
            0;

          color:
            #596A99;

          font-size:
            17px;

          line-height:
            1.75;
        }


        /* ===============================================
           1100px
        =============================================== */

        @media (max-width: 1100px) {

          .skills-section {
            padding-left:
              25px;

            padding-right:
              25px;
          }

          .skills-orbit {
            height:
              610px;
          }

          .skill-bubble.large {
            width:
              125px;

            height:
              125px;
          }

          .skill-bubble.medium {
            width:
              108px;

            height:
              108px;
          }

          .skill-bubble.small {
            width:
              88px;

            height:
              88px;
          }

          .skill-name {
            max-width:
              82px;

            font-size:
              9px;
          }

          .large .skill-name {
            max-width:
              100px;
          }
        }


        /* ===============================================
           900px
        =============================================== */

        @media (max-width: 900px) {

          .skills-section {
            padding:
              80px
              18px
              90px;
          }

          .skills-orbit {
            height:
              560px;
          }

          .skill-bubble.large {
            width:
              108px;

            height:
              108px;
          }

          .skill-bubble.medium {
            width:
              94px;

            height:
              94px;
          }

          .skill-bubble.small {
            width:
              78px;

            height:
              78px;
          }

          .skill-icon {
            width:
              26px;

            height:
              26px;
          }

          .large .skill-icon {
            width:
              31px;

            height:
              31px;
          }

          .small .skill-icon {
            width:
              22px;

            height:
              22px;
          }

          .custom-icon {
            min-width:
              30px;

            height:
              30px;

            font-size:
              11px;

            border-radius:
              8px;
          }

          .dsa-icon {
            min-width:
              44px;

            font-size:
              9px;
          }

          .skill-name {
            max-width:
              70px;

            font-size:
              8px;
          }

          .large .skill-name {
            max-width:
              88px;
          }
        }


        /* ===============================================
           700px
        =============================================== */

        @media (max-width: 700px) {

          .skills-section {
            padding:
              70px
              10px
              80px;
          }

          .skills-header {
            margin-bottom:
              25px;

            padding-left:
              5px;
          }

          .skills-label {
            font-size:
              10px;
          }

          .skills-title {
            font-size:
              clamp(
                36px,
                11vw,
                52px
              );
          }

          .skills-orbit {
            height:
              500px;
          }

          .skill-bubble.large {
            width:
              88px;

            height:
              88px;
          }

          .skill-bubble.medium {
            width:
              78px;

            height:
              78px;
          }

          .skill-bubble.small {
            width:
              66px;

            height:
              66px;
          }

          .skill-icon {
            width:
              21px;

            height:
              21px;
          }

          .large .skill-icon {
            width:
              25px;

            height:
              25px;
          }

          .small .skill-icon {
            width:
              18px;

            height:
              18px;
          }

          .bubble-content {
            gap:
              4px;

            padding:
              5px;
          }

          .custom-icon {
            min-width:
              25px;

            height:
              25px;

            padding:
              0 5px;

            border-radius:
              6px;

            font-size:
              9px;
          }

          .dsa-icon {
            min-width:
              36px;

            font-size:
              7px;
          }

          .skill-name {
            max-width:
              58px;

            font-size:
              6.5px;

            line-height:
              1.05;
          }

          .large .skill-name {
            max-width:
              70px;
          }

          .skills-bottom {
            margin-top:
              30px;

            padding-top:
              22px;

            padding-left:
              5px;

            padding-right:
              5px;
          }

          .skills-bottom p {
            font-size:
              14px;

            line-height:
              1.6;
          }
        }


        /* ===============================================
           550px
        =============================================== */

        @media (max-width: 550px) {

          .skills-section {
            padding:
              60px
              6px
              70px;
          }

          .skills-orbit {
            height:
              440px;
          }

          .skill-bubble.large {
            width:
              74px;

            height:
              74px;
          }

          .skill-bubble.medium {
            width:
              66px;

            height:
              66px;
          }

          .skill-bubble.small {
            width:
              56px;

            height:
              56px;
          }

          .skill-icon {
            width:
              18px;

            height:
              18px;
          }

          .large .skill-icon {
            width:
              21px;

            height:
              21px;
          }

          .small .skill-icon {
            width:
              15px;

            height:
              15px;
          }

          .bubble-content {
            gap:
              3px;
          }

          .custom-icon {
            min-width:
              22px;

            height:
              22px;

            font-size:
              7px;
          }

          .dsa-icon {
            min-width:
              31px;

            font-size:
              6px;
          }

          .skill-name {
            max-width:
              48px;

            font-size:
              5.5px;
          }

          .large .skill-name {
            max-width:
              58px;
          }
        }


        /* ===============================================
           425px
        =============================================== */

        @media (max-width: 425px) {

          .skills-section {
            padding:
              55px
              3px
              65px;
          }

          .skills-orbit {
            height:
              400px;
          }

          .skill-bubble.large {
            width:
              65px;

            height:
              65px;
          }

          .skill-bubble.medium {
            width:
              58px;

            height:
              58px;
          }

          .skill-bubble.small {
            width:
              49px;

            height:
              49px;
          }

          .skill-icon {
            width:
              16px;

            height:
              16px;
          }

          .large .skill-icon {
            width:
              18px;

            height:
              18px;
          }

          .small .skill-icon {
            width:
              13px;

            height:
              13px;
          }

          .bubble-content {
            gap:
              2px;

            padding:
              3px;
          }

          .custom-icon {
            min-width:
              19px;

            height:
              19px;

            padding:
              0 3px;

            border-radius:
              5px;

            font-size:
              6px;
          }

          .dsa-icon {
            min-width:
              27px;

            font-size:
              5px;
          }

          .skill-name {
            max-width:
              42px;

            font-size:
              4.8px;

            line-height:
              1;
          }

          .large .skill-name {
            max-width:
              51px;
          }
        }


        /* ===============================================
           375px
        =============================================== */

        @media (max-width: 375px) {

          .skills-section {
            padding:
              50px
              2px
              60px;
          }

          .skills-title {
            font-size:
              34px;
          }

          .skills-orbit {
            height:
              360px;
          }

          .skill-bubble.large {
            width:
              58px;

            height:
              58px;
          }

          .skill-bubble.medium {
            width:
              52px;

            height:
              52px;
          }

          .skill-bubble.small {
            width:
              44px;

            height:
              44px;
          }

          .skill-icon {
            width:
              14px;

            height:
              14px;
          }

          .large .skill-icon {
            width:
              16px;

            height:
              16px;
          }

          .small .skill-icon {
            width:
              11px;

            height:
              11px;
          }

          .custom-icon {
            min-width:
              17px;

            height:
              17px;

            font-size:
              5px;

            border-radius:
              4px;
          }

          .dsa-icon {
            min-width:
              24px;

            font-size:
              4.5px;
          }

          .skill-name {
            max-width:
              38px;

            font-size:
              4.2px;
          }

          .large .skill-name {
            max-width:
              46px;
          }
        }


        /* ===============================================
           320px
        =============================================== */

        @media (max-width: 320px) {

          .skills-section {
            padding:
              45px
              1px
              55px;
          }

          .skills-header {
            margin-bottom:
              20px;

            padding-left:
              5px;
          }

          .skills-label {
            font-size:
              8px;

            letter-spacing:
              0.17em;
          }

          .skills-title {
            font-size:
              30px;

            letter-spacing:
              -0.05em;
          }

          .skills-orbit {
            height:
              330px;
          }

          .skill-bubble.large {
            width:
              52px;

            height:
              52px;
          }

          .skill-bubble.medium {
            width:
              46px;

            height:
              46px;
          }

          .skill-bubble.small {
            width:
              40px;

            height:
              40px;
          }

          .bubble-content {
            gap:
              1px;

            padding:
              2px;
          }

          .skill-icon {
            width:
              12px;

            height:
              12px;
          }

          .large .skill-icon {
            width:
              14px;

            height:
              14px;
          }

          .small .skill-icon {
            width:
              10px;

            height:
              10px;
          }

          .custom-icon {
            min-width:
              15px;

            height:
              15px;

            padding:
              0 2px;

            border-radius:
              3px;

            font-size:
              4px;
          }

          .dsa-icon {
            min-width:
              21px;

            font-size:
              3.5px;
          }

          .skill-name {
            max-width:
              34px;

            font-size:
              3.7px;

            line-height:
              1;
          }

          .large .skill-name {
            max-width:
              41px;
          }

          .skills-bottom {
            margin-top:
              20px;

            padding-top:
              16px;

            padding-left:
              5px;

            padding-right:
              5px;
          }

          .skills-bottom p {
            font-size:
              11px;

            line-height:
              1.5;
          }
        }


        /* ===============================================
           TOUCH DEVICES
        =============================================== */

        @media (
          hover: none
        ),
        (
          pointer: coarse
        ) {

          .skill-position {
            transform:
              translate3d(
                0,
                0,
                0
              ) !important;

            transition:
              opacity
              0.85s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              )
              var(--enter-delay, 0s),

              scale
              0.9s
              cubic-bezier(
                0.34,
                1.56,
                0.64,
                1
              )
              var(--enter-delay, 0s);
          }
        }


        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .skill-bubble {
            animation:
              none !important;
          }

          .skill-bubble::before {
            animation:
              none !important;
          }

          .skill-position {
            transform:
              translate3d(
                var(--move-x),
                var(--move-y),
                0
              ) !important;

            opacity:
              1 !important;

            scale:
              1 !important;

            transition:
              none !important;
          }

          .skills-label,
          .skills-title,
          .skills-bottom {
            opacity:
              1 !important;

            translate:
              0
              0 !important;

            filter:
              none !important;

            transition:
              none !important;
          }

          .skills-title-line {
            translate:
              0
              0 !important;

            transition:
              none !important;
          }

          .skills-label-line {
            scale:
              1
              1 !important;

            transition:
              none !important;
          }

          .skills-title-accent {
            animation:
              none !important;

            -webkit-text-fill-color:
              #596A99;

            background:
              none;
          }
        }

      `}</style>
    </section>
  );
}

export default Skills;