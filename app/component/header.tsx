"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import Logo from "@/public/main-logo.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#project" },
  { name: "Skills", href: "#skill" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navLinks.map(link => {
        if (link.href === "/") return null;
        const id = link.href.substring(1);
        return document.getElementById(id);
      }).filter(Boolean);

      let current = "Home";
      if (window.scrollY < 100) {
        current = "Home";
      } else {
        for (const section of sections) {
          if (section) {
            const top = section.offsetTop - 150;
            const bottom = top + section.offsetHeight;
            if (window.scrollY >= top && window.scrollY < bottom) {
              const matchingLink = navLinks.find(link => link.href === `#${section.id}`);
              if (matchingLink) current = matchingLink.name;
            }
          }
        }
      }
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || open
        ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/5"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-[130] flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-main/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-main/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image src={Logo} alt="logo" width={24} height={24} className="relative z-10 brightness-0 invert group-hover:invert-0 group-hover:brightness-100 transition-all duration-500" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter group-hover:text-main transition-colors duration-300">
            HUZAIFA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-5 py-2 text-sm font-bold relative group transition-colors ${activeLink === link.name ? "text-main" : "text-gray-400 hover:text-white"
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeLink === link.name && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <div
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-main transition-all duration-300 ${activeLink === link.name ? "w-1/3" : "w-0 group-hover:w-1/3"
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://github.com/huzaifa11002"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
          >
            <FiGithub size={18} />
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-main text-black text-sm font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-main/10"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Navigation with Sheet */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="relative z-[130] w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-main transition-all"
              >
                {open ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-black/95 backdrop-blur-2xl border-white/5 p-8 flex flex-col"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate through Huzaifa's portfolio sections and contact links
              </SheetDescription>

              {/* Decorative Background Glow */}
              <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-main/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="mt-12 flex flex-col h-full">
                <div className="mb-12">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Navigation</span>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setOpen(false);
                          setActiveLink(link.name);
                        }}
                        className="group flex items-end gap-4 py-1"
                      >
                        <span className="text-xs font-mono text-main/40 group-hover:text-main mb-2 transition-colors">0{i + 1}</span>
                        <span className={`text-5xl font-black tracking-tighter transition-all ${activeLink === link.name ? "text-main" : "text-white hover:translate-x-2"
                          }`}>
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <div className="h-[1px] w-full bg-white/5 mb-10" />

                  <div className="flex flex-col gap-8">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Available for projects</p>
                      <p className="text-sm font-medium text-white/80">huzaifahuzaifa112@gmail.com</p>
                    </div>

                    <div className="flex gap-4">
                      <Link href="https://github.com/huzaifa11002" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-main hover:border-main/50 transition-all">
                        <FiGithub size={22} />
                      </Link>
                      <Link href="https://linkedin.com" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-main hover:border-main/50 transition-all">
                        <FiLinkedin size={22} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
