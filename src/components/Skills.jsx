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
    size: "large",
    x: 12,
    y: 18,
    delay: "0s",
    duration: "5s",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    size: "medium",
    x: 31,
    y: 8,
    delay: "-1.5s",
    duration: "6s",
  },
  {
    name: "Python",
    icon: SiPython,
    size: "large",
    x: 51,
    y: 18,
    delay: "-2s",
    duration: "5.5s",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    size: "medium",
    x: 77,
    y: 10,
    delay: "-3s",
    duration: "6.5s",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    size: "medium",
    x: 20,
    y: 48,
    delay: "-2.5s",
    duration: "5.5s",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    size: "small",
    x: 40,
    y: 42,
    delay: "-1s",
    duration: "6s",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    size: "medium",
    x: 64,
    y: 42,
    delay: "-3.5s",
    duration: "5s",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    size: "medium",
    x: 84,
    y: 42,
    delay: "-1.5s",
    duration: "6s",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    size: "medium",
    x: 10,
    y: 78,
    delay: "-2.5s",
    duration: "5.5s",
  },
  {
    name: "Git",
    icon: SiGit,
    size: "small",
    x: 31,
    y: 82,
    delay: "-1s",
    duration: "6.5s",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    size: "small",
    x: 54,
    y: 78,
    delay: "-3s",
    duration: "5.5s",
  },
  {
    name: "Figma",
    icon: SiFigma,
    size: "small",
    x: 78,
    y: 78,
    delay: "-2s",
    duration: "6s",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    size: "small",
    x: 91,
    y: 25,
    delay: "-3.5s",
    duration: "5s",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0.5,
    y: 0.5,
    active: false,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width;

      const y =
        (event.clientY - rect.top) / rect.height;

      setMouse({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
        active:
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom,
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
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#F0E4B8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
            Technologies I
            <br />

            <span className="text-[#596A99]">
              work with.
            </span>
          </h2>
        </div>

        {/* ================= BUBBLES ================= */}

        <div className="relative mx-auto h-[560px] w-full max-w-6xl">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            /*
              Cursor influence.
              Different bubbles react differently,
              creating a natural floating effect.
            */

            const distanceX =
              mouse.x - skill.x / 100;

            const distanceY =
              mouse.y - skill.y / 100;

            const distance = Math.sqrt(
              distanceX * distanceX +
              distanceY * distanceY
            );

            const influence = Math.max(
              0,
              1 - distance / 0.55
            );

            const directionX =
              distanceX > 0 ? -1 : 1;

            const directionY =
              distanceY > 0 ? -1 : 1;

            const moveX =
              mouse.active
                ? directionX * influence * 28
                : 0;

            const moveY =
              mouse.active
                ? directionY * influence * 28
                : 0;

            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,

                  transform: `
                    translate3d(
                      ${moveX}px,
                      ${moveY}px,
                      0
                    )
                  `,

                  transition:
                    "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",

                  zIndex:
                    Math.round(influence * 20) + 1,
                }}
              >
                <div
                  className={`skill-bubble ${skill.size}`}
                  style={{
                    animationDelay: skill.delay,
                    animationDuration: skill.duration,
                  }}
                >
                  {/* ================= CONTENT ================= */}

                  <div className="skill-content">

                    {Icon ? (
                      <Icon className="skill-icon" />
                    ) : (
                      <span className="css-icon">
                        #
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

        {/* ================= BOTTOM TEXT ================= */}

        <div className="mt-10 border-t border-[#D9CC9C] pt-8">
          <p className="max-w-3xl text-base leading-7 text-[#596A99] sm:text-lg">
            I continuously learn and experiment with new technologies
            to build AI-powered and full-stack applications.
          </p>
        </div>

      </div>

      {/* ================= STYLES ================= */}

      <style>{`

        /* =========================================
           3D BALLOON
        ========================================= */

        .skill-bubble {

          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          cursor: pointer;

          color: #3A4A78;

          background:
            radial-gradient(
              circle at 30% 23%,
              rgba(255, 255, 255, 0.98) 0%,
              rgba(255, 255, 255, 0.72) 8%,
              rgba(245, 235, 199, 0.98) 28%,
              rgba(217, 204, 156, 0.96) 62%,
              rgba(165, 151, 105, 1) 100%
            );

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:

            inset -20px -24px 32px
            rgba(58, 74, 120, 0.20),

            inset 13px 13px 24px
            rgba(255, 255, 255, 0.78),

            0 15px 25px
            rgba(58, 74, 120, 0.14),

            0 30px 55px
            rgba(58, 74, 120, 0.08);

          animation:
            bubbleFloat
            5s
            ease-in-out
            infinite;

          transition:
            box-shadow 0.4s ease,
            filter 0.4s ease;

        }


        /* =========================================
           3D HIGHLIGHT
        ========================================= */

        .skill-bubble::before {

          content: "";

          position: absolute;

          top: 12%;

          left: 19%;

          width: 29%;

          height: 17%;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.75);

          filter: blur(5px);

          transform: rotate(-25deg);

          pointer-events: none;

        }


        /* =========================================
           LOWER REFLECTION
        ========================================= */

        .skill-bubble::after {

          content: "";

          position: absolute;

          right: 15%;

          bottom: 13%;

          width: 21%;

          height: 12%;

          border-radius: 50%;

          background:
            rgba(58, 74, 120, 0.13);

          filter: blur(7px);

          transform: rotate(-20deg);

          pointer-events: none;

        }


        /* =========================================
           SIZES
        ========================================= */

        .skill-bubble.large {

          width: 155px;

          height: 155px;

        }


        .skill-bubble.medium {

          width: 135px;

          height: 135px;

        }


        .skill-bubble.small {

          width: 115px;

          height: 115px;

        }


        /* =========================================
           CONTENT
        ========================================= */

        .skill-content {

          position: relative;

          z-index: 5;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 9px;

          text-align: center;

          pointer-events: none;

        }


        /* =========================================
           ICON
        ========================================= */

        .skill-icon {

          width: 35px;

          height: 35px;

          transition:
            transform 0.4s
            cubic-bezier(0.22, 1, 0.36, 1),

            filter 0.4s ease;

        }


        .skill-bubble.large .skill-icon {

          width: 42px;

          height: 42px;

        }


        .skill-bubble.small .skill-icon {

          width: 30px;

          height: 30px;

        }


        /* =========================================
           NAME
        ========================================= */

        .skill-name {

          max-width: 95px;

          font-size: 12px;

          font-weight: 800;

          line-height: 1.15;

          color: #3A4A78;

          transition:
            transform 0.35s ease,
            color 0.3s ease;

        }


        /* =========================================
           CSS
        ========================================= */

        .css-icon {

          display: flex;

          align-items: center;

          justify-content: center;

          width: 35px;

          height: 35px;

          border-radius: 10px;

          background: #3A4A78;

          color: #F5EBC7;

          font-size: 19px;

          font-weight: 900;

        }


        /* =========================================
           NORMAL FLOAT
        ========================================= */

        @keyframes bubbleFloat {

          0% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg);
          }

          20% {
            transform:
              translate3d(8px, -12px, 0)
              rotate(2deg);
          }

          40% {
            transform:
              translate3d(-5px, -24px, 0)
              rotate(-2deg);
          }

          60% {
            transform:
              translate3d(-10px, -8px, 0)
              rotate(2deg);
          }

          80% {
            transform:
              translate3d(6px, 10px, 0)
              rotate(-1deg);
          }

          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg);
          }

        }


        /* =========================================
           HOVER
        ========================================= */

        .skill-bubble:hover {

          animation:
            bubbleHoverFloat
            2.2s
            ease-in-out
            infinite;

          filter:
            brightness(1.08);

          box-shadow:

            inset -20px -24px 34px
            rgba(58, 74, 120, 0.18),

            inset 14px 14px 26px
            rgba(255, 255, 255, 0.85),

            0 22px 38px
            rgba(58, 74, 120, 0.22),

            0 0 35px
            rgba(89, 106, 153, 0.25);

        }


        /* =========================================
           HOVER FLOAT
        ========================================= */

        @keyframes bubbleHoverFloat {

          0% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }

          20% {
            transform:
              translate3d(12px, -18px, 0)
              rotate(5deg)
              scale(1.07);
          }

          40% {
            transform:
              translate3d(-12px, -28px, 0)
              rotate(-5deg)
              scale(1.10);
          }

          60% {
            transform:
              translate3d(-18px, -8px, 0)
              rotate(4deg)
              scale(1.07);
          }

          80% {
            transform:
              translate3d(10px, 14px, 0)
              rotate(-4deg)
              scale(1.05);
          }

          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }

        }


        /* =========================================
           ICON HOVER
        ========================================= */

        .skill-bubble:hover .skill-icon {

          transform:
            scale(1.15)
            rotate(-8deg);

          filter:
            drop-shadow(
              0 5px 10px
              rgba(58, 74, 120, 0.3)
            );

        }


        /* =========================================
           TEXT HOVER
        ========================================= */

        .skill-bubble:hover .skill-name {

          color: #596A99;

          transform:
            translateY(2px);

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {

          .skill-bubble.large {
            width: 125px;
            height: 125px;
          }

          .skill-bubble.medium {
            width: 110px;
            height: 110px;
          }

          .skill-bubble.small {
            width: 95px;
            height: 95px;
          }

          .skill-icon,
          .skill-bubble.large .skill-icon {
            width: 29px;
            height: 29px;
          }

          .skill-name {
            font-size: 10px;
          }

        }

      `}</style>
    </section>
  );
}

export default Skills;