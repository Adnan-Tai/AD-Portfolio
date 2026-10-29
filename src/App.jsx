import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import profileImage from "./assets/profilephoto.jpeg";

function App() {
  const [showScrollingPortrait, setShowScrollingPortrait] = useState(false);

  useEffect(() => {
    // Remove old section hash such as #skills
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Always start from Home after reload
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    if (!("IntersectionObserver" in window)) {
      const handleScroll = () => {
        setShowScrollingPortrait(window.scrollY > window.innerHeight * 0.8);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollingPortrait(entry.intersectionRatio < 0.12),
      { threshold: [0, 0.12] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <aside
          className={`scrolling-portrait${showScrollingPortrait ? " is-visible" : ""}`}
          aria-hidden="true"
        >
          <img src={profileImage} alt="" />
        </aside>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
