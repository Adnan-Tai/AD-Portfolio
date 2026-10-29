import React, { useState, useEffect } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
} from "react-icons/fi";

// Project Images
import ecommerceImage1 from "../assets/ECOM_1.png";
import ecommerceImage2 from "../assets/ECOM_2.png";
import eventImage from "../assets/Eventmangement.png";
import inventoryImage1 from "../assets/IMS_1.png";
import inventoryImage2 from "../assets/IMS_2.png";
import portfolioImage from "../assets/hero.png";
import parkingImage1 from "../assets/VPMS_1.png";
import parkingImage2 from "../assets/VPMS_2.png";

const projects = [
  {
    number: "01",
    title: "Modern E-Commerce Platform",
    shortTitle: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, categories, cart, wishlist, checkout, orders and a complete admin dashboard.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "FULL STACK",
    images: [ecommerceImage1, ecommerceImage2],
    github: "https://github.com/Adnan-Tai/Modern-E-Commerce-Platform.git",
    live: "",
    featured: true,
  },
  {
    number: "02",
    title: "Event Management System",
    shortTitle: "Event Management System",
    description:
      "A modern event management application where users can discover events, register for events and manage their event activities.",
    technologies: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    category: "WEB APPLICATION",
    images: [eventImage],
    github: "https://github.com/Adnan-Tai/Ad-s-Event-Management-System.git",
    live: "",
    featured: false,
  },
  {
    number: "03",
    title: "Inventory Management System",
    shortTitle: "Inventory Management System",
    description:
      "An inventory management solution for tracking stock levels, managing inventory records and organizing business operations.",
    technologies: [
      "React",
      "Firebase",
      "TypeScript",
      "Firestore",
      "Tailwind CSS",
    ],
    category: "WEB APPLICATION",
    images: [inventoryImage1, inventoryImage2],
    github: "https://github.com/Adnan-Tai/Inventory-Management-System.git",
    live: "",
    featured: false,
  },

  {
    number: "05",
    title: "Vehicle Parking Management System",
    shortTitle: "Parking System",
    description:
      "A vehicle parking management solution for tracking parking spaces, maintaining records and simplifying parking operations.",
    technologies: ["PHP", "MySQL", "CSS"],
    category: "WEB APPLICATION",
    images: [parkingImage1, parkingImage2],
    github: "https://github.com/Adnan-Tai/Vehicle-Management-System.git",
    live: "",
    featured: false,
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);

  const active = projects[activeProject];

  // Reset slideshow when a different project is selected
  useEffect(() => {
    setPreviewIndex(0);
  }, [activeProject]);

  // Automatically change preview image every 3 seconds
  useEffect(() => {
    if (active.images.length <= 1) return;

    const timer = setInterval(() => {
      setPreviewIndex((current) => (current + 1) % active.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeProject, active.images.length]);

  // Select project
  const handleProjectChange = (index) => {
    setActiveProject(index);
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:min-h-screen lg:py-36"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] sm:[background-size:80px_80px]" />

      {/* Blue Glows */}
      <div className="pointer-events-none absolute -left-52 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/[0.06] blur-[100px] sm:-left-72 sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] sm:-right-72 sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1200px] sm:w-[90%]">
        {/* Section Heading */}
        <div className="mb-10 flex items-start gap-3 sm:mb-16 sm:gap-6 lg:mb-20 lg:gap-8">
          <div className="flex shrink-0 items-center gap-2 pt-1 font-mono text-[9px] text-blue-500 sm:text-xs">
            <span>04</span>
            <span className="h-px w-5 bg-blue-500 sm:w-10" />
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-[8px] font-semibold uppercase tracking-[2px] text-zinc-600 sm:mb-4 sm:text-[10px] sm:tracking-[3px]">
              SELECTED WORK
            </p>

            <h2 className="text-[clamp(38px,10vw,72px)] font-bold leading-[0.95] tracking-[-2px] text-white sm:tracking-[-3px]">
              Things I've
              <span className="block text-zinc-600">built.</span>
            </h2>
          </div>
        </div>

        {/* Project Counter */}
        <div className="mb-5 flex items-center justify-between sm:mb-6">
          <span className="font-mono text-[8px] tracking-[2px] text-blue-500 sm:text-[9px]">
            PROJECT / {active.number}
          </span>

          <span className="font-mono text-[8px] tracking-[1.5px] text-zinc-700">
            {String(activeProject + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Featured Project */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] shadow-[0_30px_100px_rgba(0,0,0,0.25)] lg:grid-cols-[1.15fr_0.85fr]">
          {/* Project Preview */}
          <div className="group relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#080808] sm:min-h-[380px] lg:min-h-[540px] lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute inset-0 z-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:50px_50px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[70px] transition-all duration-700 group-hover:bg-blue-600/[0.14] sm:h-[300px] sm:w-[300px] sm:blur-[80px]" />

            {/* Browser Window */}
            <div className="absolute left-[5%] right-[5%] top-1/2 z-[1] -translate-y-1/2 overflow-hidden rounded-xl border border-white/[0.1] bg-[#0b0b0b] shadow-[0_30px_80px_rgba(0,0,0,0.55)] transition-transform duration-700 group-hover:scale-[1.015] sm:left-[8%] sm:right-[8%]">
              {/* Browser Header */}
              <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-3 py-2.5 sm:px-4 sm:py-3">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                <span className="h-2 w-2 rounded-full bg-green-400/60" />

                <div className="ml-2 h-5 flex-1 rounded-md bg-white/[0.035] sm:ml-4" />
              </div>

              {/* Auto-Sliding Preview */}
              <div className="relative overflow-hidden">
                <img
                  key={active.images[previewIndex]}
                  src={active.images[previewIndex]}
                  alt={`${active.title} preview ${previewIndex + 1}`}
                  className="block aspect-video w-full bg-[#0b0b0b] object-cover object-top transition-opacity duration-500"
                />

                {/* Image Position Indicators */}
                {active.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {active.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setPreviewIndex(index)}
                        aria-label={`Show preview image ${index + 1}`}
                        aria-pressed={previewIndex === index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          previewIndex === index
                            ? "w-6 bg-blue-400"
                            : "w-2 bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Featured Label */}
            <span className="absolute left-4 top-4 z-10 font-mono text-[8px] tracking-[1.5px] text-blue-400 sm:left-6 sm:top-6 sm:text-[9px] sm:tracking-[2px]">
              {active.featured ? "FEATURED" : "PROJECT"} / {active.number}
            </span>

            {/* Corner Decoration */}
            <div className="absolute bottom-5 right-5 hidden items-center gap-2 font-mono text-[7px] tracking-[1px] text-zinc-700 sm:flex">
              <FiLayers className="text-blue-500/60" />
              DIGITAL BUILD
            </div>
          </div>

          {/* Project Information */}
          <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10">
            <div>
              <span className="font-mono text-[8px] tracking-[2px] text-blue-500">
                {active.category}
              </span>

              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {active.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                {active.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2">
                {active.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1.5 font-mono text-[7px] text-zinc-500 transition-colors duration-300 hover:border-blue-500/20 hover:text-blue-400 sm:px-2.5 sm:text-[8px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 text-[11px] font-semibold text-zinc-300 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/25 hover:bg-blue-500/[0.06] hover:text-white sm:px-4 sm:py-3 sm:text-xs"
                >
                  <FiGithub />
                  GitHub
                </a>
              )}

              {active.live && (
                <a
                  href={active.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-[11px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] sm:px-4 sm:py-3 sm:text-xs"
                >
                  Live Demo
                  <FiExternalLink className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}

              {!active.github && !active.live && (
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 font-mono text-[8px] text-zinc-600 sm:px-4 sm:py-3 sm:text-[9px]">
                  <FiCode />
                  Links coming soon
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project Selector */}
        <div className="mt-3 overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.008]">
          {projects.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <button
                key={project.number}
                type="button"
                onClick={() => handleProjectChange(index)}
                aria-pressed={isActive}
                className={`group flex w-full items-center justify-between gap-4 border-b px-3 py-5 text-left transition-all duration-300 last:border-b-0 sm:px-5 sm:py-6 ${
                  isActive
                    ? "border-blue-500/20 bg-blue-500/[0.035]"
                    : "border-white/[0.05] hover:bg-white/[0.018]"
                }`}
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                  <span
                    className={`shrink-0 font-mono text-[8px] sm:text-[9px] ${
                      isActive ? "text-blue-400" : "text-zinc-700"
                    }`}
                  >
                    {project.number}
                  </span>

                  <div className="min-w-0">
                    <h4
                      className={`truncate text-sm font-semibold transition-colors duration-300 sm:text-base ${
                        isActive
                          ? "text-white"
                          : "text-zinc-400 group-hover:text-white"
                      }`}
                    >
                      {project.shortTitle}
                    </h4>

                    <span className="mt-1 block font-mono text-[7px] tracking-[1px] text-zinc-700 sm:text-[8px]">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                  <div className="hidden max-w-[300px] flex-wrap justify-end gap-1.5 lg:flex">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/[0.05] px-2 py-1 font-mono text-[7px] text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <FiArrowUpRight
                    className={`text-sm transition-all duration-300 sm:text-base ${
                      isActive
                        ? "-translate-y-0.5 translate-x-0.5 text-blue-400"
                        : "text-zinc-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/[0.06] text-blue-400">
              <FiCode />
            </span>

            <span className="font-mono text-[7px] tracking-[1px] text-zinc-600 sm:text-[8px] sm:tracking-[1.5px]">
              BUILD • LEARN • IMPROVE
            </span>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-[11px] font-semibold text-zinc-400 no-underline transition-colors duration-300 hover:text-white sm:text-xs"
          >
            Have a project?
            <span className="text-blue-400">Let's talk</span>
            <FiArrowUpRight className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
