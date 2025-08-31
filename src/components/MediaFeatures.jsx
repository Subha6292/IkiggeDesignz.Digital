import React from 'react'
import { motion } from 'framer-motion'

const MediaFeatures = () => {
  const mediaOutlets = [
    'VOGUE', 'ELLE', 'ARCHITECTURAL DIGEST', 'DESIGN WEEK', 'INTERIOR DESIGN', 'LUXURY HOME',
    'STYLE', 'MODERN', 'TREND', 'INSPIRATION', 'CREATIVE', 'ART'
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Media and features
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {mediaOutlets.map((outlet, index) => (
            <motion.div
              key={outlet}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="text-lg md:text-xl font-bold text-gray-400 hover:text-amber-800 transition-colors duration-300 cursor-pointer text-center">
                {outlet}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaFeatures

