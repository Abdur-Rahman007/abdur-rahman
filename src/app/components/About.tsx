import { motion, useReducedMotion } from "motion/react";
import { Code, Users, Brain, UserRound } from "lucide-react";
import { profile, education } from "../data/portfolio";
import { assetUrl } from "../lib/assets";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="py-20 px-6" aria-label="About me">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="relative w-80 md:w-96 max-w-full mx-auto">
              <div className="w-full rounded-2xl bg-gradient-to-br from-blue-500/15 via-gray-900/60 to-purple-500/15 border border-blue-400/30 p-3 overflow-clip shadow-2xl shadow-blue-950/30">
                {profile.photoUrl ? (
                  <div className="w-full">
                    <img
                      src={assetUrl(profile.photoUrl)}
                      alt={`Portrait of ${profile.name}`}
                      className="portrait-image"
                      width={1365}
                      height={2048}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div className="text-center text-blue-300 py-16">
                    <UserRound
                      size={72}
                      className="mx-auto mb-3 text-blue-400"
                      aria-hidden="true"
                    />
                    <p className="font-bold text-3xl">AR</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Photo coming soon
                    </p>
                  </div>
                )}
              </div>
              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion ? undefined : { opacity: [0.35, 0.75, 0.35] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 border border-purple-400/30 rounded-2xl pointer-events-none"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              An aspiring software engineer with a curiosity for AI
            </h3>
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-400">
              {[
                {
                  icon: Code,
                  text: "Analytical problem solver",
                  color: "text-blue-400",
                },
                {
                  icon: Users,
                  text: "Collaborative learner",
                  color: "text-purple-400",
                },
                {
                  icon: Brain,
                  text: "Exploring AI/ML",
                  color: "text-pink-400",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon
                    className={item.color}
                    size={20}
                    aria-hidden="true"
                  />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20 grid grid-cols-2 gap-5">
              <div>
                <p className="text-blue-300 text-2xl font-bold">
                  {education.cgpa}
                </p>
                <p className="text-gray-400 text-sm mt-1">Current CGPA</p>
              </div>
              <div>
                <p className="text-purple-300 text-2xl font-bold">1000+</p>
                <p className="text-gray-400 text-sm mt-1">
                  Problems solved in C++
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
