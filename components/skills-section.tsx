'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Premiere Pro', icon: '📹', color: '#D4AF37' },
  { name: 'After Effects', icon: '✨', color: '#C41E3A' },
  { name: 'Photoshop', icon: '🎨', color: '#E5B563' },
  { name: 'Illustrator', icon: '🖌️', color: '#D4AF37' },
  { name: 'Lightroom', icon: '🖼️', color: '#C41E3A' },
  { name: 'Media Encoder', icon: '⚙️', color: '#E5B563' },
];

export function SkillsSection() {
  return (
    <section className="relative py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tools & <span className="gradient-text">Software</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Professional-grade software suite for video editing, graphics, and content creation
          </p>
        </motion.div>

        {/* Animated skills carousel */}
        <div className="relative overflow-hidden py-8">
          {/* First row - left to right */}
          <div className="flex gap-6 mb-8">
            <motion.div
              className="flex gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15, y: -15 }}
                  className="min-w-max px-6 py-4 glass-effect rounded-lg text-center cursor-pointer"
                  style={{
                    borderTop: `3px solid ${skill.color}`,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                    className="text-4xl mb-3"
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="text-foreground/80 font-semibold text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row - right to left */}
          <div className="flex gap-6">
            <motion.div
              className="flex gap-6"
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`row2-${index}`}
                  whileHover={{ scale: 1.15, y: -15 }}
                  className="min-w-max px-6 py-4 glass-effect rounded-lg text-center cursor-pointer"
                  style={{
                    borderTop: `3px solid ${skill.color}`,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                    className="text-4xl mb-3"
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="text-foreground/80 font-semibold text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
