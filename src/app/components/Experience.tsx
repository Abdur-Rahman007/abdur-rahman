import { motion } from "motion/react";
import { GraduationCap, Presentation } from "lucide-react";
import { events } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="py-20 px-6" aria-label="Seminars and workshops">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Seminars & Workshops"
          subtitle="Learning beyond the classroom, from presenting a poster to exploring cloud deployment."
          gradient="from-green-400 to-blue-400"
        />
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-3 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"
          />
          {events.map((event, index) => {
            const Icon = index === 0 ? Presentation : GraduationCap;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 pl-10 md:pl-0 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  aria-hidden="true"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
                />
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-full shrink-0">
                        <Icon
                          className="w-6 h-6 text-blue-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-white leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-blue-400 mt-2">
                          {event.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-purple-300 text-sm mb-3">
                      {event.period}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
