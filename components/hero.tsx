'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-br from-white via-green-50 to-white flex items-center justify-center px-4">
      {/* Animated Background Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#006400] rounded-full blur-3xl opacity-30"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#004d40] rounded-full blur-2xl opacity-25"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Pakistan Emblem"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#004d40]">
          Government of Pakistan
        </h1>
        <p className="mt-3 text-lg text-gray-800">
          The official website of the Government of Pakistan
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 bg-[#006400] text-white rounded-md font-medium shadow hover:bg-[#004d40] transition"
        >
          <Link href="#ministries">Explore Ministries</Link>
        </motion.button>
      </motion.div>
    </section>
  );
}
