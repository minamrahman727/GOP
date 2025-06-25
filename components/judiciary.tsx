'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scale, ExternalLink, ChevronLeft, ChevronRight, Gavel, Shield, Building2, Users, Crown } from 'lucide-react';
import { useRef, useState } from 'react';

const courts = [
  {
    name: 'Supreme Court of Pakistan',
    link: 'https://www.supremecourt.gov.pk/',
    logo: '/logo/supreme.png',
    description: 'The apex court of Pakistan with constitutional & appellate powers over all courts in the country.',
    type: 'Supreme Court',
    icon: Scale,
    chiefJustice: 'Justice Qazi Faez Isa',
    judges: 17,
    established: 1956,
    location: 'Islamabad',
    jurisdiction: 'Federal',
    priority: 'high'
  },
  {
    name: 'Islamabad High Court',
    link: 'https://ihc.gov.pk/',
    logo: '/logo/ihc.png',
    description: 'Handles legal matters in the federal capital territory and federal institutions.',
    type: 'High Court',
    icon: Building2,
    chiefJustice: 'Justice Aamer Farooq',
    judges: 9,
    established: 2010,
    location: 'Islamabad',
    jurisdiction: 'Federal Capital',
    priority: 'medium'
  },
  {
    name: 'Sindh High Court',
    link: 'https://sindhhighcourt.gov.pk/',
    logo: '/logo/shc.png',
    description: 'High court with jurisdiction across Sindh province including Karachi.',
    type: 'High Court',
    icon: Building2,
    chiefJustice: 'Justice Aqeel Ahmed Abbasi',
    judges: 52,
    established: 1906,
    location: 'Karachi',
    jurisdiction: 'Sindh Province',
    priority: 'medium'
  },
  {
    name: 'Lahore High Court',
    link: 'https://lhc.gov.pk/',
    logo: '/logo/lhc.png',
    description: 'Covers legal administration in the province of Punjab, Pakistan\'s most populous province.',
    type: 'High Court',
    icon: Building2,
    chiefJustice: 'Justice Malik Shahzad Ahmad Khan',
    judges: 84,
    established: 1919,
    location: 'Lahore',
    jurisdiction: 'Punjab Province',
    priority: 'medium'
  },
  {
    name: 'Balochistan High Court',
    link: 'https://bhc.gov.pk/',
    logo: '/logo/BHC.jpg',
    description: 'Handles judicial cases throughout Balochistan province, Pakistan\'s largest province by area.',
    type: 'High Court',
    icon: Building2,
    chiefJustice: 'Justice Naeem Akhtar Afghan',
    judges: 12,
    established: 1976,
    location: 'Quetta',
    jurisdiction: 'Balochistan Province',
    priority: 'medium'
  },
  {
    name: 'Peshawar High Court',
    link: 'https://peshawarhighcourt.gov.pk/',
    logo: '/logo/PHC.png',
    description: 'Responsible for legal proceedings in Khyber Pakhtunkhwa and tribal areas.',
    type: 'High Court',
    icon: Building2,
    chiefJustice: 'Justice Ishtiaq Ibrahim',
    judges: 28,
    established: 1919,
    location: 'Peshawar',
    jurisdiction: 'Khyber Pakhtunkhwa',
    priority: 'medium'
  },
  {
    name: 'Supreme Court of AJK',
    link: 'https://ajksupremecourt.gok.pk/',
    logo: '/logo/ajksupreme.png',
    description: 'Top court in Azad Jammu & Kashmir with final appellate jurisdiction.',
    type: 'Supreme Court',
    icon: Scale,
    chiefJustice: 'Justice Raza Ali Khan',
    judges: 5,
    established: 1975,
    location: 'Muzaffarabad',
    jurisdiction: 'Azad Kashmir',
    priority: 'low'
  },
  {
    name: 'Federal Shariat Court',
    link: 'https://federalshariatcourt.gov.pk/',
    logo: '/logo/FsC.svg',
    description: 'Ensures Pakistan\'s laws conform to Islamic principles and Shariat compliance.',
    type: 'Specialized Court',
    icon: Gavel,
    chiefJustice: 'Justice Muhammad Noor Meskanzai',
    judges: 8,
    established: 1980,
    location: 'Islamabad',
    jurisdiction: 'Islamic Law Review',
    priority: 'high'
  },
  {
    name: 'Wafaqi Mohtasib (Ombudsman)',
    link: 'https://mohtasib.gov.pk/',
    logo: '/logo/Ombudsman.png',
    description: 'Handles public complaints against federal organizations and maladministration.',
    type: 'Ombudsman',
    icon: Shield,
    chiefJustice: 'Justice (R) Ejaz Ishaq Khan',
    judges: 'N/A',
    established: 1983,
    location: 'Islamabad',
    jurisdiction: 'Federal Complaints',
    priority: 'medium'
  },
];

export default function JudiciarySlider() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };


type ScrollDirection = 'left' | 'right';

const scroll = (direction: ScrollDirection) => {
    if (scrollRef.current) {
        const scrollAmount = 380; // Card width + gap
        const newScrollLeft = (scrollRef.current as HTMLDivElement).scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        (scrollRef.current as HTMLDivElement).scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        setTimeout(checkScrollButtons, 300);
    }
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 px-4 overflow-hidden">
      

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg mb-8 border border-emerald-100">
            <Scale className="w-6 h-6 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Justice System</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-800 bg-clip-text text-transparent mb-6">
            Judiciary & Legal Institutions
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Explore Pakistan&apos;s comprehensive judicial system, from the apex Supreme Court to specialized courts ensuring justice and constitutional compliance across the nation.
          </p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
            <div className="w-2 h-2 bg-emerald-200 rounded-full"></div>
          </div>
          
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-emerald-600 border border-emerald-100' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-emerald-600 border border-emerald-100' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Courts Slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courts.map((court, index) => {
              const IconComponent = court.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative min-w-[370px] snap-start"
                >
                  {/* Priority Indicator */}
                  {court.priority === 'high' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}

                  {/* Card Background with Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/50 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                        {court.type}
                      </div>
                    </div>

                    {/* Logo */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl blur-lg opacity-20"></div>
                        <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                          <Image
                            src={court.logo}
                            alt={court.name}
                            width={80}
                            height={80}
                            className="object-contain mx-auto"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Court Name */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center leading-tight">
                      {court.name}
                    </h3>

                    {/* Court Details */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Crown className="w-4 h-4 text-emerald-600" />
                        <span className="text-gray-700">
                          <strong>Chief Justice:</strong> {court.chiefJustice}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span className="text-gray-700">
                          <strong>Judges:</strong> {court.judges}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                        <div>
                          <strong>Est:</strong> {court.established}
                        </div>
                        <div>
                          <strong>Location:</strong> {court.location}
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-600">
                        <strong>Jurisdiction:</strong> {court.jurisdiction}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {court.description}
                    </p>

                    {/* Action Button */}
                    <motion.a
                      href={court.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-emerald-500/25"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </motion.a>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-white/30 to-transparent rounded-full blur-xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(courts.length / 3) }).map((_, index) => (
              <div
                key={index}
                className="h-1 w-8 bg-emerald-200 rounded-full"
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600">9</div>
              <div className="text-sm text-gray-600">Judicial Bodies</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">High Courts</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
              <div className="text-3xl font-bold text-teal-600">2</div>
              <div className="text-sm text-gray-600">Supreme Courts</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-700">215+</div>
              <div className="text-sm text-gray-600">Total Judges</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}