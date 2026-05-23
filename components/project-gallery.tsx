'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const projects = [
  {
    id: 1,
    title: 'Brand Promo Video',
    description: 'Fast-paced promotional video for e-commerce brand with dynamic transitions and color grading',
    tags: ['Video Editing', 'Color Grading', 'Sound Design'],
    color: '#D4AF37',
  },
  {
    id: 2,
    title: 'Social Media Content',
    description: 'Instagram Reels and TikTok shorts with trending effects and animations',
    tags: ['Short Form', 'Motion Graphics', 'Trendy'],
    color: '#C41E3A',
  },
  {
    id: 3,
    title: 'Product Showcase',
    description: 'High-quality product demo videos with 3D elements and smooth transitions',
    tags: ['Product Video', 'Graphics', 'VFX'],
    color: '#E5B563',
  },
  {
    id: 4,
    title: 'Corporate Testimonial',
    description: 'Professional testimonial videos with custom graphics, lower thirds, and cinematic effects',
    tags: ['Testimonial', 'Branding', 'Editing'],
    color: '#D4AF37',
  },
];

export function ProjectGallery() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: '0 25px 50px rgba(100, 181, 246, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section ref={ref} id="work" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Professional video editing and graphics projects crafted for brands and businesses. Each project showcases expertise in visual storytelling, editing, and design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className="group glass-effect rounded-xl overflow-hidden border border-border/50 hover:border-accent/50 transition-colors cursor-pointer"
            >
              <motion.div variants={cardHoverVariants} className="p-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 mb-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-3 text-foreground"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-foreground/70 mb-6 leading-relaxed"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-xs font-medium rounded-full border"
                      style={{
                        borderColor: project.color,
                        color: project.color,
                        backgroundColor: `${project.color}15`,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
