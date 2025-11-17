'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blinkAnimation = {
  animate: { opacity: [0, 1, 0] },
  transition: { duration: 1, repeat: Infinity, ease: 'linear' },
};

export function Typewriter({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex % texts.length];
      if (isDeleting) {
        if (displayedText.length > 0) {
          // Deleting
          const typingSpeed = 50 + Math.random() * 50;
          setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, typingSpeed);
        } else {
          // Finished deleting, switch to next text
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      } else {
        if (displayedText.length < currentText.length) {
          // Typing
          const typingSpeed = 70 + Math.random() * 80;
          setTimeout(() => {
            setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          }, typingSpeed);
        } else {
          // Finished typing, pause and then start deleting
          setTimeout(() => setIsDeleting(true), 700);
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, 100);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {displayedText}
      <AnimatePresence>
        <motion.span {...blinkAnimation} className="ml-1">
          |
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
