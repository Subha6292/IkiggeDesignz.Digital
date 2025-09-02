import React from 'react'
import { motion } from 'framer-motion'

const SpacesWeShaped = () => {
  const projects = [
    {
      name: 'Olaya',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      description: 'Modern living room design',
      price: 'Starting at 3.57L*'
    },
    {
      name: 'Kailam',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop',
      description: 'Elegant interior styling',
      price: 'Starting at 4.23L*'
    },
    {
      name: 'Pink Verranda',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      description: 'Outdoor dining paradise',
      price: 'Starting at 4.81L*'
    },
    {
      name: 'White Garden',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      description: 'Cafe interior design',
      price: 'Starting at 5.10L*'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔹 Heading aligned to right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
            Homes for every budget
          </h2>
          <p className="text-xl text-gray-600">
            Our interior designers work with you keeping in mind your requirements and budget.
          </p>
        </motion.div>


        {/* 🔹 Grid with overlay labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* 🔹 Top-left price label */}
              <div className="absolute top-4 left-4 bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                {project.price}
              </div>

              {/* 🔹 Bottom overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{project.name}</h3>
                <p className="text-lg mb-4 opacity-90">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 w-fit"
                >
                  VIEW PROJECT
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpacesWeShaped
