"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-main/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-main/5 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03] -z-20" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main/10 border border-main/20 text-main text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-main animate-ping" />
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            MODERN <br />
            <span className="text-main italic">DEVELOPER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Crafting high-performance digital experiences with <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Agentic AI</span>. Based in Karachi, building for the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="#project">
              <Button className="h-16 px-10 bg-main text-black hover:bg-white transition-all duration-500 rounded-2xl font-black text-lg group shadow-2xl shadow-main/20">
                VIEW MY PROJECTS
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>

            <div className="flex gap-4">
              {[
                { icon: <FiGithub size={24} />, link: "https://github.com/huzaifa11002" },
                { icon: <FiLinkedin size={24} />, link: "https://www.linkedin.com/in/huzaifa-khan-codes/" }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-main hover:border-main/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Decoration: Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-main to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
