import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

function About() {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#F0E4B8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#596A99]">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-[#3A4A78] sm:text-5xl lg:text-6xl">
            Building with
            <br />
            <span className="text-[#596A99]">
              purpose & technology.
            </span>
          </h2>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={aboutImage}
              alt="Altaf Shaikh"
              className="h-auto w-full max-w-md object-contain"
            />
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>

            {/* ================= ABOUT TEXT ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="max-w-2xl text-lg leading-8 text-[#596A99]">
                I'm Altaf Shaikh, a final-year Computer Science &
                Engineering student passionate about Artificial
                Intelligence, Machine Learning, and modern web
                development.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#596A99]">
                I enjoy turning ideas into practical applications by
                combining AI/ML with full-stack technologies. My focus
                is on building useful, scalable, and user-friendly
                digital experiences.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#596A99]">
                Alongside academics, I actively work on projects,
                hackathons, and technology communities where I get to
                learn, experiment, and solve real-world problems.
              </p>
            </motion.div>

            {/* ================= EDUCATION ================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#596A99]">
                Education
              </p>

              <h3 className="mt-3 text-xl font-bold leading-8 text-[#3A4A78] sm:text-2xl">
                B.Tech — Computer Science & Engineering
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#596A99]">
                Sanjeevan Engineering & Technology Institute
              </p>

              {/* ================= GOOGLE MAPS ================= */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sanjeevan+Engineering+and+Technology+Institute+Panhala+Kolhapur+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3A4A78] transition-colors duration-300 hover:text-[#596A99]"
              >
                {/* Google Maps Pin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
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
                </svg>

                <span className="underline decoration-[#596A99]/40 underline-offset-4">
                  Panhala, Kolhapur, Maharashtra
                </span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;