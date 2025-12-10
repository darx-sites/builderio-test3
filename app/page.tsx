'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { Builder } from '@builder.io/react'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
}

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full shadow-2xl">
              <span className="text-sm font-semibold tracking-wide uppercase">Welcome</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
          >
            Hello World
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed"
          >
            A simple, elegant landing page built with Next.js 14 and Builder.io
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl border-2 border-primary-200 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Built with Next.js 14 for optimal speed and performance',
      icon: '⚡',
    },
    {
      title: 'Visual Editing',
      description: 'Integrated with Builder.io for easy content management',
      icon: '🎨',
    },
    {
      title: 'Responsive Design',
      description: 'Looks great on all devices, from mobile to desktop',
      icon: '📱',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a modern landing page
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Join us today and experience the power of modern web development
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Start Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2024 builderio-test3. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js 14 and Builder.io
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

Builder.registerComponent(Hero, {
  name: 'Hero Section',
  inputs: []
})

Builder.registerComponent(Features, {
  name: 'Features Section',
  inputs: []
})

Builder.registerComponent(CTA, {
  name: 'CTA Section',
  inputs: []
})

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: []
})

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '')
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}