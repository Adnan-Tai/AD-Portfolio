import React, { useEffect, useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Bio } from "../Data/Data";
import profileImage from "../assets/My Pic.png";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================================
     TYPING ROLE ANIMATION
  ========================================================= */

  useEffect(() => {
    const currentRole = Bio.roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayRole(currentRole.substring(0, displayRole.length + 1));

        if (displayRole === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setDisplayRole(currentRole.substring(0, displayRole.length - 1));

        if (displayRole === "") {
          setIsDeleting(false);

          setRoleIndex((prev) => (prev + 1) % Bio.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050505]
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
          opacity-100
          [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]
          [background-size:70px_70px]
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
          sm:[background-size:80px_80px]
        "
      ></div>

      {/* =====================================================
          BLUE GLOW - LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[280px]
          w-[280px]
          rounded-full
          bg-blue-600/[0.07]
          blur-[100px]
          sm:-left-64
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[120px]
          lg:h-[500px]
          lg:w-[500px]
        "
      ></div>

      {/* =====================================================
          BLUE GLOW - RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[100px]
          sm:-right-64
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[120px]
        "
      ></div>

      {/* =====================================================
          DECORATIVE VERTICAL LINES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-white/[0.04]
          to-transparent
          sm:block
        "
      ></div>

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-white/[0.04]
          to-transparent
          sm:block
        "
      ></div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-[92%]
          max-w-[1200px]
          items-center
          justify-center
          py-28
          sm:w-[90%]
          sm:py-32
          lg:py-28
        "
      >
        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1
            items-center
            gap-12
            sm:gap-16
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              min-w-0
              max-w-2xl
            "
          >
            {/* =================================================
                AVAILABILITY
            ================================================== */}

            <div
              className="
                mb-7
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-green-500/15
                bg-green-500/[0.035]
                px-3
                py-2
                text-[9px]
                font-medium
                uppercase
                tracking-[1px]
                text-zinc-400
                sm:gap-2.5
                sm:px-3.5
                sm:py-2
                sm:text-[10px]
                sm:tracking-[1.5px]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  animate-pulse
                  rounded-full
                  bg-green-500
                  shadow-[0_0_12px_rgba(34,197,94,0.8)]
                "
              ></span>

              <span className="truncate">Available for opportunities</span>
            </div>

            {/* =================================================
                INTRO
            ================================================== */}

            <p
              className="
                mb-3
                font-mono
                text-[10px]
                uppercase
                tracking-[2px]
                text-zinc-500
                sm:text-xs
                sm:tracking-[3px]
              "
            >
              Hello, I'm
            </p>

            {/* =================================================
                NAME
            ================================================== */}

            <h1
              className="
                m-0
                max-w-full
                text-[clamp(42px,11vw,88px)]
                font-bold
                leading-[0.94]
                tracking-[-2.5px]
                text-white
                sm:text-[clamp(48px,7vw,88px)]
                sm:tracking-[-4px]
              "
            >
              Tai Adnan
              <span
                className="
                  block
                  text-zinc-600
                "
              >
                Hajinurmahamad.
              </span>
            </h1>

            {/* =================================================
                ROLE
            ================================================== */}

            <div
              className="
                mt-6
                flex
                min-h-[35px]
                max-w-full
                flex-wrap
                items-center
                gap-2
                text-lg
                sm:mt-7
                sm:min-h-[40px]
                sm:text-xl
              "
            >
              <span
                className="
                  shrink-0
                  text-zinc-600
                "
              >
                I'm a
              </span>

              <span
                className="
                  min-w-0
                  font-semibold
                  text-blue-400
                  sm:text-xl
                  lg:text-2xl
                "
              >
                {displayRole}

                <span
                  className="
                    ml-0.5
                    animate-pulse
                    text-blue-500
                  "
                >
                  |
                </span>
              </span>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-7
                text-zinc-500
                sm:mt-6
                sm:text-[15px]
                sm:leading-8
              "
            >
              {Bio.shortDesc}
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3
                sm:mt-9
                sm:w-auto
                sm:flex-row
              "
            >
              {/* Primary Button */}

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-blue-500/30
                  bg-blue-600
                  px-5
                  py-3.5
                  text-xs
                  font-semibold
                  text-white
                  no-underline
                  shadow-[0_10px_35px_rgba(37,99,235,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-500
                  hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)]
                  sm:w-auto
                "
              >
                <span>View My Work</span>

                <FiArrowUpRight
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* Secondary Button */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-white/[0.1]
                  bg-white/[0.025]
                  px-5
                  py-3.5
                  text-xs
                  font-semibold
                  text-zinc-300
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/25
                  hover:bg-blue-500/[0.05]
                  hover:text-white
                  sm:w-auto
                "
              >
                <span>Let's Connect</span>

                <FiArrowRight
                  className="
                    text-base
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <div
              className="
                mt-10
                border-t
                border-white/[0.06]
                pt-5
                sm:mt-12
                sm:pt-6
              "
            >
              <span
                className="
                  block
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[1.5px]
                  text-zinc-600
                  sm:text-[9px]
                  sm:tracking-[2px]
                "
              >
                Currently working with
              </span>

              <div
                className="
                  mt-3
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  sm:gap-x-5
                "
              >
                {["React", "Node.js", "MongoDB", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-[10px]
                      font-medium
                      text-zinc-500
                      transition-colors
                      duration-300
                      hover:text-blue-400
                      sm:text-xs
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* =================================================
                  SOCIAL PROFILES
              ================================================== */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                {/* GitHub */}

                {Bio.github && (
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-3.5
                      py-2.5
                      text-zinc-400
                      no-underline
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <FaGithub
                      className="
                        text-base
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[1.5px]
                      "
                    >
                      GitHub
                    </span>

                    <FiArrowUpRight
                      className="
                        text-xs
                        text-zinc-600
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-blue-400
                      "
                    />
                  </a>
                )}

                {/* LinkedIn */}

                {Bio.linkedin && (
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-3.5
                      py-2.5
                      text-zinc-400
                      no-underline
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/30
                      hover:bg-blue-500/[0.06]
                      hover:text-blue-400
                    "
                  >
                    <FaLinkedinIn
                      className="
                        text-base
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[1.5px]
                      "
                    >
                      LinkedIn
                    </span>

                    <FiArrowUpRight
                      className="
                        text-xs
                        text-zinc-600
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-blue-400
                      "
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              flex
              min-h-[360px]
              w-full
              max-w-[430px]
              items-center
              justify-center
              sm:min-h-[430px]
              lg:min-h-[520px]
              lg:max-w-none
            "
          >
            {/* =================================================
                OUTER ORBIT
            ================================================== */}

            <div
              className="
                absolute
                h-[240px]
                w-[240px]
                rounded-full
                border
                border-blue-500/10
                sm:h-[340px]
                sm:w-[340px]
                lg:h-[410px]
                lg:w-[410px]
              "
            ></div>

            {/* =================================================
                ROTATING ORBIT
            ================================================== */}

            <div
              className="
                absolute
                h-[185px]
                w-[185px]
                rounded-full
                border
                border-dashed
                border-blue-400/20
                sm:h-[275px]
                sm:w-[275px]
                lg:h-[330px]
                lg:w-[330px]
                [animation:spin_18s_linear_infinite]
              "
            ></div>

            {/* =================================================
                PROFILE / PHOTO CORE
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                h-[225px]
                w-[225px]
                items-center
                justify-center
                sm:h-[320px]
                sm:w-[320px]
                lg:h-[390px]
                lg:w-[390px]
              "
            >
              {/* =================================================
                  LARGE GLOWING CIRCLE
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-blue-500/20
                  bg-[radial-gradient(circle,rgba(37,99,235,0.22)_0%,rgba(37,99,235,0.10)_35%,rgba(5,5,5,0.05)_70%,transparent_100%)]
                  shadow-[0_0_100px_rgba(37,99,235,0.16)]
                "
              ></div>

              {/* =================================================
                  SECOND ORBIT RING
              ================================================== */}

              <div
                className="
                  absolute
                  inset-[10%]
                  rounded-full
                  border
                  border-dashed
                  border-blue-400/20
                "
              ></div>

              {/* =================================================
                  NEON PHOTO RING
              ================================================== */}

              <div
                className="
                  absolute
                  inset-[17%]
                  rounded-full
                  border-2
                  border-blue-400/60
                  bg-blue-500/[0.06]
                  shadow-[0_0_25px_rgba(59,130,246,0.45),inset_0_0_35px_rgba(59,130,246,0.18)]
                "
              ></div>

              {/* =================================================
                  PHOTO
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  h-[66%]
                  w-[66%]
                  overflow-hidden
                  rounded-full
                  border
                  border-blue-300/30
                  bg-zinc-950
                  shadow-[0_0_50px_rgba(37,99,235,0.20)]
                "
              >
                <img
                  src={profileImage}
                  alt="Tai Adnan Hajinurmahamad"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-[center_25%]
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Photo Gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-t
                    from-blue-950/40
                    via-transparent
                    to-transparent
                  "
                ></div>
              </div>

              {/* =================================================
                  GLOWING ORBIT DOT 1
              ================================================== */}

              <span
                className="
                  absolute
                  left-[5%]
                  top-[42%]
                  h-2
                  w-2
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_15px_rgba(96,165,250,0.9)]
                "
              ></span>

              {/* =================================================
                  GLOWING ORBIT DOT 2
              ================================================== */}

              <span
                className="
                  absolute
                  right-[9%]
                  top-[18%]
                  h-2
                  w-2
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_15px_rgba(96,165,250,0.9)]
                "
              ></span>

              {/* =================================================
                  GLOWING ORBIT DOT 3
              ================================================== */}

              <span
                className="
                  absolute
                  bottom-[9%]
                  right-[28%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_12px_rgba(59,130,246,0.9)]
                "
              ></span>
            </div>

            {/* =================================================
                REACT FLOATING CARD
            ================================================== */}

            <div
              className="
                absolute
                left-[2%]
                top-[10%]
                z-20
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.08]
                bg-black/60
                px-3
                py-2.5
                shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                [animation:float_4s_ease-in-out_infinite]
                sm:left-[5%]
              "
            >
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
                  border-blue-400/15
                  bg-blue-500/[0.08]
                "
              >
                <FaReact
                  className="
                    text-xl
                    text-cyan-400
                  "
                />
              </div>

              <div>
                <strong
                  className="
                    block
                    text-[11px]
                    font-semibold
                    text-zinc-200
                  "
                >
                  React
                </strong>

                <small
                  className="
                    mt-0.5
                    block
                    text-[8px]
                    uppercase
                    tracking-wider
                    text-zinc-600
                  "
                >
                  Frontend
                </small>
              </div>
            </div>

            {/* =================================================
                NODE FLOATING CARD
            ================================================== */}

            <div
              className="
                absolute
                right-[2%]
                top-[25%]
                z-20
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.08]
                bg-black/60
                px-3
                py-2.5
                shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                [animation:float_4s_ease-in-out_infinite]
                [animation-delay:1s]
                sm:right-[2%]
              "
            >
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
                  border-green-400/15
                  bg-green-500/[0.07]
                  font-mono
                  text-[10px]
                  font-bold
                  text-green-400
                "
              >
                JS
              </div>

              <div>
                <strong
                  className="
                    block
                    text-[11px]
                    font-semibold
                    text-zinc-200
                  "
                >
                  Node.js
                </strong>

                <small
                  className="
                    mt-0.5
                    block
                    text-[8px]
                    uppercase
                    tracking-wider
                    text-zinc-600
                  "
                >
                  Backend
                </small>
              </div>
            </div>

            {/* =================================================
                MONGODB FLOATING CARD
            ================================================== */}

            <div
              className="
                absolute
                bottom-[8%]
                left-[4%]
                z-20
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.08]
                bg-black/60
                px-3
                py-2.5
                shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                [animation:float_4s_ease-in-out_infinite]
                [animation-delay:2s]
                sm:bottom-[12%]
                sm:left-[7%]
              "
            >
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
                  border-green-400/15
                  bg-green-500/[0.07]
                  font-mono
                  text-[9px]
                  font-bold
                  text-green-400
                "
              >
                DB
              </div>

              <div>
                <strong
                  className="
                    block
                    text-[11px]
                    font-semibold
                    text-zinc-200
                  "
                >
                  MongoDB
                </strong>

                <small
                  className="
                    mt-0.5
                    block
                    text-[8px]
                    uppercase
                    tracking-wider
                    text-zinc-600
                  "
                >
                  Database
                </small>
              </div>
            </div>

            {/* =================================================
                DECORATIVE DOTS
            ================================================== */}

            <span
              className="
                absolute
                left-[18%]
                top-[22%]
                h-1.5
                w-1.5
                rounded-full
                bg-blue-400
                shadow-[0_0_12px_rgba(96,165,250,0.8)]
              "
            ></span>

            <span
              className="
                absolute
                bottom-[25%]
                right-[15%]
                h-1
                w-1
                rounded-full
                bg-blue-500
                shadow-[0_0_10px_rgba(59,130,246,0.8)]
              "
            ></span>

            <span
              className="
                absolute
                right-[25%]
                top-[12%]
                h-1
                w-1
                rounded-full
                bg-zinc-500
              "
            ></span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <a
        href="#about"
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          font-mono
          text-[8px]
          tracking-[2px]
          text-zinc-600
          no-underline
          transition-colors
          duration-300
          hover:text-blue-400
          sm:flex
        "
      >
        <span>SCROLL TO EXPLORE</span>

        <span
          className="
            h-10
            w-px
            bg-gradient-to-b
            from-blue-500
            to-transparent
          "
        ></span>
      </a>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
