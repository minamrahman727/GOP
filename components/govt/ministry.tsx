'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';



const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 20px rgba(34, 197, 94, 0.3)',
    transition: { duration: 0.3 },
  },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
};

export default function Departments() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50 to-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white border border-green-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        {/* Emblem with pulse/glow animation */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={imageVariants}
          viewport={{ once: true }}
          className="w-32 h-32 flex-shrink-0 rounded-full bg-green-100 p-2 shadow-inner ring-2 ring-green-300 animate-pulse"
        >
          <Image
            src="/logo.png"
            alt="Pakistan Emblem"
            width={128}
            height={128}
            className="object-contain w-full h-full"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ministries of Pakistan
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pakistan’s federal ministries manage core national responsibilities like finance, education, defence, and foreign policy. Discover their roles, departments, and the impact they have on daily governance.
          </motion.p>

          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              href="/government/ministry"
              className="inline-flex items-center px-6 py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all"
            >
              Browse Departments <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
