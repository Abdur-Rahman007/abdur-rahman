import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-8 pt-12">
      <div className="border-t border-gray-700/50 pt-8 flex flex-col sm:flex-row gap-5 items-center justify-between text-center sm:text-left">
        <p className="text-gray-400">
          © {new Date().getFullYear()} {profile.name}.{" "}
          <span className="block sm:inline">Software Engineering & AI/ML.</span>
        </p>
        <div className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abdur Rahman on GitHub"
            className="text-gray-400 hover:text-blue-400 p-2"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abdur Rahman on LinkedIn"
            className="text-gray-400 hover:text-blue-400 p-2"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Abdur Rahman"
            className="text-gray-400 hover:text-blue-400 p-2"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
