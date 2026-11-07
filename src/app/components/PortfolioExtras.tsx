import { motion } from "motion/react";
import { Award, BadgeCheck, Users, ExternalLink } from "lucide-react";
import {
  activities,
  awards,
  certifications,
  education,
} from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { assetUrl } from "../lib/assets";

export function Education() {
  return (
    <section className="py-16 px-6" aria-label="Education">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Education"
          gradient="from-blue-400 to-cyan-400"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900/60 border border-blue-400/20 rounded-xl p-6 md:p-10"
        >
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src={assetUrl("images/aiub-logo.png")}
              alt="American International University–Bangladesh (AIUB) logo"
              width={447}
              height={447}
              loading="lazy"
              className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full bg-white shrink-0 mx-auto sm:mx-0"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                {education.degree}
              </h3>
              <p className="text-blue-300 text-lg">{education.university}</p>
              <p className="text-gray-400 mt-3">
                {education.period} · {education.location}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-5">
                <p className="text-purple-300 font-semibold">
                  CGPA: {education.cgpa}
                </p>
                <p className="text-gray-300">
                  Expected graduation: {education.graduation}
                </p>
              </div>
              <p className="text-gray-400 mt-3">{education.progress}</p>
            </div>
          </div>
          <h4 className="font-semibold text-white mt-8 mb-4">
            Relevant coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="text-sm text-blue-200 px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="py-20 px-6" aria-label="Awards and certifications">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Awards & Certifications"
          subtitle="Academic milestones, competitive programming, and continued learning."
          gradient="from-amber-300 to-pink-400"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-6 hover:border-amber-400/40 transition-colors"
            >
              <Award className="text-amber-300 mb-4" aria-hidden="true" />
              <h3 className="text-xl text-white font-bold mb-3">
                {award.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{award.detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-purple-500/5 border border-purple-400/20 rounded-lg p-6"
            >
              <BadgeCheck className="text-purple-400 mb-4" aria-hidden="true" />
              <h3 className="text-lg text-white font-semibold mb-3">
                {certificate.title}
              </h3>
              <p className="text-purple-300">{certificate.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Activities() {
  return (
    <section
      className="py-20 px-6"
      aria-label="Cocurricular activities and experience"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Beyond the Code"
          subtitle="Clubs, communication, entrepreneurship, sports, and creative pursuits."
          gradient="from-cyan-400 to-purple-400"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={`${activity.title}-${activity.organization}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
              className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Users
                  className="text-purple-400 shrink-0 mt-1"
                  size={22}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-xl text-white font-bold">
                    {activity.title}
                  </h3>
                  <p className="text-blue-300 mt-1">{activity.organization}</p>
                  <p className="text-purple-300 text-sm mt-2">
                    {activity.period}
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    {activity.description}
                  </p>
                  {activity.links && (
                    <div className="flex flex-wrap gap-5 mt-4">
                      {activity.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-white inline-flex items-center gap-2 underline underline-offset-4"
                        >
                          {link.label}
                          <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
