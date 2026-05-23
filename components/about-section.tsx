'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Image from 'next/image';

const stats = [
  { number: '30+', label: 'Videos Created' },
  { number: '10+', label: 'Brand Clients' },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} id="about" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/sehaj-portfolio.jpg"
                alt="Sehaj Singh - Video Editor"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent rounded-lg bg-card flex items-center justify-center text-center p-2"
            >
              <p className="text-xs font-semibold text-accent">Available for Projects</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <motion.span variants={itemVariants} className="text-accent text-sm font-semibold tracking-widest uppercase">
              About Me
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Creative <span className="gradient-text">Video Editor</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-foreground/70 text-lg mb-6 leading-relaxed">
              I&apos;m Sehaj Singh, a professional video editor and content creator based in Punjab. With expertise in Adobe Creative Suite, I specialize in crafting compelling video content and graphics for brands.
            </motion.p>
            <motion.p variants={itemVariants} className="text-foreground/70 text-lg leading-relaxed mb-8">
              From short-form social media videos to full-length promotional content, I help businesses tell their stories through high-quality visual production. Every cut has a reason. Every frame tells a story.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-effect p-4 rounded-lg text-center border border-accent/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2 * index + 0.3, type: 'spring', stiffness: 100 }}
                    className="text-2xl font-bold gradient-text mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-foreground/70 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
