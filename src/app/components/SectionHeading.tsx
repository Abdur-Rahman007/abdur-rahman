import { motion } from "motion/react";

export function SectionHeading({
  title,
  subtitle,
  gradient = "from-blue-400 to-purple-400",
  first = false,
}: {
  title: string;
  subtitle?: string;
  gradient?: string;
  first?: boolean;
}) {
  const Heading = first ? "h1" : "h2";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <Heading
        className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
