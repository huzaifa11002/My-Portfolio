"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import MyImage from "@/public/Huzaifa.jpeg";
import { FiDownload, FiUser, FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section className="mt-20 md:mt-32 relative py-20 overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-main/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-main/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left side: Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5 relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                <Image
                  src={MyImage}
                  alt="Huzaifa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  priority
                />

                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8 z-30 space-y-4">
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <p className="text-main font-bold text-2xl tracking-tighter">3+ YEAR</p>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Experience</p>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-main rounded-tl-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-main rounded-br-3xl -z-10" />
            </motion.div>

            {/* Right side: Textual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main/10 border border-main/20 text-main text-xs font-bold tracking-widest uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-main"></span>
                </span>
                About Me
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                Crafting <span className="text-main">Digital</span> Experiences with Intent.
              </h2>

              <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  I am a passionate <span className="text-white font-medium underline decoration-main/30 decoration-2 underline-offset-4">full-stack developer</span> based in Karachi, dedicated to building responsive and intuitive web applications that leave a lasting impact.
                </p>
                <p>
                  For over a year, I&apos;ve merged creativity with technical precision to help clients establish a powerful online presence. My toolkit spans from modern frontend frameworks to robust backend systems and cutting-edge <span className="text-white font-medium">Agentic AI</span> integration.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                <Link href="/file/CV.pdf" target="_blank" download>
                  <Button className="h-14 px-8 bg-main text-black hover:bg-white transition-all duration-300 rounded-2xl flex gap-3 font-bold text-base shadow-xl shadow-main/20">
                    <FiDownload className="w-5 h-5" />
                    DOWNLOAD CV
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="h-14 px-8 border-white/10 hover:border-main text-white hover:bg-main/5 transition-all duration-300 rounded-2xl flex gap-3 font-bold text-base">
                    CONTACT ME
                    <FiArrowRight className="w-5 h-5 text-main" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
