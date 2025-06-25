'use client';

import { motion, easeOut, easeInOut } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ministries = [
  {
    name: 'Cabinet Division',
    logo: '/logo.png',
    link: '/ministries/cabinet',
    description: 'Administrative coordination and governance oversight',
    functions: [
      'Coordination between federal ministries',
      'Cabinet meeting secretariat services',
      'Policy implementation oversight',
      'Crisis management coordination'
    ],
    keyInitiatives: ['Digital Pakistan Initiative', 'Administrative Reforms', 'Inter-ministerial Coordination'],
    established: '1947',
    minister: 'Prime Minister (Ex-Officio)',
  },
  {
    name: 'Ministry of Climate Change & Environmental Coordination',
    logo: '/logo.png',
    link: '/ministries/climate',
    description: 'Environmental protection and climate action leadership',
    functions: [
      'Climate change policy formulation',
      'Environmental impact assessments',
      'Biodiversity conservation programs',
      'Green energy initiatives promotion'
    ],
    keyInitiatives: ['Clean Green Pakistan', 'Ten Billion Tree Tsunami', 'Plastic Bag Ban'],
    established: '2011',
    minister: 'Ms. Romina Khurshid Alam',
  },
  {
    name: 'Ministry of Commerce & Textile',
    logo: '/logo.png',
    link: '/ministries/commerce',
    description: 'Trade promotion and textile industry development',
    functions: [
      'Export promotion strategies',
      'Trade policy formulation',
      'Textile industry development',
      'International trade negotiations'
    ],
    keyInitiatives: ['Made in Pakistan', 'Export Enhancement', 'Trade Facilitation'],
    established: '1947',
    minister: 'Mr. Jam Kamal Khan',
  },
  {
    name: 'Ministry of Communications & Works',
    logo: '/logo.png',
    link: '/ministries/communication',
    description: 'Infrastructure development and transport networks',
    functions: [
      'Highway construction and maintenance',
      'Bridge and tunnel development',
      'Transport policy formulation',
      'Infrastructure project oversight'
    ],
    keyInitiatives: ['CPEC Projects', 'Motorway Expansion', 'Rural Road Development'],
    established: '1947',
    minister: 'Mr. Aleem Khan',
  },
  {
    name: 'Ministry of Defence',
    logo: '/logo.png',
    link: '/ministries/defence',
    description: 'National security and armed forces coordination',
    functions: [
      'Defense policy formulation',
      'Armed forces coordination',
      'Defense procurement oversight',
      'National security planning'
    ],
    keyInitiatives: ['Defense Modernization', 'Indigenous Defense Production', 'Strategic Partnerships'],
    established: '1947',
    minister: 'Mr. Khawaja Muhammad Asif',
  },
  {
    name: 'Ministry of Defence Production',
    logo: '/logo/mdp.png',
    link: '/ministries/defence-production',
    description: 'Military equipment manufacturing and defense industry',
    functions: [
      'Defense equipment manufacturing',
      'Military technology development',
      'Defense exports promotion',
      'Strategic partnerships in defense'
    ],
    keyInitiatives: ['JF-17 Thunder Program', 'Al-Khalid Tank Production', 'Defense Export Growth'],
    established: '1951',
    minister: 'Lt. Gen. (R) Abdul Qadir Baloch',
  },
  {
    name: 'Ministry of Energy (Power Division)',
    logo: '/logo.png',
    link: '/ministries/energy',
    description: 'Power generation and energy security management',
    functions: [
      'Electricity generation planning',
      'Power distribution oversight',
      'Renewable energy promotion',
      'Energy security policies'
    ],
    keyInitiatives: ['Solar Power Projects', 'Hydroelectric Development', 'Grid Modernization'],
    established: '1958',
    minister: 'Mr. Awais Ahmad Khan Leghari',
  },
  {
    name: 'Ministry of Energy (Petroleum Division)',
    logo: '/logo.png',
    link: '/ministries/petroleum',
    description: 'Oil, gas and petroleum resources management',
    functions: [
      'Oil and gas exploration policies',
      'Petroleum product pricing',
      'Strategic petroleum reserves',
      'Energy import/export planning'
    ],
    keyInitiatives: ['Thar Coal Project', 'LNG Terminal Development', 'Oil Refinery Modernization'],
    established: '1958',
    minister: 'Dr. Musadik Malik',
  },
  {
    name: 'Ministry of Federal Education & Professional Training',
    logo: '/logo/edu.jpg',
    link: '/ministries/education',
    description: 'Educational policy and professional skill development',
    functions: [
      'Federal education policy formulation',
      'Higher education oversight',
      'Technical and vocational training',
      'International education partnerships'
    ],
    keyInitiatives: ['Single National Curriculum', 'Digital Skills Program', 'TVET Enhancement'],
    established: '1947',
    minister: 'Dr. Khalid Maqbool Siddiqui',
  },
  {
    name: 'Ministry of Finance & Revenue',
    logo: '/logo/finance.jpg',
    link: '/ministries/finance',
    description: 'Economic policy and fiscal management',
    functions: [
      'Budget formulation and execution',
      'Tax policy and revenue collection',
      'Economic planning and analysis',
      'Public debt management'
    ],
    keyInitiatives: ['Digital Pakistan Initiative', 'Tax System Reforms', 'Economic Stabilization'],
    established: '1947',
    minister: 'Mr. Muhammad Aurangzeb',
  },
  {
    name: 'Ministry of Foreign Affairs',
    logo: '/logo/fa.png',
    link: '/ministries/foreign-affairs',
    description: 'International relations and diplomatic affairs',
    functions: [
      'Diplomatic relations management',
      'International treaty negotiations',
      'Consular services oversight',
      'Foreign policy formulation'
    ],
    keyInitiatives: ['CPEC Coordination', 'OIC Leadership', 'Diaspora Engagement'],
    established: '1947',
    minister: 'Mr. Ishaq Dar',
  },
  {
    name: 'Ministry of Housing & Works',
    logo: '/logo/hw.jpg',
    link: '/ministries/housing',
    description: 'Public housing and infrastructure development',
    functions: [
      'Government housing schemes',
      'Public building construction',
      'Urban planning coordination',
      'Housing policy formulation'
    ],
    keyInitiatives: ['Naya Pakistan Housing Program', 'Government Housing Schemes', 'Urban Development'],
    established: '1947',
    minister: 'Mr. Mian Riaz Hussain Pirzada',
  },
  {
    name: 'Ministry of Human Rights',
    logo: '/logo/hr.jpg',
    link: '/ministries/human-rights',
    description: 'Rights protection and advocacy services',
    functions: [
      'Human rights policy formulation',
      'Minority rights protection',
      'Women and children rights',
      'International human rights compliance'
    ],
    keyInitiatives: ['National Action Plan on Human Rights', 'Women Protection Act', 'Child Protection'],
    established: '2008',
    minister: 'Ms. Azma Zahid Bukhari',
  },
  {
    name: 'Ministry of Industries & Production',
    logo: '/logo/i&p.jpg',
    link: '/ministries/industries',
    description: 'Industrial development and manufacturing growth',
    functions: [
      'Industrial policy formulation',
      'Manufacturing sector development',
      'Small and medium enterprises support',
      'Industrial zone development'
    ],
    keyInitiatives: ['Make in Pakistan', 'SME Development', 'Industrial Automation'],
    established: '1947',
    minister: 'Mr. Rana Tanveer Hussain',
  },
  {
    name: 'Ministry of Information & Broadcasting',
    logo: '/logo.png',
    link: '/ministries/information',
    description: 'Media regulation and information dissemination',
    functions: [
      'Media policy formulation',
      'Government communication strategy',
      'Broadcasting regulations',
      'Film and entertainment industry'
    ],
    keyInitiatives: ['Digital Media Policy', 'Pakistan Media Development', 'Cultural Heritage Promotion'],
    established: '1947',
    minister: 'Ms. Attaullah Tarar',
  },
  {
    name: 'Ministry of Information Technology & Telecommunication',
    logo: '/logo/it&tel.jpeg',
    link: '/ministries/it-telecom',
    description: 'Digital infrastructure and technology advancement',
    functions: [
      'IT policy formulation and implementation',
      'Telecommunications infrastructure development',
      'Digital Pakistan initiatives',
      'Cybersecurity and data protection'
    ],
    keyInitiatives: ['Digital Pakistan Vision 2025', '5G Network Deployment', 'E-Governance Solutions'],
    established: '2001',
    minister: 'Ms. Shaza Fatima Khawaja',
  },
  {
    name: 'Ministry of Interior',
    logo: '/logo.png',
    link: '/ministries/interior',
    description: 'Internal security and law enforcement coordination',
    functions: [
      'Internal security policy',
      'Immigration and passport services',
      'Civil armed forces coordination',
      'Emergency response management'
    ],
    keyInitiatives: ['National Action Plan', 'Border Management', 'Counter-Terrorism Operations'],
    established: '1947',
    minister: 'Mr. Mohsin Raza Naqvi',
  },
  {
    name: 'Ministry of Inter-Provincial Coordination',
    logo: '/logo.png',
    link: '/ministries/inter-provincial',
    description: 'Federal-provincial coordination and harmony',
    functions: [
      'Inter-provincial coordination',
      'Federal-provincial relations',
      'Sports development and promotion',
      'Youth affairs coordination'
    ],
    keyInitiatives: ['Sports for All', 'Youth Development Program', 'Provincial Coordination'],
    established: '2010',
    minister: 'Mr. Rana Sanaullah Khan',
  },
  {
    name: 'Ministry of Kashmir Affairs & Gilgit-Baltistan',
    logo: '/logo.png',
    link: '/ministries/kashmir-gb',
    description: 'Affairs of Kashmir and Gilgit-Baltistan regions',
    functions: [
      'Kashmir affairs coordination',
      'Gilgit-Baltistan development',
      'Regional development programs',
      'Cross-border coordination'
    ],
    keyInitiatives: ['Kashmir Development Program', 'GB Infrastructure Development', 'Regional Coordination'],
    established: '1947',
    minister: 'Mr. Amir Muqam',
  },
  {
    name: 'Ministry of Law & Justice',
    logo: '/logo.png',
    link: '/ministries/law-justice',
    description: 'Legal affairs and judicial system support',
    functions: [
      'Legal policy formulation',
      'Legislative drafting',
      'Judicial system support',
      'Legal aid services'
    ],
    keyInitiatives: ['Legal Reforms Program', 'Alternative Dispute Resolution', 'Judicial Automation'],
    established: '1947',
    minister: 'Mr. Azam Nazeer Tarar',
  },
  {
    name: 'Ministry of Maritime Affairs',
    logo: '/logo.png',
    link: '/ministries/maritime',
    description: 'Maritime policies and coastal development',
    functions: [
      'Maritime policy formulation',
      'Port development and management',
      'Shipping industry regulation',
      'Coastal area development'
    ],
    keyInitiatives: ['Blue Economy Initiative', 'Port Development', 'Maritime Security'],
    established: '1972',
    minister: 'Mr. Qaiser Ahmed Sheikh',
  },
  {
    name: 'Ministry of Narcotics Control',
    logo: '/logo.png',
    link: '/ministries/narcotics',
    description: 'Drug prevention and control operations',
    functions: [
      'Anti-narcotics policy formulation',
      'Drug trafficking prevention',
      'Rehabilitation programs',
      'International cooperation on drugs'
    ],
    keyInitiatives: ['National Anti-Drug Policy', 'Rehabilitation Centers', 'Border Drug Control'],
    established: '1995',
    minister: 'Mr. Mohsin Raza Naqvi',
  },
  {
    name: 'Ministry of National Food Security & Research',
    logo: '/logo.png',
    link: '/ministries/food-security',
    description: 'Agricultural policy and food systems management',
    functions: [
      'Agricultural policy formulation',
      'Food security planning',
      'Agricultural research promotion',
      'Livestock development'
    ],
    keyInitiatives: ['Kisan Package', 'Agricultural Mechanization', 'Food Security Program'],
    established: '2013',
    minister: 'Mr. Rana Tanveer Hussain',
  },
  {
    name: 'Ministry of National Health Services, Regulations & Coordination',
    logo: '/logo.png',
    link: '/ministries/health',
    description: 'Healthcare policy and public health management',
    functions: [
      'Health policy formulation',
      'Disease prevention and control',
      'Medical education oversight',
      'Drug regulation and control'
    ],
    keyInitiatives: ['Universal Health Coverage', 'Sehat Sahulat Program', 'Disease Control Programs'],
    established: '2013',
    minister: 'Dr. Nadeem Jan',
  },
  {
    name: 'Ministry of Overseas Pakistanis & Human Resource Development',
    logo: '/logo.png',
    link: '/ministries/overseas-pakistanis',
    description: 'Diaspora affairs and workforce development',
    functions: [
      'Overseas Pakistani welfare',
      'Labor export policies',
      'Human resource development',
      'Remittance facilitation'
    ],
    keyInitiatives: ['Pakistan Remittance Initiative', 'Overseas Employment', 'Diaspora Engagement'],
    established: '2008',
    minister: 'Mr. Chaudhry Salik Hussain',
  },
  {
    name: 'Ministry of Parliamentary Affairs',
    logo: '/logo.png',
    link: '/ministries/parliamentary',
    description: 'Legislative coordination and parliamentary procedures',
    functions: [
      'Legislative business coordination',
      'Parliamentary procedure guidance',
      'Inter-parliamentary relations',
      'Legislative drafting support'
    ],
    keyInitiatives: ['Parliamentary Reforms', 'Legislative Modernization', 'Democratic Strengthening'],
    established: '1947',
    minister: 'Mr. Azam Nazeer Tarar',
  },
  {
    name: 'Ministry of Planning, Development & Special Initiatives',
    logo: '/logo.png',
    link: '/ministries/planning',
    description: 'National development planning and project coordination',
    functions: [
      'National development planning',
      'Project evaluation and approval',
      'Economic coordination',
      'Special development initiatives'
    ],
    keyInitiatives: ['Vision 2025', 'CPEC Coordination', 'SDGs Implementation'],
    established: '1958',
    minister: 'Mr. Ahsan Iqbal',
  },
  {
    name: 'Ministry of Poverty Alleviation & Social Safety',
    logo: '/logo.png',
    link: '/ministries/poverty-alleviation',
    description: 'Social welfare and poverty reduction programs',
    functions: [
      'Poverty alleviation strategies',
      'Social safety net programs',
      'Microfinance development',
      'Social protection policies'
    ],
    keyInitiatives: ['Benazir Income Support Program', 'Ehsaas Program', 'Microfinance Support'],
    established: '2002',
    minister: 'Dr. Amjad Saqib',
  },
  {
    name: 'Ministry of Railways',
    logo: '/logo.png',
    link: '/ministries/railways',
    description: 'Railway infrastructure and transportation services',
    functions: [
      'Railway infrastructure development',
      'Train operations management',
      'Railway safety and security',
      'Freight and passenger services'
    ],
    keyInitiatives: ['ML-1 Upgradation', 'Railway Modernization', 'High-Speed Rail Planning'],
    established: '1947',
    minister: 'Mr. Khawaja Saad Rafique',
  },
  {
    name: 'Ministry of Religious Affairs & Interfaith Harmony',
    logo: '/logo.png',
    link: '/ministries/religious-affairs',
    description: 'Religious services and interfaith dialogue promotion',
    functions: [
      'Hajj and Umrah arrangements',
      'Religious minorities affairs',
      'Interfaith harmony promotion',
      'Religious education oversight'
    ],
    keyInitiatives: ['Hajj Policy Reform', 'Interfaith Dialogue', 'Religious Minority Rights'],
    established: '1947',
    minister: 'Mr. Chaudhry Salik Hussain',
  },
  {
    name: 'Ministry of Science & Technology',
    logo: '/logo.png',
    link: '/ministries/science-technology',
    description: 'Scientific research and technological innovation',
    functions: [
      'Science and technology policy',
      'Research and development promotion',
      'Innovation ecosystem development',
      'Technology transfer facilitation'
    ],
    keyInitiatives: ['Pakistan Science Foundation', 'Technology Parks', 'Research Grant Programs'],
    established: '1963',
    minister: 'Dr. Khalid Maqbool Siddiqui',
  },
  {
    name: 'Ministry of States & Frontier Regions (SAFRON)',
    logo: '/logo.png',
    link: '/ministries/safron',
    description: 'Tribal areas and frontier regions development',
    functions: [
      'Tribal areas development',
      'Border regions coordination',
      'Special area administration',
      'Regional development programs'
    ],
    keyInitiatives: ['FATA Development Program', 'Tribal Area Mainstreaming', 'Border Development'],
    established: '1971',
    minister: 'Mr. Amir Muqam',
  },
  {
    name: 'Ministry of Water Resources',
    logo: '/logo.png',
    link: '/ministries/water-resources',
    description: 'Water resource management and irrigation systems',
    functions: [
      'Water resource policy formulation',
      'Irrigation system management',
      'Dam construction oversight',
      'Water conservation programs'
    ],
    keyInitiatives: ['National Water Policy', 'Dam Construction Program', 'Water Conservation'],
    established: '2018',
    minister: 'Mr. Musadik Malik',
  }
];

