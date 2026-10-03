import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const EMAIL = "altafshaikh07781@gmail.com";

const EMAILJS_SERVICE_ID = "service_zwlmc5u";
const EMAILJS_TEMPLATE_ID = "template_tnu3lca";
const EMAILJS_PUBLIC_KEY = "tqIH-mzu1Hbw6B0Do";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/altafshaikh7",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/altafshaikh7781/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/er.altaf_shaikh?stkn=bjhvcnZ1OTU3dHF0",
    icon: FaInstagram,
  },
];

function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [revealed, setRevealed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  /* ---------------------------------
     SCROLL REVEAL
  --------------------------------- */

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  /* ---------------------------------
     FORM INPUT
  --------------------------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus("");
  };

  /* ---------------------------------
     EMAILJS SUBMIT
  --------------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sent === "sending") return;

    setSent("sending");
    setStatus("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSent("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSent("error");
      setStatus(
        "Something went wrong. Please try again or email me directly."
      );

      setTimeout(() => setSent(false), 5000);
    }
  };

  /* ---------------------------------
     COPY EMAIL
  --------------------------------- */

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-section relative w-full overflow-hidden bg-[#F0E4B8] px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:px-12 lg:py-28 ${
        revealed ? "is-revealed" : ""
      }`}
    >
      {/* ---------------------------------
          BACKGROUND GLOW
      --------------------------------- */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="contact-glow contact-glow-left absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#596A99]/10 blur-3xl" />
        <div className="contact-glow contact-glow-right absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#3A4A78]/10 blur-3xl" />
        <div className="contact-glow-center absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ---------------------------------
            SECTION HEADER (About.jsx style)
        --------------------------------- */}

        <div className="contact-header mb-12 max-w-3xl">
          <p className="contact-label mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#596A99] sm:text-xs">
            <span className="contact-label-line" aria-hidden="true" />
            Contact
          </p>

          <h2 className="contact-title text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#26365F] sm:text-5xl lg:text-6xl">
            <span className="contact-title-mask">
              <span className="contact-title-line">
                Let's build something
              </span>
            </span>

            <span className="contact-title-mask">
              <span className="contact-title-line contact-title-accent">
                meaningful together.
              </span>
            </span>
          </h2>

          <p className="contact-desc mt-6 max-w-2xl text-sm leading-7 text-[#26365F]/65 sm:text-base">
            Have an idea, project, opportunity, or just want to
            connect? Drop me a message and let's turn the idea
            into something real.
          </p>
        </div>

        {/* ---------------------------------
            CONTACT GRID
        --------------------------------- */}

        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================
              LEFT — CONTACT DETAILS
          ================================= */}

          <div className="contact-left relative overflow-hidden rounded-[28px] border border-[#D9CC9C] bg-white/55 p-6 shadow-[0_25px_80px_rgba(38,54,95,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_35px_100px_rgba(38,54,95,0.15)] sm:p-8">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#596A99]/15" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#596A99]/10" />

            <div className="relative z-10">

              {/* Card label */}
              <div className="mb-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#596A99]">
                  Contact Details
                </span>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#26365F]">
                  Let's connect.
                </h3>
              </div>

              {/* ---------------------------------
                  DEVELOPER QUOTE
              --------------------------------- */}

              <div className="contact-quote relative mb-8 overflow-hidden rounded-2xl border border-[#D9CC9C] bg-[#F7F3DE]/75 p-5">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#3A4A78]" />

                <p className="pl-3 text-sm font-semibold leading-6 text-[#26365F] sm:text-[15px]">
                  "I don't just write code. I turn problems
                  into products."
                </p>

                <div className="mt-3 pl-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#596A99]">
                  — Altaf Shaikh
                </div>
              </div>

              {/* ---------------------------------
                  EMAIL
              --------------------------------- */}

              <div className="contact-email mb-6">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#596A99]">
                  Email
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-[#D9CC9C] bg-white/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#596A99]/40 hover:bg-white/80 hover:shadow-[0_15px_30px_-12px_rgba(58,74,120,0.2)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3A4A78] text-white transition-transform duration-500">
                    <FiMail size={17} />
                  </div>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="min-w-0 flex-1 truncate text-sm font-semibold text-[#26365F] transition-colors hover:text-[#596A99]"
                  >
                    {EMAIL}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D9CC9C] bg-white/70 text-[#3A4A78] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#596A99] hover:bg-white"
                  >
                    {copied ? <FiCheck size={15} /> : <FiCopy size={15} />}
                  </button>
                </div>

                {copied && (
                  <p className="mt-2 ml-1 text-[11px] font-semibold text-[#596A99]">
                    Email copied!
                  </p>
                )}
              </div>

              {/* ---------------------------------
                  LOCATION
              --------------------------------- */}

              <div className="contact-location mb-8">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#596A99]">
                  Location
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sanjeevan+Engineering+and+Technology+Institute+Panhala+Kolhapur+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-[#D9CC9C] bg-white/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#596A99]/40 hover:bg-white/80 hover:shadow-[0_15px_30px_-12px_rgba(58,74,120,0.2)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#596A99]/10 text-[#3A4A78] transition-all duration-300 group-hover:bg-[#3A4A78] group-hover:text-white">
                    <FiMapPin size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-[#26365F]">
                      Panhala, Kolhapur
                    </div>
                    <div className="mt-0.5 text-xs text-[#26365F]/55">
                      Maharashtra, India
                    </div>
                  </div>

                  <FiArrowUpRight
                    className="shrink-0 text-[#596A99] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={17}
                  />
                </a>
              </div>

              {/* ---------------------------------
                  SOCIALS
              --------------------------------- */}

              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#596A99]">
                  Find me online
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {SOCIALS.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="contact-social group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D9CC9C] bg-white/55 px-4 py-2.5 text-xs font-bold text-[#26365F] transition-all duration-300 hover:-translate-y-1 hover:border-[#3A4A78] hover:bg-[#3A4A78] hover:text-white hover:shadow-[0_15px_30px_-10px_rgba(58,74,120,0.5)]"
                      >
                        {/* Sheen */}
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        <Icon
                          size={15}
                          className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[6deg]"
                        />

                        <span className="relative z-10">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =================================
              RIGHT — FORM
          ================================= */}

          <div className="contact-right relative overflow-hidden rounded-[28px] bg-[#26365F] p-6 shadow-[0_30px_90px_rgba(38,54,95,0.22)] sm:p-8 lg:p-10">

            {/* FORM BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0">
              <div className="contact-form-glow absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#596A99]/30 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#3A4A78]/40 blur-3xl" />
            </div>

            <div className="relative z-10">

              {/* Form header */}
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F0E4B8]" />
                  Start a conversation
                </div>

                <h3 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                  Tell me about
                  <br />
                  <span className="text-[#F0E4B8]">your idea.</span>
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">
                  Fill out the form below and I'll get back
                  to you as soon as possible.
                </p>
              </div>

              {/* ---------------------------------
                  FORM
              --------------------------------- */}

              <form
                ref={formRef}
                id="portfolio-contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/55"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    disabled={sent === "sending"}
                    placeholder="Enter your name"
                    className="contact-input w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-sm font-medium text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-[#F0E4B8]/60 focus:bg-white/[0.10] focus:ring-4 focus:ring-[#F0E4B8]/10 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* EMAIL */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/55"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    disabled={sent === "sending"}
                    placeholder="you@example.com"
                    className="contact-input w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-sm font-medium text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-[#F0E4B8]/60 focus:bg-white/[0.10] focus:ring-4 focus:ring-[#F0E4B8]/10 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* MESSAGE */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/55"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={sent === "sending"}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="contact-input w-full resize-none rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-sm font-medium leading-6 text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-[#F0E4B8]/60 focus:bg-white/[0.10] focus:ring-4 focus:ring-[#F0E4B8]/10 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* ERROR */}
                {status && sent === "error" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">
                    <FiAlertCircle className="mt-0.5 shrink-0" size={17} />
                    <span>{status}</span>
                  </div>
                )}

                {/* SUCCESS */}
                {sent === "success" && (
                  <div className="flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                    <FiCheck className="shrink-0" size={17} />
                    <span>
                      Message sent successfully. Thanks for
                      reaching out!
                    </span>
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={sent === "sending"}
                  className="contact-submit group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#F0E4B8] px-5 py-4 text-sm font-black text-[#26365F] shadow-[0_12px_30px_rgba(240,228,184,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(240,228,184,0.18)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {/* Sheen sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {sent === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#26365F]/30 border-t-[#26365F]" />
                      Sending...
                    </>
                  ) : sent === "success" ? (
                    <>
                      <FiCheck size={17} />
                      Message Sent
                    </>
                  ) : sent === "error" ? (
                    <>
                      <FiSend size={17} />
                      Try Again
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* ---------------------------------
                  FORM FOOTER
              --------------------------------- */}

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  Usually responds quickly
                </div>

                <a
                  href={`mailto:${EMAIL}`}
                  className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-[#F0E4B8] sm:block"
                >
                  Email directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          SCROLL ENTRANCE STYLES
      ================================================= */}

      <style>{`

        /* ===============================================
           AMBIENT BACKGROUND
        =============================================== */

        .contact-glow { animation: contactGlowFloat 14s ease-in-out infinite; }
        .contact-glow-right { animation-duration: 18s; animation-direction: reverse; }
        .contact-glow-center { animation: contactGlowCenter 12s ease-in-out infinite; }

        @keyframes contactGlowFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(28px, -34px, 0) scale(1.08); }
        }

        @keyframes contactGlowCenter {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* ===============================================
           HEADER — About.jsx style
        =============================================== */

        .contact-label {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          translate: -18px 0;
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s,
            translate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }
        .is-revealed .contact-label { opacity: 1; translate: 0 0; }

        .contact-label-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: rgba(58, 74, 120, 0.7);
          transform-origin: left center;
          scale: 0 1;
          transition: scale 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s;
        }
        .is-revealed .contact-label-line { scale: 1 1; }

        .contact-title-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }

        .contact-title-line {
          display: inline-block;
          translate: 0 115%;
          transition: translate 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-title-mask:nth-child(1) .contact-title-line { transition-delay: 0.15s; }
        .contact-title-mask:nth-child(2) .contact-title-line { transition-delay: 0.28s; }

        .is-revealed .contact-title-line { translate: 0 0; }

        .contact-title-accent {
          color: #596A99;
          background-image:
            linear-gradient(100deg,
              #596A99 0%,
              #596A99 40%,
              #26365F 50%,
              #596A99 60%,
              #596A99 100%);
          background-size: 200% 100%;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .is-revealed .contact-title-accent {
          animation: contactTitleShimmer 9s linear 1.2s infinite;
        }
        @keyframes contactTitleShimmer {
          from { background-position: 0% 50%; }
          to   { background-position: 200% 50%; }
        }

        .contact-desc {
          opacity: 0;
          translate: 0 22px;
          filter: blur(6px);
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
            translate 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
            filter 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s;
        }
        .is-revealed .contact-desc { opacity: 1; translate: 0 0; filter: blur(0); }

        /* ===============================================
           LEFT PANEL — entrance
        =============================================== */

        .contact-left {
          opacity: 0;
          translate: -40px 0;
          scale: 0.97;
          filter: blur(8px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s,
            scale 1.1s cubic-bezier(0.34, 1.3, 0.64, 1) 0.4s,
            filter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s,
            box-shadow 0.5s ease;
        }
        .is-revealed .contact-left {
          opacity: 1;
          translate: 0 0;
          scale: 1;
          filter: blur(0);
        }

        /* ===============================================
           RIGHT PANEL — entrance
        =============================================== */

        .contact-right {
          opacity: 0;
          translate: 40px 0;
          scale: 0.97;
          filter: blur(8px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
            translate 1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
            scale 1.1s cubic-bezier(0.34, 1.3, 0.64, 1) 0.55s,
            filter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s;
        }
        .is-revealed .contact-right {
          opacity: 1;
          translate: 0 0;
          scale: 1;
          filter: blur(0);
        }

        /* ===============================================
           QUOTE — slide in
        =============================================== */

        .contact-quote {
          opacity: 0;
          translate: -20px 0;
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.65s,
            translate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.65s;
        }
        .is-revealed .contact-quote { opacity: 1; translate: 0 0; }

        /* ===============================================
           EMAIL + LOCATION — staggered rise
        =============================================== */

        .contact-email {
          opacity: 0;
          translate: 0 20px;
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.75s,
            translate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.75s;
        }
        .is-revealed .contact-email { opacity: 1; translate: 0 0; }

        .contact-location {
          opacity: 0;
          translate: 0 20px;
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.85s,
            translate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.85s;
        }
        .is-revealed .contact-location { opacity: 1; translate: 0 0; }

        /* ===============================================
           SOCIALS — staggered
        =============================================== */

        .contact-social {
          opacity: 0;
          translate: 0 14px;
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            translate 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            background-color 0.4s ease,
            border-color 0.4s ease,
            color 0.3s ease;
        }
        .is-revealed .contact-social { opacity: 1; translate: 0 0; }
        .is-revealed .contact-social:nth-child(1) { transition-delay: 0.95s, 0.95s, 0s, 0s, 0s, 0s, 0s; }
        .is-revealed .contact-social:nth-child(2) { transition-delay: 1.02s, 1.02s, 0s, 0s, 0s, 0s, 0s; }
        .is-revealed .contact-social:nth-child(3) { transition-delay: 1.09s, 1.09s, 0s, 0s, 0s, 0s, 0s; }

        /* ===============================================
           FORM FIELDS — staggered entrance
        =============================================== */

        .contact-field {
          opacity: 0;
          translate: 0 18px;
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            translate 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .is-revealed .contact-field { opacity: 1; translate: 0 0; }
        .is-revealed .contact-field:nth-child(1) { transition-delay: 0.75s; }
        .is-revealed .contact-field:nth-child(2) { transition-delay: 0.85s; }
        .is-revealed .contact-field:nth-child(3) { transition-delay: 0.95s; }

        .contact-submit {
          opacity: 0;
          translate: 0 18px;
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 1.05s,
            translate 0.7s cubic-bezier(0.22, 1, 0.36, 1) 1.05s,
            transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease,
            background-color 0.3s ease;
        }
        .is-revealed .contact-submit { opacity: 1; translate: 0 0; }

        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {
          .contact-glow,
          .contact-glow-center,
          .contact-form-glow {
            animation: none !important;
          }

          .contact-label,
          .contact-label-line,
          .contact-title-line,
          .contact-desc,
          .contact-left,
          .contact-right,
          .contact-quote,
          .contact-email,
          .contact-location,
          .contact-social,
          .contact-field,
          .contact-submit {
            opacity: 1 !important;
            translate: 0 0 !important;
            scale: 1 !important;
            filter: none !important;
            transition: none !important;
          }

          .contact-title-accent {
            animation: none !important;
            -webkit-text-fill-color: #596A99;
            background: none;
          }
        }

      `}</style>
    </section>
  );
}

export default Contact;