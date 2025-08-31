import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Dream Home Brought to Life by Teace",
      text: "The Design House transformed our vision into reality. Every detail was perfect, and the process was seamless from start to finish.",
      author: "Anjali & Rohan",
      role: "Homeowners"
    },
    {
      quote: "Exceptional Design & Execution",
      text: "Working with The Design House was an absolute pleasure. Their attention to detail and creative vision exceeded our expectations.",
      author: "Priya Sharma",
      role: "Business Owner"
    },
    {
      quote: "Luxury Redefined",
      text: "They didn't just design our space, they created an experience. The quality and craftsmanship are unmatched in the industry.",
      author: "Raj Malhotra",
      role: "Property Developer"
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
            In their words
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-amber-800 font-bold">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <blockquote className="text-2xl font-serif text-gray-800 mb-4 text-center">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-gray-600 mb-6 text-center">
                {testimonial.text}
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full ${dot === 0 ? 'bg-amber-800' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