type Ministry = typeof ministries[number];

export default function MinistrySlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut, // use the imported easing function
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-green-50 py-16 px-4 relative overflow-hidden">
    
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#004d40] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#004d40] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#004d40] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Government of Pakistan
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004d40] mb-4">
            Federal Ministries
            <span className="block text-lg md:text-xl font-normal text-slate-600 mt-2">
              Serving the Nation with Excellence - {ministries.length} Active Ministries
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#004d40] to-green-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Ministry Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="overflow-x-auto pb-4"
        >
          <div className="flex gap-6 snap-x snap-mandatory scroll-smooth pb-2" style={{ width: 'max-content' }}>
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="min-w-[320px] snap-start"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="block h-full group cursor-pointer" onClick={() => setSelectedMinistry(ministry)}>
                  <motion.div
                    className="h-full bg-white border-2 border-transparent rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-h-[300px]"
                    whileHover={{ 
                      y: -8,
                      borderColor: '#004d40',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#004d40]/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                    />
                    
                    {/* Ministry Logo */}
                    <div className="relative z-10 flex justify-center mb-4">
                      <motion.div
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f7fdfb] to-[#e6f7f2] p-2 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={ministry.logo}
                          alt={ministry.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </div>

                    {/* Ministry Info */}
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-center text-lg font-bold text-[#004d40] leading-tight group-hover:text-[#00332b] transition-colors duration-300">
                        {ministry.name}
                      </h3>

                      <p className="text-center text-sm text-slate-600 leading-relaxed">
                        {ministry.description}
                      </p>

                      {/* Minister Name */}
                      <div className="text-center">
                        <span className="text-xs text-slate-500">Current Minister:</span>
                        <p className="text-sm font-semibold text-[#004d40]">{ministry.minister}</p>
                      </div>

                      {/* Established Year */}
                      <div className="text-center">
                        <span className="inline-block bg-[#004d40]/10 text-[#004d40] px-3 py-1 rounded-full text-xs font-medium">
                          Est. {ministry.established}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      className="relative z-10 flex justify-center mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="inline-flex items-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#00332b] transition-colors duration-200">
                        View Details
                        <motion.svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: hoveredIndex === index ? 2 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </motion.div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400/10 to-transparent rounded-bl-full group-hover:from-green-400/20 transition-colors duration-300"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4 4 4m-4-8v12" />
            </svg>
            Scroll horizontally to explore all {ministries.length} ministries
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4 4 4m-4-8v12" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Detailed Modal */}
      {selectedMinistry && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMinistry(null)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMinistry(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7fdfb] to-[#e6f7f2] p-2">
                    <Image
                      src={selectedMinistry.logo}
                      alt={selectedMinistry.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#004d40]">{selectedMinistry.name}</h3>
                    <span className="text-sm text-slate-500">Established {selectedMinistry.established}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#004d40] mb-2">Description</h4>
                    <p className="text-slate-600">{selectedMinistry.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#004d40] mb-2">Current Minister</h4>
                    <p className="text-slate-600">{selectedMinistry.minister}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#004d40] mb-3">Key Functions</h4>
                  <ul className="space-y-2">
                    {selectedMinistry.functions.map((func, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{func}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#004d40] mb-3">Key Initiatives</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMinistry.keyInitiatives.map((initiative, index) => (
                      <span
                        key={index}
                        className="bg-[#004d40]/10 text-[#004d40] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {initiative}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={selectedMinistry.link}
                    className="inline-flex items-center gap-2 bg-[#004d40] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00332b] transition-colors"
                  >
                    Visit Ministry Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}