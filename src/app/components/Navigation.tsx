import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import type { Page } from "../lib/utils";

const links = [
  { page: "home", label: "Home", href: "#/" },
  { page: "resume", label: "Resume", href: "#/resume" },
  { page: "projects", label: "Projects", href: "#/projects" },
  { page: "contact", label: "Contact", href: "#/contact" },
];

export function Navigation({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [page]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-700/40 bg-[#020817]/85 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between gap-4">
          <a
            href="#/"
            className="flex items-center gap-3 font-bold text-xl text-white"
            aria-label="Abdur Rahman home"
            onClick={() => setOpen(false)}
          >
            <Code2 className="text-blue-400" aria-hidden="true" />
            <span>
              Abdur <span className="text-purple-400">Rahman</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.page}
                href={link.href}
                aria-current={page === link.page ? "page" : undefined}
                className={`nav-link ${page === link.page ? "nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden p-3 rounded-lg border border-gray-700 text-gray-200 hover:border-blue-400"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <div
            id="mobile-navigation"
            className="md:hidden grid grid-cols-2 gap-2 pb-5"
          >
            {links.map((link) => (
              <a
                key={link.page}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={page === link.page ? "page" : undefined}
                className={`nav-link text-center ${page === link.page ? "nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
