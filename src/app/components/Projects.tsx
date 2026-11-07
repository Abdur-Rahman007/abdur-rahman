import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Brain,
  Code2,
  Palette,
  ChevronRight,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { projects, type ProjectCategory } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const categories = ["All", "Software", "AI/ML", "Graphics"] as const;
const icons = { Software: Code2, "AI/ML": Brain, Graphics: Palette };
const viewClass =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/40 bg-gradient-to-r from-blue-500/25 to-purple-500/25 px-4 py-2 text-sm font-semibold text-blue-100 shadow-lg shadow-blue-950/25 hover:from-blue-500/40 hover:to-purple-500/40 hover:border-blue-300 transition-colors";

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <section className="py-20 px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          first
          title="My Projects"
          subtitle="Software, machine learning, NLP, and graphics projects — built through hands-on learning."
          gradient="from-purple-400 to-pink-400"
        />
        <div
          aria-label="Filter projects"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-5 py-2.5 rounded-full border transition-colors ${filter === category ? "bg-blue-500/20 border-blue-400/60 text-blue-300" : "bg-gray-900/50 border-gray-700/50 text-gray-400 hover:border-purple-400/50 hover:text-white"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {visible.length} projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project, index) => {
            const Icon = icons[project.category];
            return (
              <motion.article
                key={project.id}
                data-project={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group min-w-0 h-[34rem]"
              >
                <Dialog>
                  <Card className="h-full flex flex-col gap-0 bg-gray-900/65 border-gray-700/50 hover:border-blue-400/50 transition-colors duration-300 overflow-hidden relative">
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    />
                    <CardHeader className="relative flex flex-col gap-0">
                      <div className="flex items-center justify-between mb-4 gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-3 rounded-full bg-gradient-to-r ${project.gradient}`}
                        >
                          <Icon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </motion.div>
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className={viewClass}
                          >
                            <Github size={17} aria-hidden="true" />
                            <span>View</span>
                          </a>
                        ) : (
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className={viewClass}
                              aria-label={`View ${project.title} details`}
                            >
                              <FileText size={17} aria-hidden="true" />
                              <span>View</span>
                            </button>
                          </DialogTrigger>
                        )}
                      </div>
                      <p className="text-sm text-purple-300 mb-1">
                        {project.category}
                      </p>
                      <h2 className="text-xl font-semibold leading-snug text-white group-hover:text-blue-400 transition-colors duration-300 h-14 line-clamp-2">
                        {project.title}
                      </h2>
                      <CardDescription className="text-gray-400 leading-relaxed mt-2 h-[4.5rem] line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative flex-1 flex flex-col pt-4">
                      <div className="flex flex-wrap gap-2 content-start">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-700/50">
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            className="w-full flex items-center justify-between gap-3 py-2 text-blue-300 hover:text-white"
                            aria-label={`Project details for ${project.title}`}
                          >
                            Project details
                            <ChevronRight size={17} aria-hidden="true" />
                          </button>
                        </DialogTrigger>
                      </div>
                    </CardContent>
                  </Card>
                  <DialogContent className="bg-[#0b1224] border-gray-700 text-gray-200 sm:max-w-xl max-h-[85svh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-white text-2xl leading-snug pr-5">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-400 leading-relaxed pt-2">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <ul className="list-disc pl-5 space-y-4 text-gray-300 leading-relaxed">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/20 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-2"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} aria-hidden="true" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                  </DialogContent>
                </Dialog>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
