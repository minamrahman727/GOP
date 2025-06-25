'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// const containerVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 15px rgba(34, 197, 94, 0.3)',
    transition: { duration: 0.3 },
  },
};

export default function Departments() {
  return (
    <section className="py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white border border-green-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        {/* Emblem with glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-32 h-32 flex-shrink-0 rounded-full bg-green-50 p-2 shadow-inner ring-2 ring-green-100"
        >
          <Image
            src="/logo.png" // Replace with actual emblem path
            alt="Pakistan Emblem"
            width={128}
            height={128}
            className="object-contain w-full h-full"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-bold text-green-800 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Government Departments
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Various federal and provincial departments are responsible for delivering public services, enforcing regulations, and supporting governance across Pakistan.
          </motion.p>

          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              href="/government/departments"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Browse Departments <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
