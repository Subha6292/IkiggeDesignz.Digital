import React from 'react'
import { motion } from 'framer-motion'

const DesignIdeas = () => {
  const blogPosts = [
    {
      title: "The Art of Minimalist Kitchen Design",
      description: "Discover how to create a clean, functional kitchen that maximizes space and style with minimalist principles.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "Kitchen Design"
    },
    {
      title: "Creating a Cozy Reading Nook",
      description: "Transform any corner of your home into a peaceful reading retreat with these design tips and inspiration.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      category: "Living Spaces"
    },
    {
      title: "Color Psychology in Interior Design",
      description: "Learn how different colors affect mood and how to use them strategically in your home design.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
      category: "Color Theory"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif text-gray-800 mb-6 md:mb-0"
          >
            Design ideas
          </motion.h2>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-900 transition-colors duration-300"
          >
            FIND MORE
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-gray-800 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignIdeas

