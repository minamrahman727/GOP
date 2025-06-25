'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type Province = {
  name: string;
  fullName: string;
  emblem: string;
  cm: string;
  governor: string;
  area: string;
  population: string;
  description: string;
};

const provinces: Province[] = [
  {
    name: 'Punjab',
    fullName: 'Province of Punjab',
    emblem: '/logo/punjab.png',
    cm: 'Maryam Nawaz',
    governor: 'Baligh Ur Rehman',
    area: '205,344 km²',
    population: '110 million',
    description: 'Punjab is the most populous province of Pakistan, known for its rich culture, fertile lands, and industrial growth.',
  },
  {
    name: 'Sindh',
    fullName: 'Province of Sindh',
    emblem: '/logo/sindh.png',
    cm: 'Murad Ali Shah',
    governor: 'Kamran Khan Tessori',
    area: '140,914 km²',
    population: '47.9 million',
    description: 'Sindh, home to Karachi, is the second-most populous province, known for its diverse economy and ancient Indus Valley Civilization.',
  },
  {
    name: 'Khyber Pakhtunkhwa',
    fullName: 'Province of Khyber Pakhtunkhwa',
    emblem: '/logo/kpk.png',
    cm: 'Ali Amin Gandapur',
    governor: 'Faisal kareem Kundi',
    area: '101,741 km²',
    population: '35 million',
    description: 'Khyber Pakhtunkhwa is known for its mountainous terrain, rich Pashtun culture, and strategic location near the Afghan border.',
  },
  {
    name: 'Balochistan',
    fullName: 'Province of Balochistan',
    emblem: '/logo/baluch.png',
    cm: 'Sarfaraz Bugti',
    governor: 'Abdul Wali Kakar',
    area: '347,190 km²',
    population: '12.3 million',
    description: 'Balochistan is the largest province by area, rich in natural resources and home to the Gwadar port.',
  },
  {
    name: 'Gilgit-Baltistan',
    fullName: 'Province of Gilgit-Baltistan',
    emblem: '/logo/gilgit.png',
    cm: 'Gulbar Khan',
    governor: 'Syed mehdi shah',
    area: '72,971  km²',
    population: '1.5 million',
    description: 'Gilgit-Baltistan is known for its stunning mountainous landscapes, including K2, and is a popular destination for trekkers and climbers.',
  },
  {
    name: 'Azad & Jammu Kashmir',
    fullName: 'Province of Azad & Jammu Kashmir',
    emblem: '/logo/Ajk.png',
    cm: ' PM Chaudhry Anwarul Haq',
    governor: 'N/A',
    area: '13,297km²',
    population: '4 million',
    description: 'Azad Jammu and Kashmir (AJK) is a self-governing administrative region administered by Pakistan, known for its scenic beauty and mountainous terrain.',
  },
];

export default function ProvincesPage() {
  const [selected, setSelected] = useState<Province | null>(null);

  return (
    <section className="py-12 w-full h-screen bg-slate-100 mx-auto px-4">
      <motion.h1
        className="text-4xl font-bold text-center text-green-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Provinces of Pakistan
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {provinces.map((province, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-lg p-6 cursor-pointer shadow hover:shadow-lg transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            onClick={() => setSelected(province)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16">
                <Image
                  src={province.emblem}
                  alt={province.name}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-green-700">
                  {province.name}
                </h2>
                <p className="text-sm text-gray-500">{province.fullName}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-xl w-full p-6 relative"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={selected.emblem}
                    alt={selected.name}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">
                    {selected.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">{selected.name}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">
                {selected.description}
              </p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                <li><strong>Area:</strong> {selected.area}</li>
                <li><strong>Population:</strong> {selected.population}</li>
                <li><strong>Chief Minister:</strong> {selected.cm}</li>
                <li><strong>Governor:</strong> {selected.governor}</li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
