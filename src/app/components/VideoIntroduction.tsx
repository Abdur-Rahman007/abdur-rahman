import { Video, Play } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../data/portfolio";
import { getYouTubeVideoId } from "../lib/utils";
import { SectionHeading } from "./SectionHeading";

export function VideoIntroduction() {
  const videoId = getYouTubeVideoId(profile.youtubeUrl);
  return (
    <section className="py-20 px-6" aria-label="Video introduction">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="A Short Introduction"
          subtitle="Get to know the person behind the projects."
          gradient="from-purple-400 to-pink-400"
        />
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden border border-blue-400/25 bg-gray-900/70 shadow-2xl shadow-blue-950/20"
        >
          <div
            className={
              videoId
                  ? "w-full min-w-0 aspect-video min-h-[200px]"
                  : "w-full min-w-0 aspect-video min-h-[280px] sm:min-h-0"
            }
          >
            {videoId ? (
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&playsinline=1`}
                title="Abdur Rahman — video introduction"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 p-6 bg-gradient-to-br from-blue-500/10 via-gray-900/50 to-purple-500/10">
                <div className="w-20 h-20 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
                  <Play
                    size={32}
                    className="text-blue-400 ml-1"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Video introduction coming soon
                </h3>
                <p className="text-gray-400 max-w-md">
                  A personal introduction to my background, interests, and
                  projects.
                </p>
              </div>
            )}
          </div>
          <div className="px-6 py-4 flex gap-3 items-center border-t border-gray-700/50 text-gray-400 text-sm">
            <Video
              size={18}
              className="text-purple-400 shrink-0"
              aria-hidden="true"
            />
            <span>
              {videoId
                ? "Watch my introduction here, with full-screen playback available."
                : "My introduction will be available to watch here."}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
