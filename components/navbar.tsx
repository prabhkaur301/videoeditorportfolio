'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -2 }}
      className="group fixed top-0 left-0 right-0 z-50 glass-effect m-4 md:m-6 rounded-2xl overflow-hidden"
    >
      {/* Moving gradient sheen — visible on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'linear-gradient(110deg, transparent 25%, rgba(212,175,55,0.22) 45%, rgba(196,30,58,0.18) 55%, transparent 75%)',
          backgroundSize: '250% 100%',
        }}
        animate={{ backgroundPosition: ['250% 0%', '-150% 0%'] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold gradient-text"
        >
          Sehaj Designs
        </motion.a>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link href={item.href} className="nav-link text-sm font-medium">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.nav>
  );
}
