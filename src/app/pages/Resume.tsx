import { Download, ExternalLink, FileText } from "lucide-react";
import { profile } from "../data/portfolio";
import { assetUrl } from "../lib/assets";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/ui/button";
import { Education } from "../components/PortfolioExtras";
import { TechStack } from "../components/TechStack";
import { Experience } from "../components/Experience";
import {
  ResumeAchievements,
  ResumeLeadership,
  ResumeCertifications,
  ResumeInterests,
  ResumeLanguages,
} from "../components/ResumeSections";

export function Resume() {
  const url = assetUrl(profile.resumePath);
  return (
    <>
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <SectionHeading
          first
          title="My Resume"
          subtitle="Education, technical skills, achievements, and the experiences behind my work."
        />
      </div>
      <Education />
      <TechStack />
      <ResumeAchievements />
      <ResumeLeadership />
      <ResumeCertifications />
      <Experience />
      <ResumeInterests />
      <section className="py-16 px-6" aria-label="CV document">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="My CV"
            subtitle="View or download my complete curriculum vitae."
          />
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            >
              <a href={url} download="Abdur-Rahman-CV.pdf">
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-400/40 bg-gray-900/60 text-blue-300"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} aria-hidden="true" />
                Open PDF
              </a>
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-700/60 bg-gray-900/70">
            <div className="px-5 py-4 border-b border-gray-700/60 flex items-center gap-3 text-gray-300">
              <FileText
                size={18}
                className="text-purple-400"
                aria-hidden="true"
              />
              <span>Abdur Rahman · Curriculum Vitae · 3 pages</span>
            </div>
            <iframe
              src={`${url}#view=FitH`}
              title="Abdur Rahman’s curriculum vitae PDF"
              className="w-full h-[75svh] min-h-[450px] bg-white border-0"
            />
            <p className="text-gray-400 text-sm p-5 leading-relaxed">
              If the document does not display in your browser, use{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline underline-offset-4"
              >
                Open PDF
              </a>{" "}
              or download a copy.
            </p>
          </div>
        </div>
      </section>
      <ResumeLanguages />
    </>
  );
}
