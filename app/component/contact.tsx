"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend, FiLinkedin, FiGithub, FiMessageSquare } from "react-icons/fi";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="mt-20 md:mt-32 relative py-20" id="contact">
      {/* Decorative Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern-dense opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-main/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left Column: Heading & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main/10 border border-main/20 text-main text-xs font-bold tracking-widest uppercase">
                Contact
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                Let&apos;s Build Something <span className="text-main italic">Great</span> Together.
              </h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed max-w-md">
                I&apos;m currently open to freelance opportunities and interesting collaborations. If you have a question or just want to say hi, feel free to reach out.
              </p>

              <div className="flex gap-4 pt-6">
                {[
                  { icon: <FiGithub size={24} />, link: "https://github.com/huzaifa11002", label: "GitHub" },
                  { icon: <FiLinkedin size={24} />, link: "https://www.linkedin.com/in/huzaifa-khan-codes/", label: "LinkedIn" }
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0a0a0a] border border-white/5 text-gray-400 hover:text-main hover:border-main transition-all duration-300 group shadow-lg"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Email Card */}
              <Link
                href="mailto:huzaifahuzaifa112@gmail.com"
                className="group relative flex flex-col p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-main/50 transition-all duration-500 shadow-2xl overflow-hidden md:col-span-2"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                  <FiMail size={120} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-main/10 border border-main/20 flex items-center justify-center text-main mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FiMail size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-gray-400 font-light mb-6">For collaborations and project inquiries.</p>
                <span className="text-main font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  huzaifahuzaifa112@gmail.com <FiSend />
                </span>
              </Link>

              {/* Message Card */}
              <div className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-main/50 transition-all duration-500 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-main/10 border border-main/20 flex items-center justify-center text-main mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FiMessageSquare size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Fast response on LinkedIn or Email for any quick questions.
                </p>
              </div>

              {/* Status Card */}
              <div className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-main/50 transition-all duration-500 shadow-2xl flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-main"></span>
                  </span>
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Available</span>
                </div>
                <p className="text-gray-400 text-sm mt-3 font-light">
                  Ready for new challenges and remote roles.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
