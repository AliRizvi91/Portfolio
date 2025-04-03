"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
    const cardVariants = {
        initial: { backgroundColor: '#f6f3fc', color: '#747779' },
        hover: { backgroundColor: '#2a1454', color:'#8750f7', transition: { duration: 0.4 } },
    };
    const imageVariants = {
        initial: { filter: 'grayscale(90%)', scale: 1 },
        hover: { filter: 'grayscale(0%)', scale: 1.1, transition: { duration: 0.5 } },
    };
    const SkillBatches = [
        {
            name: 'Figma',
            image: "/assets/Images/figma.png",
            percentage: "92%",
        },
        {
            name: 'Sketch',
            image: "/assets/Images/sketch.png",
            percentage: "80%",
        },
        {
            name: 'Xd',
            image: "/assets/Images/xd.png",
            percentage: "85%",
        },
        {
            name: 'Wordpress',
            image: "/assets/Images/wp.png",
            percentage: "99%",
        },
        {
            name: 'React',
            image: "/assets/Images/react.png",
            percentage: "89%",
        },
        {
            name: 'Javascript',
            image: "/assets/Images/js.png",
            percentage: "93%",
        },
    ]


    return (
        <>
            <div className="w-full py-16 px-4 flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent pb-5">
                    My Skills
                </h1>
                <p className="text-center text-[15px] sm:text-[16px] leading-6 max-w-3xl">
                    We put your ideas and thus your wishes in the form of a unique web project that<br /> inspires you and your customers.
                </p>
                <div className="container flex flex-wrap  mt-10 justify-center items-center">
                    {
                        SkillBatches.map((Batch,index) => (
                            <motion.div key={index} className="flex mx-2 my-2 flex-col justify-center items-center" initial="initial" whileHover="hover">
                                <motion.div className="flex flex-col justify-center items-center w-[12rem] h-[12rem] rounded-4xl mb-2" variants={cardVariants}>
                                    <motion.img src={Batch.image} className="h-[33%] SkillImg my-4" alt="LOGO" variants={imageVariants} />
                                    <h6 className="text-[22px] font-extrabold">{Batch.percentage}</h6>
                                </motion.div>
                                <h6 className="text-[16px] text-[#8750f7]">{Batch.name}</h6>
                            </motion.div>
                        ))
                    }

                </div>
            </div>
        </>
    );
}

export default Skills;