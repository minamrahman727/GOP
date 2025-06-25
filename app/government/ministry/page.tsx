'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';


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

// === Animation Config ===
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  }),
};

type Ministry = {
  name: string;
  logo: string;
  link: string;
  description: string;
  functions: string[];
  keyInitiatives: string[];
  established: string;
  minister: string;
};


export default function MinistryPage() {
  const [selected, setSelected] = useState<Ministry | null>(null);

  return (
    <section className="py-10 px-4 w-full mx-auto bg-slate-100">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Federal Ministries of Pakistan</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ministries.map((ministry, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            className="bg-white border p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelected(ministry)}
          >
            <div className="flex items-center gap-4">
              <Image
                src={ministry.logo}
                alt={ministry.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-800">{ministry.name}</h3>
                <p className="text-sm text-gray-600">{ministry.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-3xl rounded-xl p-6 relative shadow-lg"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <Image src={selected.logo} alt={selected.name} width={56} height={56} />
              <div>
                <h2 className="text-2xl font-bold text-green-800">{selected.name}</h2>
                <p className="text-sm text-gray-600">{selected.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Functions</h3>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {selected.functions.map((fn: string, i: number) => <li key={i}>{fn}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Key Initiatives</h3>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {selected.keyInitiatives.map((ki: string, i: number) => <li key={i}>{ki}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              <p><strong>Established:</strong> {selected.established}</p>
              <p><strong>Minister:</strong> {selected.minister}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
