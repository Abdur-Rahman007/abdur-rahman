import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "motion/react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { NeuralBackground } from "./components/NeuralBackground";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { VideoIntroduction } from "./components/VideoIntroduction";
import { Resume } from "./pages/Resume";
import { getPage } from "./lib/utils";
import { profile } from "./data/portfolio";

const titles = {
  home: "Software Engineering & AI/ML",
  resume: "Resume",
  projects: "Projects",
  contact: "Contact",
  "not-found": "Page not found",
};

export default function App() {
  const [page, setPage] = useState(() => getPage(window.location.hash));
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onRouteChange = () => {
      if (window.location.hash === "#main-content") {
        mainRef.current?.focus();
        return;
      }
      setPage(getPage(window.location.hash));
      window.scrollTo({ top: 0, behavior: "instant" });
      mainRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("hashchange", onRouteChange);
    return () => window.removeEventListener("hashchange", onRouteChange);
  }, []);
  useEffect(() => {
    document.title = `${profile.name} | ${titles[page]}`;
  }, [page]);
  return (
    <MotionConfig reducedMotion="user">
      <div className="dark min-h-screen bg-background text-foreground relative overflow-x-clip">
        <NeuralBackground />
        <a
          href="#main-content"
          className="skip-link"
          onClick={(event) => {
            event.preventDefault();
            mainRef.current?.focus();
          }}
        >
          Skip to content
        </a>
        <Navigation page={page} />
        <div className="relative z-10">
          <main
            id="main-content"
            ref={mainRef}
            tabIndex={-1}
            className="outline-none min-h-[75svh]"
          >
            {page === "home" && (
              <>
                <Hero />
                <About />
                <VideoIntroduction />
              </>
            )}
            {page === "resume" && <Resume />}
            {page === "projects" && <Projects />}
            {page === "contact" && <Contact />}
            {page === "not-found" && (
              <section className="py-28 px-6 text-center">
                <h1 className="text-4xl font-bold text-white mb-6">
                  Page not found
                </h1>
                <a className="text-blue-400 underline" href="#/">
                  Return home
                </a>
              </section>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
