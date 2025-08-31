import React from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Instagram = () => {
  const instagramImages = [
    {
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=400&fit=crop',
      alt: 'Living room with arched wall'
    },
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      alt: 'Bedroom with pink headboard'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
      alt: 'Bedroom with floral wallpaper'
    },
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
      alt: 'Entryway with round table'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Follow us on Instagram
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {instagramImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-amber-800 transition-colors duration-300 shadow-lg"
            >
              <HiChevronLeft size={20} />
            </motion.button>
            
            <div className="flex space-x-2">
              {[0, 1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-amber-800' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-amber-800 transition-colors duration-300 shadow-lg"
            >
              <HiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram

