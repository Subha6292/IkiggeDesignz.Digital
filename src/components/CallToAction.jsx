import React from 'react'
import { motion } from 'framer-motion'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-amber-800 text-white p-12 lg:p-16 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <HiChatBubbleLeftRight size={40} className="mr-4" />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">
              Beautiful homes start with a conversation
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-800 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop"
              alt="Interior design showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

