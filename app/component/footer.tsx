"use client";

import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiHeart } from "react-icons/fi";
import Logo from "@/public/main-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Footer Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-main/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-main/50 transition-all duration-500">
                <Image src={Logo} alt="logo" width={24} height={24} className="brightness-0 invert" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">HUZAIFA</span>
            </Link>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              Creating high-end digital solutions with a focus on clean code and exceptional user experience.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FiGithub size={20} />, href: "https://github.com/huzaifa11002" },
                { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/huzaifa-khan-codes/" },
                { icon: <FiMail size={20} />, href: "mailto:huzaifahuzaifa112@gmail.com" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-main hover:border-main/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="flex flex-col gap-4">
                {["Home", "Projects", "Skills", "About"].map((link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `#${link.toLowerCase() === 'projects' ? 'project' : link.toLowerCase() === 'skills' ? 'skill' : link.toLowerCase()}`}
                      className="text-gray-500 hover:text-main transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <FiArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Legal</h4>
              <ul className="flex flex-col gap-4 text-gray-500">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {currentYear} Huzaifa Khan. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <FiHeart size={14} className="text-main animate-pulse" /> in Karachi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
