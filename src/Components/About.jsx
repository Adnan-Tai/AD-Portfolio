import React from "react";
import {
  FiArrowDownRight,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
} from "react-icons/fi";

import { Bio } from "../Data/Data";
import profileImage from "../assets/profilephoto.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        py-24
        text-white
        sm:py-28
        md:py-32
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
          BLUE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-1/4
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-600/[0.06]
          blur-[100px]
          sm:-right-64
          sm:h-[500px]
          sm:w-[500px]
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
            mb-12
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
            <span>01</span>

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
              ABOUT ME
            </p>

            <h2
              className="
                max-w-4xl
                text-[clamp(38px,9vw,72px)]
                font-bold
                leading-[0.95]
                tracking-[-2px]
                text-white
                sm:tracking-[-3px]
              "
            >
              Turning ideas into
              <span
                className="
                  block
                  text-zinc-600
                "
              >
                digital experiences.
              </span>
            </h2>
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            sm:gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT PROFILE
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[500px]
              lg:mx-0
            "
          >
            <div
              className="
                group
                relative
                flex
                min-h-[420px]
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.09]
                bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.16),transparent_42%),rgba(255,255,255,0.025)]
                p-5
                shadow-[0_30px_80px_rgba(0,0,0,0.35),inset_0_0_50px_rgba(255,255,255,0.015)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/25
                sm:min-h-[470px]
                sm:p-7
              "
            >
              {/* Decorative Circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  border
                  border-blue-500/15
                "
              />

              {/* Vertical Line */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-0
                  h-full
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-blue-500/20
                  to-transparent
                  sm:right-7
                "
              />

              {/* =================================================
                  CARD TOP
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <span
                  className="
                    font-mono
                    text-[7px]
                    tracking-[1.5px]
                    text-zinc-600
                    sm:text-[8px]
                    sm:tracking-[2px]
                  "
                >
                  DEVELOPER / 01
                </span>

                <span
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    font-mono
                    text-[7px]
                    tracking-[1px]
                    text-zinc-500
                    sm:text-[8px]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-green-500
                      shadow-[0_0_10px_rgba(34,197,94,0.7)]
                    "
                  />
                  ONLINE
                </span>
              </div>

              {/* =================================================
                  PROFILE PHOTO
              ================================================== */}

              <div
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  py-5
                  sm:py-0
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-44
                    w-44
                    items-center
                    justify-center
                    sm:h-56
                    sm:w-56
                  "
                >
                  {/* Outer Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-blue-500/20
                      bg-[radial-gradient(circle,rgba(37,99,235,0.16),rgba(5,5,5,0.4)_65%,transparent)]
                      shadow-[0_0_80px_rgba(37,99,235,0.18)]
                    "
                  />

                  {/* Rotating Ring */}

                  <div
                    className="
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-dashed
                      border-blue-400/25
                      [animation:spin_14s_linear_infinite]
                    "
                  />

                  {/* Photo */}

                  <div
                    className="
                      relative
                      z-10
                      h-[76%]
                      w-[76%]
                      overflow-hidden
                      rounded-full
                      border-2
                      border-blue-400/50
                      bg-zinc-950
                      shadow-[0_0_35px_rgba(37,99,235,0.25)]
                    "
                  >
                    <img
                      src={profileImage}
                      alt="Tai Adnan Hajinurmahamad"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-[center_20%]
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                    {/* Photo Overlay */}

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
                    />
                  </div>

                  {/* Orbit Dot */}

                  <span
                    className="
                      absolute
                      left-[7%]
                      top-[35%]
                      z-20
                      h-2
                      w-2
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_15px_rgba(96,165,250,0.9)]
                    "
                  />

                  {/* Orbit Dot */}

                  <span
                    className="
                      absolute
                      right-[8%]
                      top-[20%]
                      z-20
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_12px_rgba(96,165,250,0.9)]
                    "
                  />

                  {/* Developer Label */}

                  <div
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      z-20
                      -translate-x-1/2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-blue-500/20
                      bg-black/80
                      px-3
                      py-1.5
                      font-mono
                      text-[6px]
                      uppercase
                      tracking-[1.5px]
                      text-blue-400
                      shadow-[0_5px_20px_rgba(0,0,0,0.4)]
                      backdrop-blur-md
                      sm:text-[7px]
                      sm:tracking-[2px]
                    "
                  >
                    &lt;/&gt; Developer
                  </div>
                </div>
              </div>

              {/* =================================================
                  PROFILE INFO
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                "
              >
                <p
                  className="
                    mb-2
                    font-mono
                    text-[8px]
                    tracking-[1.5px]
                    text-blue-500
                    sm:text-[9px]
                    sm:tracking-[2px]
                  "
                >
                  SOFTWARE DEVELOPER
                </p>

                <h3
                  className="
                    text-[21px]
                    font-semibold
                    leading-[1.15]
                    tracking-[-1px]
                    text-white
                    sm:text-[25px]
                  "
                >
                  Tai Adnan
                  <br />
                  Hajinurmahamad
                </h3>
              </div>

              {/* =================================================
                  CARD BOTTOM
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  border-t
                  border-white/[0.07]
                  pt-4
                  font-mono
                  text-[7px]
                  tracking-[1.2px]
                  text-zinc-600
                  sm:gap-2.5
                  sm:pt-5
                  sm:text-[8px]
                  sm:tracking-[1.5px]
                "
              >
                <span>FULL STACK</span>

                <span className="text-blue-500">•</span>

                <span>MERN</span>

                <span className="text-blue-500">•</span>

                <span>WEB</span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="max-w-2xl">
            {/* Lead */}

            <p
              className="
                text-[20px]
                leading-[1.5]
                tracking-[-0.5px]
                text-zinc-300
                sm:text-2xl
                lg:text-[30px]
              "
            >
              I'm a <span className="text-blue-400">Software Developer</span>{" "}
              focused on creating modern web applications that combine clean
              code, thoughtful design and great user experience.
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
              {Bio.about}
            </p>

            {/* =================================================
                FOCUS AREAS
            ================================================== */}

            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-2
                sm:mt-8
                sm:grid-cols-2
              "
            >
              {/* Frontend */}

              <FocusCard
                icon={<FiCode />}
                title="Frontend"
                description="Interactive & responsive interfaces"
              />

              {/* Backend */}

              <FocusCard
                icon={<FiServer />}
                title="Backend"
                description="Scalable server-side applications"
              />

              {/* Database */}

              <FocusCard
                icon={<FiDatabase />}
                title="Database"
                description="Structured & reliable data systems"
              />

              {/* Full Stack */}

              <FocusCard
                icon={<FiLayers />}
                title="Full Stack"
                description="Complete end-to-end solutions"
              />
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <a
              href="#projects"
              className="
                group
                mt-7
                inline-flex
                min-h-[42px]
                items-center
                gap-2.5
                border-b
                border-blue-500/50
                pb-2
                text-xs
                font-semibold
                text-white
                no-underline
                transition-all
                duration-300
                hover:gap-4
                hover:text-blue-400
                sm:mt-8
              "
            >
              <span>Explore my work</span>

              <FiArrowDownRight
                className="
                  text-blue-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </a>
          </div>
        </div>

        {/* =================================================
            STATS
        ================================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-2
            border-t
            border-white/[0.07]
            pt-7
            sm:mt-20
            sm:pt-8
            md:grid-cols-4
            lg:mt-24
          "
        >
          {/* Stat 1 */}

          <Stat
            number="01+"
            label="Years Learning & Building"
            className="
              border-b
              border-r
              border-white/[0.07]
              pb-6
              pr-4
              sm:pr-6
              md:border-b-0
              md:border-r
              md:pr-6
            "
          />

          {/* Stat 2 */}

          <Stat
            number="10+"
            label="Projects & Experiments"
            className="
              border-b
              border-white/[0.07]
              pb-6
              pl-4
              sm:pl-6
              md:border-b-0
              md:border-r
              md:pr-6
            "
          />

          {/* Stat 3 */}

          <Stat
            number="15+"
            label="Technologies Explored"
            className="
              border-r
              border-white/[0.07]
              pt-6
              pr-4
              sm:pr-6
              md:pt-0
              md:pl-6
            "
          />

          {/* Stat 4 */}

          <Stat
            number="∞"
            label="Curiosity to Learn"
            className="
              pt-6
              pl-4
              sm:pl-6
              md:pt-0
            "
          />
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>
        {`
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
}

/* ============================================================
   FOCUS CARD COMPONENT
============================================================ */

const FocusCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        group
        flex
        min-h-[70px]
        items-center
        gap-3
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.02]
        p-3.5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/20
        hover:bg-blue-500/[0.045]
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
          border-blue-500/15
          bg-blue-500/[0.07]
          text-blue-400
          transition-all
          duration-300
          group-hover:bg-blue-600
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4
          className="
            text-xs
            font-semibold
            text-zinc-200
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1
            text-[9px]
            leading-4
            text-zinc-600
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

/* ============================================================
   STAT COMPONENT
============================================================ */

const Stat = ({ number, label, className }) => {
  return (
    <div className={className}>
      <span
        className="
          block
          text-3xl
          font-bold
          tracking-[-1px]
          text-white
          sm:text-4xl
        "
      >
        {number}
      </span>

      <span
        className="
          mt-2
          block
          max-w-[130px]
          text-[7px]
          uppercase
          leading-4
          tracking-[1px]
          text-zinc-600
          sm:text-[9px]
        "
      >
        {label}
      </span>
    </div>
  );
};
