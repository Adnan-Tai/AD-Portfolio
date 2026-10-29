import React, { useState } from "react";

import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";

import { Bio } from "../Data/Data";

const Contact = () => {
  // ============================================================
  // STATES
  // ============================================================

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");

  // ============================================================
  // EMAIL
  // ============================================================

  const email = "adnantai786123@gmail.com";

  // ============================================================
  // COPY EMAIL
  // ============================================================

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  // ============================================================
  // FORM SUBMIT
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvkpbpog", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");

        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        py-24
        text-white
        sm:py-28
        lg:min-h-screen
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-80
          [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]
          [background-size:60px_60px]
          sm:[background-size:80px_80px]
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
        "
      />

      {/* =====================================================
          BLUE GLOW - LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-[10%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-600/[0.06]
          blur-[100px]
          sm:-left-72
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[120px]
        "
      />

      {/* =====================================================
          BLUE GLOW - RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          -right-52
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[100px]
          sm:-bottom-72
          sm:-right-72
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-[92%]
          max-w-[1200px]
          sm:w-[90%]
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div
          className="
            mb-10
            flex
            items-start
            gap-3
            sm:mb-16
            sm:gap-6
            lg:mb-20
            lg:gap-8
          "
        >
          {/* Number */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              pt-1
              font-mono
              text-[9px]
              text-blue-500
              sm:text-xs
            "
          >
            <span>05</span>

            <span
              className="
                h-px
                w-5
                bg-blue-500
                sm:w-10
              "
            />
          </div>

          {/* Heading */}

          <div className="min-w-0">
            <p
              className="
                mb-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[2px]
                text-zinc-600
                sm:mb-4
                sm:text-[10px]
                sm:tracking-[3px]
              "
            >
              GET IN TOUCH
            </p>

            <h2
              className="
                text-[clamp(38px,10vw,78px)]
                font-bold
                leading-[0.95]
                tracking-[-2px]
                text-white
                sm:tracking-[-3px]
              "
            >
              Let's build
              <span
                className="
                  block
                  text-zinc-600
                "
              >
                something great.
              </span>
            </h2>
          </div>
        </div>

        {/* =================================================
            MAIN CONTACT AREA
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-10
            sm:gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="max-w-xl">
            {/* Lead */}

            <p
              className="
                text-[20px]
                leading-[1.5]
                tracking-[-0.5px]
                text-zinc-300
                sm:text-2xl
                lg:text-[28px]
              "
            >
              Have an idea, project or opportunity in mind? Let's turn it into
              something meaningful.
            </p>

            {/* Description */}

            <p
              className="
                mt-5
                text-[13px]
                leading-7
                text-zinc-500
                sm:mt-6
                sm:text-sm
                sm:leading-8
              "
            >
              I'm always open to discussing new projects, creative ideas,
              development opportunities and ways we can work together.
            </p>

            {/* =================================================
                AVAILABILITY
            ================================================== */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-green-500/15
                bg-green-500/[0.025]
                p-4
                sm:mt-8
              "
            >
              <span
                className="
                  h-2
                  w-2
                  shrink-0
                  animate-pulse
                  rounded-full
                  bg-green-500
                  shadow-[0_0_12px_rgba(34,197,94,0.8)]
                "
              />

              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-green-400
                  "
                >
                  AVAILABLE FOR WORK
                </span>

                <small className="text-[9px] text-zinc-600">
                  Open to exciting opportunities
                </small>
              </div>
            </div>

            {/* =================================================
                EMAIL CARD
            ================================================== */}

            <div
              className="
                mt-3
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.02]
                p-3.5
                sm:p-4
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-blue-500/15
                  bg-blue-500/[0.07]
                  text-blue-400
                "
              >
                <FiMail />
              </div>

              {/* Email */}

              <div className="min-w-0 flex-1">
                <span
                  className="
                    block
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-zinc-600
                  "
                >
                  EMAIL ME
                </span>

                <a
                  href={`mailto:${email}`}
                  className="
                    mt-1
                    block
                    overflow-hidden
                    text-ellipsis
                    whitespace-nowrap
                    text-[11px]
                    text-zinc-300
                    no-underline
                    transition-colors
                    duration-300
                    hover:text-blue-400
                    sm:text-xs
                  "
                >
                  {email}
                </a>
              </div>

              {/* Copy */}

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email"
                title={copied ? "Email copied" : "Copy email"}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-transparent
                  text-zinc-500
                  transition-all
                  duration-300
                  hover:border-blue-500/25
                  hover:bg-blue-500/[0.06]
                  hover:text-blue-400
                "
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="mt-7 sm:mt-8">
              <span
                className="
                  mb-3
                  block
                  font-mono
                  text-[8px]
                  tracking-[2px]
                  text-zinc-600
                "
              >
                FIND ME ONLINE
              </span>

              <div className="flex gap-2">
                {/* GitHub */}

                {Bio.github && (
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      text-zinc-500
                      no-underline
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/30
                      hover:bg-blue-500/[0.08]
                      hover:text-white
                    "
                  >
                    <FiGithub />
                  </a>
                )}

                {/* LinkedIn */}

                {Bio.linkedin && (
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      text-zinc-500
                      no-underline
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/30
                      hover:bg-blue-500/[0.08]
                      hover:text-white
                    "
                  >
                    <FiLinkedin />
                  </a>
                )}

                {/* Email */}

                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    text-zinc-500
                    no-underline
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.08]
                    hover:text-white
                  "
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]
              p-4
              shadow-[0_30px_80px_rgba(0,0,0,0.35),inset_0_0_40px_rgba(255,255,255,0.012)]
              sm:p-7
              lg:p-8
            "
          >
            {/* =================================================
                FORM HEADER
            ================================================== */}

            <div
              className="
                flex
                items-start
                justify-between
                gap-4
                border-b
                border-white/[0.07]
                pb-5
                sm:pb-6
              "
            >
              <div>
                <span
                  className="
                    font-mono
                    text-[8px]
                    tracking-[2px]
                    text-blue-500
                  "
                >
                  START A CONVERSATION
                </span>

                <h3
                  className="
                    mt-2
                    text-lg
                    font-semibold
                    tracking-[-0.5px]
                    text-white
                    sm:text-2xl
                  "
                >
                  Tell me about your project.
                </h3>
              </div>

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-blue-500/15
                  bg-blue-500/[0.07]
                  text-blue-400
                  sm:h-10
                  sm:w-10
                "
              >
                <FiSend />
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-5
                space-y-4
                sm:mt-6
                sm:space-y-5
              "
            >
              {/* =================================================
                  SUCCESS
              ================================================== */}

              {status === "success" && (
                <div
                  className="
                    rounded-lg
                    border
                    border-green-500/20
                    bg-green-500/[0.05]
                    px-4
                    py-3
                    text-xs
                    text-green-400
                    sm:text-sm
                  "
                >
                  <div className="flex items-center gap-2">
                    <FiCheck />

                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              {/* =================================================
                  ERROR
              ================================================== */}

              {status === "error" && (
                <div
                  className="
                    rounded-lg
                    border
                    border-red-500/20
                    bg-red-500/[0.05]
                    px-4
                    py-3
                    text-xs
                    leading-5
                    text-red-400
                    sm:text-sm
                  "
                >
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              {/* =================================================
                  NAME
              ================================================== */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-zinc-600
                  "
                >
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-3.5
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-blue-500/40
                    focus:bg-blue-500/[0.025]
                    focus:ring-1
                    focus:ring-blue-500/20
                    sm:px-4
                  "
                />
              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="visitor-email"
                  className="
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-zinc-600
                  "
                >
                  YOUR EMAIL
                </label>

                <input
                  id="visitor-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-3.5
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-blue-500/40
                    focus:bg-blue-500/[0.025]
                    focus:ring-1
                    focus:ring-blue-500/20
                    sm:px-4
                  "
                />
              </div>

              {/* =================================================
                  SUBJECT
              ================================================== */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-zinc-600
                  "
                >
                  SUBJECT
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Let's work together"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-3.5
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-blue-500/40
                    focus:bg-blue-500/[0.025]
                    focus:ring-1
                    focus:ring-blue-500/20
                    sm:px-4
                  "
                />
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-zinc-600
                  "
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about your project..."
                  required
                  className="
                    min-h-[130px]
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-3.5
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-blue-500/40
                    focus:bg-blue-500/[0.025]
                    focus:ring-1
                    focus:ring-blue-500/20
                    sm:px-4
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_10px_30px_rgba(37,99,235,0.25)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:px-5
                  sm:py-4
                "
              >
                <span>
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                      ? "Message Sent ✓"
                      : "Send Message"}
                </span>

                <FiArrowUpRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>
          </div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-start
            justify-between
            gap-4
            border-t
            border-white/[0.07]
            pt-6
            sm:mt-20
            sm:flex-row
            sm:items-center
            sm:pt-7
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              tracking-[2px]
              text-zinc-600
              sm:text-[9px]
            "
          >
            HAVE AN IDEA?
          </span>

          <a
            href={`mailto:${email}`}
            className="
              group
              flex
              items-center
              gap-2.5
              text-[11px]
              font-semibold
              text-white
              no-underline
              transition-colors
              duration-300
              hover:text-blue-400
              sm:text-xs
            "
          >
            <span>LET'S MAKE IT REAL</span>

            <FiArrowUpRight
              className="
                text-blue-400
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
