import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { Bio } from "../Data/Data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Resume PDF inside the public folder
  const resumeLink = Bio?.resume || "/Adnan_Resume.pdf";

  return (
    <header
      className={`fixed left-0 top-0 z-[1000] w-full overflow-visible transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/80 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="relative mx-auto flex w-[92%] max-w-[1200px] items-center justify-between sm:w-[90%]">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          aria-label="Go to homepage"
          className="group inline-flex min-w-0 shrink-0 items-center gap-[3px] font-display text-lg font-bold tracking-tight text-white no-underline transition-transform duration-300 hover:-translate-y-[2px] sm:text-2xl"
        >
          <span className="text-lg text-blue-500 transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
            &lt;
          </span>

          <span className="whitespace-nowrap">AD TECH</span>

          <span className="text-lg text-blue-500 transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
            /&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="group relative whitespace-nowrap font-sans text-sm font-medium tracking-wide text-zinc-400 no-underline transition-all duration-300 hover:-translate-y-px hover:text-white xl:text-[15px]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Resume Download */}
        <a
          href={resumeLink}
          download="Adnan_Resume.pdf"
          onClick={handleLinkClick}
          aria-label="Download resume PDF"
          className="group hidden shrink-0 items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 font-sans text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-500/10 hover:shadow-[0_8px_25px_rgba(37,99,235,0.12)] lg:flex"
        >
          <span>Resume</span>

          <FiDownload className="text-base text-blue-400 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-blue-500/10 lg:hidden sm:h-12 sm:w-12 sm:text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`absolute left-[4%] right-[4%] top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/95 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
              className="group flex min-h-[54px] items-center gap-4 rounded-xl px-4 py-3 font-sans text-base font-medium text-zinc-300 no-underline transition-all duration-300 hover:bg-white/[0.04] hover:text-white active:bg-white/[0.06]"
            >
              <span className="w-7 shrink-0 font-mono text-xs text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex-1">{link.name}</span>

              <FiArrowUpRight className="shrink-0 text-base text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
            </a>
          ))}

          {/* Mobile Resume Download */}
          <a
            href={resumeLink}
            download="Adnan_Resume.pdf"
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
            aria-label="Download resume PDF"
            className="group mt-1 flex min-h-[54px] items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/[0.08] px-4 py-3 font-sans text-base font-semibold text-white no-underline transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.12]"
          >
            <span className="flex items-center gap-3">
              <FiDownload className="text-blue-400" />
              Download Resume
            </span>

            <FiArrowUpRight className="text-lg text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
