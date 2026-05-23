'use client';

import { motion } from 'framer-motion';
import { FolderOpen, FileText, ArrowUpRight } from 'lucide-react';

const PROOF_OF_WORK_URL = 'https://drive.google.com/drive/folders/1WXeXFgHm2LSKGQ8eGTmQz_k92UK7X2OG';
const RESUME_URL = '/resume.pdf';

export function ResourcesSection() {
  const cards = [
    {
      icon: FolderOpen,
      title: 'Proof of Work',
      description:
        'Browse the full library of edits, reels, and brand work on Google Drive.',
      cta: 'Open Drive',
      href: PROOF_OF_WORK_URL,
      external: true,
      accent: '#D4AF37',
    },
    {
      icon: FileText,
      title: 'Resume',
      description:
        'Download my latest resume — experience, skills, and contact details in one PDF.',
      cta: 'Download Resume',
      href: RESUME_URL,
      external: false,
      accent: '#C41E3A',
    },
  ];

  return (
    <section id="resources" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Explore <span className="gradient-text">My Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                download={c.external ? undefined : ''}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative block p-8 rounded-xl glass-effect border border-border/50 hover:border-accent/60 transition-colors overflow-hidden"
                style={{ borderTop: `3px solid ${c.accent}` }}
              >
                {/* hover sheen */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${c.accent}22, transparent 60%)`,
                  }}
                />
                <div
                  className="relative z-10 flex items-center justify-center w-14 h-14 rounded-lg mb-5 transition-colors"
                  style={{ backgroundColor: `${c.accent}26`, color: c.accent }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold mb-2">{c.title}</h3>
                <p className="relative z-10 text-foreground/70 mb-6 leading-relaxed">
                  {c.description}
                </p>
                <span
                  className="relative z-10 inline-flex items-center gap-2 font-semibold"
                  style={{ color: c.accent }}
                >
                  {c.cta}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
