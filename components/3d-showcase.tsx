'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingBox() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#64B5F6"
        metalness={0.8}
        roughness={0.2}
        emissive="#64B5F6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Scene3D() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        autoRotate
        autoRotateSpeed={4}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#81C784" />
      <RotatingBox />
    </Canvas>
  );
}

export function ThreeDShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="relative min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* 3D Canvas */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] rounded-2xl overflow-hidden glass-effect"
          >
            <Scene3D />
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            <motion.span
              variants={itemVariants}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Interactive Experience
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 mt-4"
            >
              3D <span className="gradient-text">Motion</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-foreground/70 text-lg mb-8 leading-relaxed"
            >
              Explore interactive 3D scenes with smooth animations and mouse controls. Every element is carefully crafted to create immersive experiences that captivate and engage.
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4">
              {['Custom 3D Models', 'Real-time Interactions', 'Smooth Animations'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
