import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Hero = () => {
  // 3 different Unsplash images
  const images = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=80", // slide1
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1500&q=80", // slide2
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80"  // slide3
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0, transition: { duration: 0.8 } })
  }

  return (
    <section className="pt-20 relative w-full h-screen">
  {/* Slideshow */}
  <div className="relative w-full h-full overflow-hidden">
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Luxury interior"
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </AnimatePresence>

    {/* Overlay (dark gradient for text readability) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text Content */}
    <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-24">
      <div className="text-white max-w-xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Interior Designers in <span className="text-yellow-400">Roorkee</span>
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Hassle-free home interiors guaranteed with our best interior designers in Roorkee.
        </p>
      </div>
    </div>

    {/* Arrows */}
    <div className="absolute inset-0 flex items-center justify-between p-6">
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <HiChevronLeft size={24} />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <HiChevronRight size={24} />
      </motion.button>
    </div>
  </div>
</section>

  )
}


export default Hero
