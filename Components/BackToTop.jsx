"use client";

import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <AnimatePresence>
        <Link href={'#'}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.5
          }}
          className="fixed right-6 md:right-10 bottom-13 sm:bottom-17 z-[1000]"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center border-[#8750f7] w-9 h-9 sm:w-12 sm:h-12 border-2 p-1 rounded-full cursor-pointer hover:bg-opacity-10 transition-colors"
            onClick={scrollToTop}
          >
            <GoArrowUp className="text-xl text-[#8750f7]" />
          </motion.div>
        </motion.div>
      )}
      </Link>
    </AnimatePresence>
  );
}