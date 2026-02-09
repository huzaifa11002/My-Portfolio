"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = ({ title, content, index }: { title: string, content: string, index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
    const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [20, 0, 0, -20]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, rotateX, perspective: 1000 }}
            className="min-h-screen flex flex-col justify-center items-center text-center p-6 md:p-10"
        >
            <div className="backdrop-blur-2xl bg-white/[0.02] p-8 md:p-20 rounded-[40px] border border-white/5 shadow-2xl max-w-5xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-main/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.span
                    className="inline-block text-main font-black text-6xl md:text-8xl opacity-10 mb-6 absolute top-10 left-10"
                >
                    0{index + 1}
                </motion.span>

                <motion.h2
                    className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none"
                >
                    {title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? "text-main" : ""}> {word} </span>
                    ))}
                </motion.h2>

                <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
                    {content}
                </p>

                <div className="mt-16 flex gap-3 justify-center">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="w-full h-full bg-main"
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "0%" }}
                                transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "circOut" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function StoryContent() {
    const stories = [
        { id: "beginning", title: "The Vision", content: "Combining the power of creative design with cutting-edge technology to build the next generation of web applications." },
        { id: "craft", title: "Front-end Mastery", content: "Expertise in React and Next.js allows me to create immersive interfaces that feel alive and responsive." },
        { id: "ai", title: "Agentic AI", content: "Exploring the intersection of AI agents and human-centric design to automate complex workflows and enhance user productivity." },
        { id: "future", title: "Future Forward", content: "Let's innovate together. From simple landing pages to complex AI integrations, I bring your ideas to reality." }
    ];

    return (
        <div className="relative z-20 pointer-events-none">
            {stories.map((story, i) => (
                <div id={story.id} key={i}>
                    <StorySection {...story} index={i} />
                </div>
            ))}
        </div>
    );
}
