'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

function Stories() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCard, setShowCard] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef(null);
    const controls = useAnimation();
    const cardsToShow = 1; // Number of cards to show at once

      useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Tailwind's 'md' breakpoint
        const handleMediaChange = (e) => setShowCard(e.matches);
    
        // Set initial state
        if(mediaQuery.matches){
            setShowCard(mediaQuery.matches);
        }
    
        // Add listener for changes
        mediaQuery.addEventListener('change', handleMediaChange);
    
        // Cleanup listener on unmount
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
      }, []);
      

    // Triangle animation variants
    const TriangleVariant = (rotation) => ({
        initial: { rotate: 10 },
        animate: { 
            rotate: rotation,
            transition: { 
                duration: 1.5,
                stiffness: 50,
                damping: 40,
                ease: 'easeInOut',
                // repeat: Infinity 
            } 
        },
    });

    // Carousel slide variants
    const carouselVariants = {
        hidden: { opacity: 1 },
        visible: {
            x: showCard ? `-${currentIndex * (105 / cardsToShow)}% ` : `-${currentIndex * (52 / cardsToShow)}%`,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 70,
                mass: 0.5,
            },
        },
    };

    const StoriesData = [
        {
            Image: "/assets/Images/testi-1.jpg",
            Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque fermentum congue.",
            JobRange: "Product Designer, Branding"
        },
        {
            Image: "/assets/Images/testi-2.jpg",
            Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque fermentum congue.",
            JobRange: "SEO Specialist, Theme Junction"
        },
        {
            Image: "/assets/Images/testi-1.jpg",
            Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque fermentum congue.",
            JobRange: "Product Designer, Branding"
        },
        {
            Image: "/assets/Images/testi-2.jpg",
            Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque fermentum congue.",
            JobRange: "SEO Specialist, Theme Junction"
        },
        {
            Image: "/assets/Images/testi-1.jpg",
            Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque fermentum congue.",
            JobRange: "SEO Specialist, Theme Junction"
        },
    ];

    function StoryCard(props) {
        return (
            <motion.div 
                className="w-full p-6 bg-white rounded-2xl shadow-md flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="flex flex-col justify-items-start items-start justify-center">
                    <img
                        className="w-24 h-24 mb-4"
                        style={{ borderRadius: '3px 3px 3px 90px' }}
                        src={props.Image}
                        alt="Story"
                    />
                    <motion.div
                        variants={TriangleVariant(0)}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center items-center pb-5"
                    >
                        <motion.div variants={TriangleVariant(270)}>
                            <BsTriangleFill className="w-6 h-auto text-[#8750f7]" />
                        </motion.div>
                        <motion.div variants={TriangleVariant(90)}>
                            <BsTriangleFill className="w-6 h-auto text-[#8750f7]" />
                        </motion.div>
                    </motion.div>
                    <p className="text-sm text-gray-600 pb-10">
                        {props.Para}
                    </p>
                    <h3 className="text-xl font-semibold py-1 text-start tracking-tight">Brander Fraser</h3>
                    <p className="text-sm text-gray-600">{props.JobRange}</p>
                </div>
            </motion.div>
        );
    }

    // Automatic sliding every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setCurrentIndex((prev) => {
                    const nextIndex = prev + cardsToShow;
                    // If we've reached the end, loop back to the start
                    if (nextIndex >= StoriesData.length-1) {
                        return 0;
                    }
                    return nextIndex;
                });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isDragging, StoriesData.length]);

    // Update animation when currentIndex changes
    useEffect(() => {
        controls.start("visible");
    }, [currentIndex, controls]);

    // Drag handling
    const handleDragEnd = (event, info) => {
        const threshold = 100;
        const velocityThreshold = 500;
        
        if (info.velocity.x < -velocityThreshold || info.offset.x < -threshold) {
            setCurrentIndex((prev) => {
                const nextIndex = prev + cardsToShow;
                return nextIndex >= StoriesData.length ? 0 : nextIndex;
            });
        } else if (info.velocity.x > velocityThreshold || info.offset.x > threshold) {
            setCurrentIndex((prev) => {
                const prevIndex = prev - cardsToShow;
                return prevIndex < 0 ? StoriesData.length - cardsToShow : prevIndex;
            });
        }
        setIsDragging(false);
    };

    return (
        <div className="w-full flex items-center justify-center py-25 px-4 bg-[#F6F3FC]">
            <div className="container grid lg:grid-cols-2 grid-cols-1 lg:items-start lg:justify-items-start items-center justify-items-center">
                <motion.div 
                    className="flex flex-col items-center justify-center lg:items-start lg:justify-start mb-15"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent pb-5">
                        My Client's Stories
                    </h1>
                    <p className="text-center text-[15px] sm:text-[16px] leading-6 max-w-3xl">
                        Empowering people in a new digital journey with my super services
                    </p>
                </motion.div>
                
                <div className={`relative md:w-[84%] w-[22rem] overflow-hidden`} >
                    <motion.div
                        ref={carouselRef}
                        variants={carouselVariants}
                        initial="hidden"
                        animate={controls}
                        drag="x"
                        dragConstraints={{ 
                            left: -((StoriesData.length - cardsToShow) * (100 / cardsToShow)) + '%',
                            right: 0 
                        }}
                        dragElastic={0.2}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={handleDragEnd}
                        className={`flex gap-4 md:w-[38rem] cursor-grab active:cursor-grabbing`}
                    >
                        {StoriesData.map((story, index) => (
                            <div 
                                key={index} 
                                className={`md:w-[19rem] w-[22rem] flex-shrink-0`}
                                style={{ padding: '0 0.5rem' }}
                                // style={{ width: `${60 / StoriesData.length * cardsToShow}%`, padding: '0 0.5rem' }}
                            >
                                <StoryCard 
                                    Image={story.Image} 
                                    Para={story.Para} 
                                    JobRange={story.JobRange}
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Dots Navigation - shows one dot per pair */}
                    <div className="flex justify-center gap-2 mt-4">
                        {Array.from({ length: Math.ceil(StoriesData.length -1 / cardsToShow) }).map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentIndex(index * cardsToShow)}
                                className={`w-2 h-2 rounded-full ${
                                    currentIndex === index * cardsToShow ? 'bg-[#8750f7]' : 'bg-gray-300'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stories;