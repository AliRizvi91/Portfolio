"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountData() {
  const data = [
    { number: 14, text: "Years of <br /> Experience" },
    { number: 50, text: "Project <br /> Completed", suffix: "+" },
    { number: 1.5, text: "Happy <br /> Clients", suffix: "K" }, // Changed to 1.5 directly
    { number: 14, text: "Years of <br /> Experience" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const NumberTicker = ({ value, isFirstDigit }) => {
    // Convert number to string and split into characters
    const stringValue = value.toString();
    const digits = [];
    
    // Process each character
    for (let i = 0; i < stringValue.length; i++) {
      const char = stringValue[i];
      if (/^[\d.]$/.test(char)) {
        digits.push(char);
      }
    }

    const digitHeight = 64;

    return (
      <div className="flex overflow-hidden">
        {digits.map((digit, index) => {
          // Skip animation for decimal point
          if (digit === '.') {
            return (
              <div key={index} className="flex items-center justify-center Helvetica" style={{ height: digitHeight }}>
                {digit}
              </div>
            );
          }

          const isFirst = isFirstDigit && index === 0;
          const count = isFirst ? 3 : 8;
          const duration = isFirst ? 2 : 0.3;

          const numbers = Array.from({ length: count + 1 }, (_, i) => {
            const num = (parseInt(digit) - count + i) % 10;
            return num < 0 ? num + 10 : num;
          });

          return (
            <div
              key={index}
              className="relative overflow-hidden"
              style={{ height: digitHeight }}
            >
              <motion.div
                initial={{ y: 0 }}
                animate={isInView ? { y: -digitHeight * numbers.length } : { y: 0 }}
                transition={{
                  duration: duration,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isFirst ? 0 : 0.2 * index,
                  type: "spring",
                  damping: 35,
                }}
                className="flex flex-col"
              >
                {numbers.map((num, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center Helvetica"
                    style={{ height: digitHeight }}
                  >
                    {num}
                  </div>
                ))}
                <div
                  className="flex items-center justify-center Helvetica"
                  style={{ height: digitHeight }}
                >
                  {digit}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className="container lg:px-10 grid grid-cols-2 content-center lg:grid-cols-4 gap-5 md:gap-8"
    >
      {data.map((item, index) => {
        const displayValue = item.prefix || item.number;
        const isNumber = !item.prefix;

        return (
          <div
            key={index}
            className="flex flex-col mb-15 items-center md:items-end md:flex-row text-[#8750f7]"
            style={{ justifyContent: "center" }}
          >
            <motion.h1
              className="flex text-[50px] pb-2 md:pb-0 mx-2 font-bold md:text-[64px]"
              style={{ height: 64, lineHeight: "64px" }}
            >
              {isNumber ? (
                <NumberTicker value={item.number} isFirstDigit={true} />
              ) : (
                <span>{displayValue}</span>
              )}
              {item.suffix && <span>{item.suffix}</span>}
            </motion.h1>
            <h6
              className={`text-[13px] text-center md:text-start md:text-[1.1rem] md:leading-6 leading-4 pb-[5px]`}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CountData;