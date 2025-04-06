"use client"
import { motion } from "framer-motion";

function Loading({ setIsLoading , Position }) {
  

  
  return (
    <motion.div
      className={`${Position} w-full top-0 left-0 z-2000 bg-white h-screen `}
      initial={{ y: 0 }}
      animate={{ 
        y: "-170vh",
        transition: { 
          duration: 2.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 3.9
        } 
      }}
    >
      <div className="w-full relative top-10 h-full flex flex-col justify-center items-center">
        <div className="overflow-hidden relative sm:top-0 -top-20 h-full flex justify-center items-center flex-col">
          {/* "Loading" text */}
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: -100, 
              opacity: 0,
              transition: { 
                duration: 0.6, 
                ease: "easeInOut",
                delay: 3
              } 
            }}
            onAnimationComplete={() => setIsLoading(false)}
          >
            <h1 className='uppercase text-center sm:font-normal font-bold sm:text-2xl text-[1rem] sm:tracking-[1.1em] tracking-[0.8em] mb-4'>Loading</h1>
          </motion.div>

          {/* Shimmer bar */}
          <motion.div
            className="h-[6rem] w-[11rem] rounded-full relative top-[-6rem] bg-gradient-to-r from-white/40 via-white to-white/40"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[100%]" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,96C640,75,800,85,960,101.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </motion.div>
  );
}

export default Loading