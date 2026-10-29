import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import { Skills as SkillsData } from "../Data/Data";

const Skills = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0);

  const currentCategory = SkillsData[activeCategory];
  const skills = currentCategory?.skills || [];

  // Create one continuous sequence of all skills.
  const allSkills = SkillsData.flatMap((category, categoryIndex) =>
    (category.skills || []).map((skill, skillIndex) => ({
      categoryIndex,
      skillIndex,
    })),
  );

  // Detect when the Skills section is visible.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Automatically move through every skill in sequence.
  useEffect(() => {
    if (!isVisible || allSkills.length <= 1) return;

    const timer = setInterval(() => {
      setStep((previous) => (previous + 1) % allSkills.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [isVisible, allSkills.length]);

  // Synchronize the active category and skill with the sequence.
  useEffect(() => {
    if (!allSkills.length) return;

    const current = allSkills[step % allSkills.length];

    setActiveCategory(current.categoryIndex);
    setActiveSkill(current.skillIndex);
  }, [step]);

  // Keep the active skill centered horizontally.
  useEffect(() => {
    if (!isVisible || !trackRef.current) return;

    const track = trackRef.current;
    const activeCard = track.children[activeSkill];

    if (!activeCard) return;

    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;

    const containerCenter = track.clientWidth / 2;

    track.scrollTo({
      left: cardCenter - containerCenter,
      behavior: "smooth",
    });
  }, [activeSkill, activeCategory, isVisible]);

  // Category selection also updates the automatic sequence position.
  const handleCategoryClick = (index) => {
    const firstSkillIndex = allSkills.findIndex(
      (item) => item.categoryIndex === index,
    );

    if (firstSkillIndex === -1) return;

    setStep(firstSkillIndex);
  };

  // Manual skill selection updates the sequence as well.
  const handleSkillClick = (index) => {
    const globalIndex = allSkills.findIndex(
      (item) =>
        item.categoryIndex === activeCategory && item.skillIndex === index,
    );

    if (globalIndex !== -1) {
      setStep(globalIndex);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:60px_60px] sm:[background-size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.045] blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px] lg:h-[600px] lg:w-[600px] lg:blur-[150px]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1200px] sm:w-[90%]">
        {/* Header */}
        <div className="mb-10 flex items-start gap-3 sm:mb-14 sm:gap-6 lg:mb-16">
          <div className="flex shrink-0 items-center gap-2 pt-1 font-mono text-[9px] text-blue-500 sm:text-xs">
            <span>03</span>
            <span className="h-px w-5 bg-blue-500 sm:w-10" />
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-[8px] font-semibold uppercase tracking-[2px] text-zinc-600 sm:mb-4 sm:text-[10px] sm:tracking-[3px]">
              TECH STACK
            </p>

            <h2 className="max-w-3xl text-[clamp(38px,10vw,72px)] font-bold leading-[0.95] tracking-[-2px] sm:tracking-[-3px]">
              Tools I use to
              <span className="block text-zinc-600">build things.</span>
            </h2>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-8 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 scrollbar-none sm:mb-10">
          {SkillsData.map((category, index) => {
            const active = activeCategory === index;

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => handleCategoryClick(index)}
                aria-pressed={active}
                className={`flex shrink-0 items-center gap-2.5 rounded-lg border px-3.5 py-2.5 transition-all duration-300 sm:gap-3 sm:px-4 sm:py-3 ${
                  active
                    ? "border-blue-500/30 bg-blue-500/[0.08] text-white shadow-[0_8px_25px_rgba(37,99,235,0.08)]"
                    : "border-white/[0.06] bg-white/[0.015] text-zinc-600 hover:border-white/[0.1] hover:text-zinc-300"
                }`}
              >
                <span
                  className={`font-mono text-[8px] ${
                    active ? "text-blue-400" : "text-zinc-700"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[11px] font-medium sm:text-xs">
                  {category.title}
                </span>

                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    active
                      ? "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      : "bg-zinc-800"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Category Header */}
        <div className="mb-4 flex items-end justify-between border-b border-white/[0.07] pb-4 sm:mb-6 sm:pb-5">
          <div>
            <span className="font-mono text-[8px] tracking-[1.5px] text-blue-500 sm:text-[9px] sm:tracking-[2px]">
              CATEGORY / {String(activeCategory + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.8px] sm:mt-2 sm:text-3xl sm:tracking-[-1px]">
              {currentCategory?.title}
            </h3>
          </div>

          <span className="shrink-0 font-mono text-[8px] tracking-[1px] text-zinc-600 sm:text-[9px] sm:tracking-[1.5px]">
            {String(activeSkill + 1).padStart(2, "0")} /{" "}
            {String(skills.length).padStart(2, "0")}
          </span>
        </div>

        {/* Skills Track */}
        <div
          ref={trackRef}
          className="flex min-h-[330px] items-center gap-3 overflow-x-auto scroll-smooth py-10 px-[30%] scrollbar-none sm:min-h-[380px] sm:gap-5 sm:px-[25%] lg:min-h-[410px] lg:px-[30%]"
        >
          {skills.map((skill, index) => {
            const active = activeSkill === index;

            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => handleSkillClick(index)}
                aria-label={`Select ${skill.name}`}
                aria-pressed={active}
                className={`group relative min-w-[210px] shrink-0 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-w-[260px] sm:p-7 lg:min-w-[290px] ${
                  active
                    ? "z-20 scale-110 border-blue-500/35 bg-blue-500/[0.07] opacity-100 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                    : "z-10 scale-90 border-white/[0.06] bg-white/[0.012] opacity-25"
                }`}
              >
                {/* Active Glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.12] blur-3xl transition-opacity duration-700 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Skill Number */}
                <span
                  className={`absolute right-4 top-4 font-mono text-[8px] ${
                    active ? "text-blue-500/60" : "text-zinc-800"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Skill Image */}
                <div
                  className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-xl border bg-black/30 p-3 transition-all duration-700 sm:mb-10 sm:h-16 sm:w-16 ${
                    active
                      ? "border-blue-500/30 bg-blue-500/[0.08] shadow-[0_0_25px_rgba(37,99,235,0.12)]"
                      : "border-white/[0.07]"
                  }`}
                >
                  <img
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className={`h-full w-full object-contain transition-all duration-700 ${
                      active ? "scale-110" : "scale-90 grayscale"
                    }`}
                  />
                </div>

                {/* Skill Name */}
                <h4
                  className={`transition-all duration-700 ${
                    active
                      ? "text-lg font-bold text-white sm:text-2xl"
                      : "text-sm font-medium text-zinc-600"
                  }`}
                >
                  {skill.name}
                </h4>

                {/* Category Name */}
                <p
                  className={`mt-2 font-mono uppercase tracking-[1.5px] ${
                    active
                      ? "text-[7px] text-blue-400/60 sm:text-[8px]"
                      : "text-[7px] text-zinc-800"
                  }`}
                >
                  {currentCategory?.title}
                </p>

                <FiArrowUpRight
                  className={`absolute bottom-5 right-5 transition-all duration-500 sm:bottom-6 sm:right-6 ${
                    active ? "text-blue-400" : "text-zinc-800"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-2 sm:mt-4">
          <div className="h-px w-full overflow-hidden bg-white/[0.06]">
            <div
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-700"
              style={{
                width: `${
                  skills.length ? ((activeSkill + 1) / skills.length) * 100 : 0
                }%`,
              }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[8px] text-zinc-700">01</span>

            <span className="font-mono text-[7px] uppercase tracking-[1.5px] text-zinc-700 sm:text-[8px] sm:tracking-[2px]">
              Auto exploring
            </span>

            <span className="font-mono text-[8px] text-zinc-700">
              {String(skills.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-5 sm:mt-10 sm:gap-3 sm:pt-6">
          <FiCode className="shrink-0 text-sm text-blue-400 sm:text-base" />

          <span className="text-center font-mono text-[7px] tracking-[1px] text-zinc-600 sm:text-[8px] sm:tracking-[1.5px]">
            ALWAYS LEARNING • ALWAYS BUILDING
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
