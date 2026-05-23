'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: Mail,
      href: 'mailto:sehaj.in.design@gmail.com',
      label: 'Email',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Sehaj Singh</h3>
            <p className="text-foreground/60 text-sm">
              Professional video editor and content creator for brands. Based in Punjab.
            </p>
          </div>

          <div className="flex gap-6">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, color: '#64B5F6' }}
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center text-foreground/50 text-sm"
        >
          <p>© {currentYear} Sehaj Singh. All rights reserved. Crafted with passion and precision.</p>
        </motion.div>
      </div>
    </footer>
  );
}
