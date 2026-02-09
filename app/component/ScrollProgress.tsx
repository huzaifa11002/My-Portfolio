'use client';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-main via-main to-main transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="h-full w-full bg-main shadow-lg shadow-main/50"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
