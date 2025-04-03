"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountData() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const data = [
    { number: 14, text: "Year of <br /> Experience" },
    { number: 50, text: "Projects <br /> Complete", suffix: "+" },
    { number: 1500, text: "Happy <br /> Client", prefix: "1.5K" },
    { number: 14, text: "Year of <br /> Experience" },
  ];

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const lastDigitVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 100, damping: 2 },
        opacity: { duration: 0.2 },
        duration: 3, // Duration for the counting effect
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="container grid grid-cols-2 content-center lg:grid-cols-4 gap-5 md:gap-8"
    >
      {data.map((item, index) => {
        // State to animate last digit from 0 to its value
        const [lastDigitValue, setLastDigitValue] = useState(0);

        // Get the full number and last digit
        const getNumberParts = () => {
          if (item.prefix) return { main: item.prefix, lastDigit: "" };
          const strValue = item.number.toString();
          return {
            main: strValue.slice(0, -1), // All except last digit
            lastDigit: parseInt(strValue.slice(-1)), // Last digit as number
          };
        };

        const { main, lastDigit } = getNumberParts();

        useEffect(() => {
          if (isInView && !item.prefix) {
            // Animate last digit from 0 to its actual value
            let start = 0;
            const end = lastDigit;
            const duration = 1000; // 1 second
            const stepTime = Math.abs(Math.floor(duration / (end - start)));
            const timer = setInterval(() => {
              start += 1;
              setLastDigitValue(start);
              if (start >= end) {
                clearInterval(timer);
              }
            }, stepTime);
            return () => clearInterval(timer);
          }
        }, [isInView, lastDigit, item.prefix]);

        return (
          <div
            key={index}
            className="flex flex-col mb-15 items-center md:items-end md:flex-row text-[#8750f7]"
            style={{ justifyContent: "center" }}
          >
            <motion.h1
              className="text-[3.5rem] pb-2 md:pb-0 mx-2 font-bold md:text-[4.5rem]"
              variants={counterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {isInView ? (
                <motion.span className="inline-flex items-baseline">
                  {/* Main part of the number (static) */}
                  <span>{main}</span>
                  {/* Last digit animates from 0 */}
                  {!item.prefix && (
                    <motion.span
                      variants={lastDigitVariants}
                      initial="hidden"
                      animate="visible"
                      custom={lastDigit}
                      className="inline-block"
                    >
                      {lastDigitValue}
                    </motion.span>
                  )}
                  {/* Suffix (static) */}
                  {item.suffix && <span>{item.suffix}</span>}
                </motion.span>
              ) : (
                <span>0</span>
              )}
            </motion.h1>
            <h6
              className="text-[13px] text-center md:text-start md:text-[1.1rem] md:leading-6 leading-4 pb-5"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CountData;