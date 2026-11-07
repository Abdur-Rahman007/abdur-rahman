import { motion } from "motion/react";
import { Brain, Code2, Cpu, Terminal } from "lucide-react";
import { techCategories } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SkillIcon } from "./SkillIcon";

const icons = [Code2, Brain, Terminal, Cpu];

export function TechStack() {
  return (
    <section className="py-20 px-6" aria-label="Technical skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Languages, libraries, and tools used across my coursework and projects."
          gradient="from-pink-400 to-purple-400"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => {
            const Icon = icons[categoryIndex];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Icon className="text-purple-400" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-white text-center">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.06 }}
                      className="inline-flex items-center gap-2.5 px-4 py-2 text-gray-200 bg-gray-800/70 rounded-lg border border-purple-400/20"
                    >
                      <SkillIcon name={skill} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
