import { motion } from "motion/react";
import {
  Award,
  BadgeCheck,
  Bot,
  Brain,
  Code2,
  Languages,
  Lightbulb,
  Trophy,
  Users,
} from "lucide-react";
import { portfolioCertifications } from "../data/certifications";
import {
  interests,
  resumeActivities,
  resumeAwards,
  spokenLanguages,
} from "../data/resume";
import { SectionHeading } from "./SectionHeading";

const card = "bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 md:p-8 hover:border-purple-400/50 transition-colors duration-300 motion-reduce:transition-none";

export function ResumeAchievements() {
  return (
    <section className="py-16 px-6" aria-label="Awards and achievements">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Awards & Achievements"
          gradient="from-amber-300 to-pink-400"
        />
        <div className={card}>
          <Award className="text-amber-300 mb-6" size={30} aria-hidden="true" />
          <ol className="divide-y divide-gray-700/50">
            {resumeAwards.map((award, index) => (
              <li
                key={`${award.year}-${index}`}
                className="grid grid-cols-1 sm:grid-cols-[7.5rem_1fr] gap-2 sm:gap-6 py-4 first:pt-0 last:pb-0"
              >
                <span className="text-cyan-300 font-semibold">
                  {award.year}
                </span>
                <span className="text-gray-200 leading-relaxed">
                  {award.detail}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ResumeLeadership() {
  return (
    <section className="py-16 px-6" aria-label="Activities and leadership">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Activities & Leadership"
          gradient="from-cyan-400 to-purple-400"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {resumeActivities.map((activity, index) => (
            <motion.article
              key={`${activity.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={card}
            >
              <Users className="text-purple-400 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{activity.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResumeCertifications() {
  return (
    <section className="py-16 px-6" aria-label="Certifications">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Course completions, participation, and recognition from my learning and activities."
          gradient="from-purple-400 to-pink-400"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioCertifications.map((certificate) => (
            <article key={certificate.title} className={`${card} min-w-0 h-full`}>
              <BadgeCheck className="text-purple-400 mb-4" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-wide text-blue-300 mb-3">
                {certificate.kind}
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                {certificate.title}
              </h3>
              <p className="text-purple-300 text-sm">{certificate.issuer}</p>
              {certificate.date && (
                <p className="text-gray-400 text-sm mt-2">{certificate.date}</p>
              )}
              <p className="text-gray-300 leading-relaxed mt-5">
                {certificate.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const interestIcons = [Brain, Code2, Lightbulb, Bot, Lightbulb, Trophy];
export function ResumeInterests() {
  return (
    <section className="py-16 px-6" aria-label="Interests">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Interests"
          gradient="from-green-400 to-blue-400"
        />
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, index) => {
            const Icon = interestIcons[index];
            return (
              <div
                key={interest}
                className="flex items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-4 text-gray-200 hover:border-purple-400/50 transition-colors duration-300 motion-reduce:transition-none"
              >
                <Icon
                  className="text-blue-300 shrink-0"
                  size={21}
                  aria-hidden="true"
                />
                <span>{interest}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ResumeLanguages() {
  return (
    <section className="py-16 px-6" aria-label="Language skills">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Language Skills"
          gradient="from-blue-400 to-purple-400"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {spokenLanguages.map((language) => (
            <article
              key={language.code}
              className={`${card} flex items-center gap-5`}
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/15 border border-purple-400/25 text-purple-300 flex items-center justify-center font-bold shrink-0">
                {language.code}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  {language.name}
                  <Languages
                    size={18}
                    className="text-blue-300"
                    aria-hidden="true"
                  />
                </h3>
                {language.detail && (
                  <p className="text-gray-400 mt-1">{language.detail}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
