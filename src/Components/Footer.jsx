import React from "react";

import {
  FiArrowUpRight,
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
} from "react-icons/fi";

import { Bio } from "../Data/Data";

const Footer = () => {
  // ============================================================
  // CURRENT YEAR
  // ============================================================

  const currentYear = new Date().getFullYear();

  // ============================================================
  // NAVIGATION
  // ============================================================

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  // ============================================================
  // EMAIL
  // ============================================================

  const email = "adnantai786123@gmail.com";

  // ============================================================
  // BACK TO TOP
  // ============================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ============================================================
  // COMPONENT
  // ============================================================

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#030303]
        text-white
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
          opacity-50
          [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]
          [background-size:60px_60px]
          sm:[background-size:70px_70px]
        "
      />

      {/* =====================================================
          BLUE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          left-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.06]
          blur-[100px]
          sm:-bottom-[250px]
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
          py-12
          sm:w-[90%]
          sm:py-16
          md:py-20
        "
      >
        {/* =================================================
            TOP AREA
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:gap-12
            md:grid-cols-[1.3fr_0.7fr]
            md:gap-16
            lg:gap-20
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-xl">
            {/* Logo */}

            <a
              href="#home"
              className="
                group
                inline-flex
                items-center
                gap-[3px]
                text-xl
                font-extrabold
                tracking-[-1.5px]
                text-white
                no-underline
                transition-transform
                duration-300
                hover:-translate-y-0.5
                sm:text-2xl
              "
            >
              <span
                className="
                  text-blue-500
                  transition-colors
                  duration-300
                  group-hover:text-blue-400
                "
              >
                &lt;
              </span>

              <span>AD TECH</span>

              <span
                className="
                  text-blue-500
                  transition-colors
                  duration-300
                  group-hover:text-blue-400
                "
              >
                /&gt;
              </span>
            </a>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-md
                text-xs
                leading-6
                text-zinc-500
                sm:mt-6
                sm:text-sm
                sm:leading-7
              "
            >
              Software Developer focused on building modern, scalable and
              user-focused web applications.
            </p>

            {/* =================================================
                STATUS
            ================================================== */}

            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/15
                bg-green-500/[0.025]
                px-3
                py-2
                sm:mt-6
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-green-500
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[1.3px]
                  text-zinc-500
                  sm:text-[8px]
                  sm:tracking-[1.5px]
                "
              >
                Available for opportunities
              </span>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <span
              className="
                font-mono
                text-[7px]
                tracking-[2px]
                text-zinc-600
                sm:text-[8px]
              "
            >
              NAVIGATION
            </span>

            <nav
              className="
                mt-4
                grid
                grid-cols-2
                gap-x-6
                gap-y-3
                sm:mt-5
                sm:gap-x-8
                sm:gap-y-4
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    min-h-[32px]
                    items-center
                    gap-2
                    text-xs
                    text-zinc-500
                    no-underline
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span
                    className="
                      h-px
                      w-0
                      bg-blue-500
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <div
          className="
            my-9
            h-px
            w-full
            bg-white/[0.07]
            sm:my-12
          "
        />

        {/* =================================================
            CONTACT / SOCIAL ROW
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            sm:gap-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* =================================================
              EMAIL
          ================================================== */}

          <a
            href={`mailto:${email}`}
            className="
              group
              inline-flex
              min-h-[40px]
              w-fit
              max-w-full
              items-center
              gap-3
              text-xs
              text-zinc-400
              no-underline
              transition-colors
              duration-300
              hover:text-white
              sm:text-sm
            "
          >
            <span
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
                bg-blue-500/[0.06]
                text-blue-400
              "
            >
              <FiMail />
            </span>

            <span
              className="
                max-w-[220px]
                truncate
                sm:max-w-none
              "
            >
              {email}
            </span>

            <FiArrowUpRight
              className="
                shrink-0
                text-blue-400
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          {/* =================================================
              SOCIALS
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
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

        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-6
            sm:mt-10
            sm:gap-6
            sm:pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* =================================================
              COPYRIGHT
          ================================================== */}

          <p
            className="
              m-0
              font-mono
              text-[7px]
              leading-5
              tracking-[0.8px]
              text-zinc-700
              sm:text-[8px]
              sm:tracking-[1px]
            "
          >
            © {currentYear} Tai Adnan Hajinurmahamad.
            <span className="hidden sm:inline"> All rights reserved.</span>
          </p>

          {/* =================================================
              BUILT WITH
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-1.5
              font-mono
              text-[7px]
              tracking-[0.8px]
              text-zinc-700
              sm:text-[8px]
              sm:tracking-[1px]
            "
          >
            <span>BUILT WITH</span>

            <FiHeart
              className="
                h-3
                w-3
                text-blue-500
              "
            />

            <span>REACT + TAILWIND</span>
          </div>

          {/* =================================================
              BACK TO TOP
          ================================================== */}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              group
              flex
              min-h-[40px]
              items-center
              gap-2
              self-start
              font-mono
              text-[8px]
              tracking-[1.5px]
              text-zinc-600
              transition-colors
              duration-300
              hover:text-blue-400
              sm:self-auto
            "
          >
            <span>BACK TO TOP</span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.07]
                transition-all
                duration-300
                group-hover:border-blue-500/25
                group-hover:bg-blue-500/[0.06]
              "
            >
              <FiArrowUp
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
