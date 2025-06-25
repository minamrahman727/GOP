'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const provinces = [
  {
    name: 'Punjab',
    emblem: '/logo/punjab.png',
  },
  {
    name: 'Sindh',
    emblem: '/logo/sindh.png',
  },
  {
    name: 'Khyber Pakhtunkhwa',
    emblem: '/logo/kpk.png',
  },
  {
    name: 'Balochistan',
    emblem: '/logo/baluch.png',
  },
];

export default function Provinces() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-800 mb-2">Provinces of Pakistan</h2>
        <p className="text-sm text-gray-600 mb-8">
          Explore the four administrative provinces, each with its unique culture and governance.
        </p>

        {/* Emblem Grid */}
        <div className="grid grid-cols-2 gap-6 justify-center items-center mb-8">
          {provinces.map((province, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white border border-green-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center shadow-sm mb-2">
                <Image
                  src={province.emblem}
                  alt={province.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-green-800">{province.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            href="/government/provinces"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
          >
            View All Provinces <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
