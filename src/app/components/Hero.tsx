import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Brain, Cpu, Zap } from "lucide-react";
import { profile } from "../data/portfolio";
import { Button } from "./ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const words = profile.name.toUpperCase().split(" ");
  return (
    <section className="min-h-[calc(100svh-5rem)] flex items-center justify-center px-6 py-16 relative">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1
            aria-label={profile.name}
            className="text-[clamp(2.8rem,9vw,6rem)] md:text-8xl font-bold mb-4 flex flex-wrap justify-center gap-x-[0.3em]"
          >
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap"
                aria-hidden="true"
              >
                {word.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay:
                        (words.slice(0, wordIndex).join(" ").length +
                          (wordIndex ? 1 : 0) +
                          index) *
                        0.1,
                      ease: "easeOut",
                    }}
                    className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
                    style={{
                      perspective: "1000px",
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.2,
                            rotateY: 360,
                            transition: { duration: 0.5 },
                          }
                    }
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Welcome to My Portfolio
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Building software. Exploring AI & machine learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-12"
        >
          {[Brain, Cpu, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }
              }
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: index * 0.3 },
              }}
              className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            >
              <Icon size={40} className="text-blue-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-4"
        >
          <div className="text-lg text-gray-400">
            Computer Science & Engineering Undergraduate · AIUB
          </div>
          <div className="text-blue-400">
            Software Engineering • Python • NLP • Deep Learning
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-5">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              <a href="#/projects">Explore My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-400/40 bg-gray-900/50 text-blue-300 hover:bg-blue-500/10"
            >
              <a href="#/resume">View Resume</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
