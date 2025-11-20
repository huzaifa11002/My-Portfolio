'use client';
import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypingText = ({ text, delay = 50, className = '' }: TypingTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{displayText}<span className="animate-pulse">|</span></span>;
};

export default TypingText;
