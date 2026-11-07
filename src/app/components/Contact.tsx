import { useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  Phone,
  Code2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { SectionHeading } from "./SectionHeading";
import { profile } from "../data/portfolio";
import { buildContactMailto } from "../lib/utils";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.values(formData).some((value) => !value.trim())) {
      setFeedback(
        "Please complete all fields before opening your email draft.",
      );
      return;
    }
    setFeedback(
      "Continue in your email app to send the message. If it does not open, use the email link alongside this form.",
    );
    window.location.href = buildContactMailto(profile.email, formData);
  };
  const change = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFeedback("");
  };
  const socialLinks = [
    {
      icon: Mail,
      label: profile.email,
      href: `mailto:${profile.email}`,
      color: "from-red-400 to-pink-400",
      external: false,
    },
    {
      icon: Phone,
      label: profile.phone,
      href: `tel:${profile.phoneHref}`,
      color: "from-green-400 to-blue-400",
      external: false,
    },
    {
      icon: Github,
      label: "GitHub Profile",
      href: profile.github,
      color: "from-gray-400 to-gray-600",
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      href: profile.linkedin,
      color: "from-blue-400 to-blue-600",
      external: true,
    },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          first
          title="Let’s Connect"
          subtitle="Interested in software, AI/ML, or a collaborative project? I would love to hear from you."
          gradient="from-blue-400 to-green-400"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MessageSquare className="text-blue-400" aria-hidden="true" />
                  Send a Message
                </h2>
                <p
                  id="contact-help"
                  className="text-gray-400 text-sm mt-2 leading-relaxed"
                >
                  This form opens a draft in your email app. Send it there to
                  complete your message.
                </p>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  aria-describedby="contact-help"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-gray-300 mb-2"
                    >
                      Your name
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={change}
                      maxLength={100}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-gray-300 mb-2"
                    >
                      Your email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={change}
                      maxLength={254}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-gray-300 mb-2"
                    >
                      Your message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={change}
                      rows={5}
                      maxLength={3000}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-y"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <Send className="mr-2" size={16} aria-hidden="true" />
                    Open Email Draft
                  </Button>
                  <p
                    role="status"
                    className="text-blue-300 text-sm leading-relaxed"
                  >
                    {feedback}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 min-w-0"
          >
            <div className="text-center">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-40 h-40 mx-auto mb-6 relative"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center">
                  <Code2
                    size={64}
                    className="text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <motion.div
                  aria-hidden="true"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-2 border-dashed border-purple-400/20 rounded-full"
                />
              </motion.div>
              <p className="text-gray-300 text-lg">
                Let’s turn an idea into something useful.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white text-center mb-6">
                Connect With Me
              </h2>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.025, x: 5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group min-w-0"
                  >
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${social.color} shrink-0`}
                    >
                      <social.icon
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 break-all">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
