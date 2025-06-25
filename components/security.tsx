'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Shield, Users, MapPin, Calendar, Award } from 'lucide-react';

const forces = [
    {
        name: 'Pakistan Army',
        logo: '/logo/security/army.png',
        link: 'https://www.pakistanarmy.gov.pk/',
        description: 'Primary land warfare branch of the Armed Forces of Pakistan.',
        detailedInfo: {
            established: '1947',
            strength: '650,000+ active personnel',
            headquarters: 'Rawalpindi',
            role: 'Land-based military operations, border security, counter-terrorism, disaster relief',
            motto: 'Faith, Unity, Discipline',
            branches: ['Infantry', 'Armoured Corps', 'Artillery', 'Engineers', 'Signals']
        },
        category: 'Armed Forces'
    },
    {
        name: 'Pakistan Navy',
        logo: '/logo/security/navy.png',
        link: 'https://www.paknavy.gov.pk/',
        description: 'Naval warfare branch responsible for maritime defense.',
        detailedInfo: {
            established: '1947',
            strength: '25,000+ personnel',
            headquarters: 'Islamabad',
            role: 'Maritime security, coastal defense, sea lane protection, anti-piracy operations',
            motto: 'Unity, Work, Progress',
            branches: ['Surface Fleet', 'Submarine Force', 'Naval Aviation', 'Marines']
        },
        category: 'Armed Forces'
    },
    {
        name: 'Pakistan Air Force (PAF)',
        logo: '/logo/security/PAF.png',
        link: 'https://www.paf.gov.pk/',
        description: 'Responsible for aerial defense and air superiority.',
        detailedInfo: {
            established: '1947',
            strength: '70,000+ personnel',
            headquarters: 'Islamabad',
            role: 'Air defense, close air support, strategic bombing, transport operations',
            motto: 'Faith, Unity, Discipline',
            branches: ['Fighter Command', 'Transport Command', 'Training Command']
        },
        category: 'Armed Forces'
    },
    {
        name: 'Inter-Services Public Relations (ISPR)',
        logo: '/logo/security/ispr.jpg',
        link: 'https://ispr.gov.pk/',
        description: 'Media wing of Pakistan Armed Forces.',
        detailedInfo: {
            established: '1949',
            strength: 'Classified',
            headquarters: 'Rawalpindi',
            role: 'Military media relations, public information, strategic communication',
            motto: 'Truth is our Strength',
            branches: ['Press Relations', 'Publications', 'Audio Visual', 'Digital Media']
        },
        category: 'Intelligence'
    },
    {
        name: 'Inter-Services Intelligence (ISI)',
        logo: '/logo/security/isi.png',
        link: 'https://mod.gov.pk/',
        description: 'Top military intelligence agency of Pakistan.',
        detailedInfo: {
            established: '1948',
            strength: 'Classified',
            headquarters: 'Islamabad',
            role: 'Military intelligence, counter-intelligence, external intelligence operations',
            motto: 'Faith, Unity, Discipline',
            branches: ['Internal Wing', 'External Wing', 'Counter Intelligence', 'Technical Wing']
        },
        category: 'Intelligence'
    },
    {
        name: 'Intelligence Bureau (IB)',
        logo: '/logo.png',
        link: 'https://ib.gov.pk/',
        description: "Pakistan's civilian domestic intelligence agency.",
        detailedInfo: {
            established: '1947',
            strength: 'Classified',
            headquarters: 'Islamabad',
            role: 'Internal security, counter-intelligence, counter-terrorism, VIP protection',
            motto: 'Vigilance is our Duty',
            branches: ['Counter Intelligence', 'Internal Security', 'Technical Wing', 'Analysis Wing']
        },
        category: 'Intelligence'
    },
    {
        name: 'Punjab Police',
        logo: '/logo/security/PP.png',
        link: 'https://punjabpolice.gov.pk/',
        description: 'Law enforcement agency serving Punjab province.',
        detailedInfo: {
            established: '1861',
            strength: '190,000+ personnel',
            headquarters: 'Lahore',
            role: 'Law enforcement, crime prevention, traffic management, public order',
            motto: 'Service with Honor',
            branches: ['Investigation', 'Operations', 'Traffic', 'Elite Force', 'CTD']
        },
        category: 'Provincial Police'
    },
    {
        name: 'Sindh Police',
        logo: '/logo/security/ps.png',
        link: 'https://sindhpolice.gov.pk/',
        description: 'Responsible for security & crime control in Sindh.',
        detailedInfo: {
            established: '1843',
            strength: '120,000+ personnel',
            headquarters: 'Karachi',
            role: 'Urban policing, crime investigation, counter-terrorism, coastal security',
            motto: 'Serve and Protect',
            branches: ['CID', 'Traffic Police', 'Special Security Unit', 'Anti-Terrorism Force']
        },
        category: 'Provincial Police'
    },
    {
        name: 'KPK Police',
        logo: '/logo/security/kpp.png',
        link: 'https://kppolice.gov.pk/',
        description: 'Maintains law & order in Khyber Pakhtunkhwa.',
        detailedInfo: {
            established: '1901',
            strength: '80,000+ personnel',
            headquarters: 'Peshawar',
            role: 'Border security, counter-terrorism, tribal area policing, narcotics control',
            motto: 'Courage and Service',
            branches: ['Elite Force', 'Counter Terrorism', 'Border Police', 'Investigation']
        },
        category: 'Provincial Police'
    },
    {
        name: 'Balochistan Police',
        logo: '/logo/security/bp.png',
        link: 'https://balochistanpolice.gov.pk/',
        description: 'Provincial law enforcement agency of Balochistan.',
        detailedInfo: {
            established: '1947',
            strength: '35,000+ personnel',
            headquarters: 'Quetta',
            role: 'Desert policing, border security, mineral resource protection, counter-insurgency',
            motto: 'Integrity and Service',
            branches: ['Counter Terrorism', 'Highway Police', 'Levies Force', 'Investigation']
        },
        category: 'Provincial Police'
    },
    {
        name: 'Islamabad Police',
        logo: '/logo/security/icp.jpg',
        link: 'https://islamabadpolice.gov.pk/',
        description: 'Capital Territory Police of Islamabad.',
        detailedInfo: {
            established: '1981',
            strength: '15,000+ personnel',
            headquarters: 'Islamabad',
            role: 'VIP security, diplomatic protection, capital policing, counter-terrorism',
            motto: 'Excellence in Service',
            branches: ['Eagle Squad', 'Dolphin Force', 'Special Branch', 'Traffic Police']
        },
        category: 'Provincial Police'
    },
    {
        name: 'Pakistan Rangers (Sindh & Punjab)',
        logo: '/logo/security/pkran.png',
        link: 'https://pakistanrangers.punjab.gov.pk/',
        description: 'Paramilitary force responsible for internal security.',
        detailedInfo: {
            established: '1959',
            strength: '25,000+ personnel',
            headquarters: 'Karachi (Sindh), Lahore (Punjab)',
            role: 'Border guarding, anti-smuggling, counter-terrorism, crowd control',
            motto: 'Always Ready',
            branches: ['Sindh Rangers', 'Punjab Rangers', 'Anti-Terrorism Force', 'Intelligence Wing']
        },
        category: 'Paramilitary'
    },
    {
        name: 'Frontier Corps',
        logo: '/logo/security/fc.png',
        link: 'https://fc.gov.pk/',
        description: 'Frontier Corps for border and tribal area protection.',
        detailedInfo: {
            established: '1907',
            strength: '80,000+ personnel',
            headquarters: 'Peshawar (KP), Quetta (Balochistan)',
            role: 'Border security, counter-insurgency, tribal area operations, anti-narcotics',
            motto: 'Duty Before Self',
            branches: ['FC KP', 'FC Balochistan', 'Special Operations', 'Intelligence Wing']
        },
        category: 'Paramilitary'
    },
    {
        name: 'FIA (Federal Investigation Agency)',
        logo: '/logo/security/fia.png',
        link: 'https://fia.gov.pk/',
        description: 'Federal criminal investigation & cybercrime agency.',
        detailedInfo: {
            established: '1975',
            strength: '15,000+ personnel',
            headquarters: 'Islamabad',
            role: 'Federal crimes investigation, cybercrime, immigration, anti-corruption',
            motto: 'Truth, Justice, Service',
            branches: ['Cybercrime Wing', 'Economic Crime', 'Immigration', 'Anti-Corruption']
        },
        category: 'Federal Agencies'
    },
    {
        name: 'CTD (Counter Terrorism Department)',
        logo: '/logo/security/ctd.png',
        link: '#',
        description: 'Fights terrorism and extremism within provinces.',
        detailedInfo: {
            established: '2016',
            strength: '10,000+ personnel',
            headquarters: 'Provincial Capitals',
            role: 'Counter-terrorism operations, intelligence gathering, bomb disposal, prevention',
            motto: 'Courage Against Terror',
            branches: ['Operations Wing', 'Intelligence Wing', 'Bomb Disposal', 'Training Wing']
        },
        category: 'Specialized Units'
    },
    {
        name: 'ASF (Airport Security Force)',
        logo: '/logo/security/asf.png',
        link: 'https://asf.gov.pk/',
        description: 'Ensures safety of airports and aviation infrastructure.',
        detailedInfo: {
            established: '1976',
            strength: '12,000+ personnel',
            headquarters: 'Karachi',
            role: 'Airport security, aviation infrastructure protection, passenger screening',
            motto: 'Vigilance and Service',
            branches: ['Terminal Security', 'Cargo Security', 'Intelligence Wing', 'Training Wing']
        },
        category: 'Specialized Units'
    },
    {
        name: 'Rescue 1122',
        logo: '/logo/security/1122.jpg',
        link: 'https://1122.gop.pk/',
        description: 'Emergency response and rescue service.',
        detailedInfo: {
            established: '2004',
            strength: '25,000+ personnel',
            headquarters: 'Lahore',
            role: 'Emergency medical services, fire rescue, disaster response, ambulance services',
            motto: 'Serve Humanity',
            branches: ['Emergency Medical', 'Fire Rescue', 'Disaster Response', 'Community Safety']
        },
        category: 'Emergency Services'
    },
    {
        name: 'Pakistan Coast Guards',
        logo: '/logo/security/coast.png',
        link: 'https://www.pakistancoastguards.gov.pk/',
        description: 'Emergency response service within the maritime borders.',
        detailedInfo: {
            established: '1972',
            strength: '2,000+ personnel',
            headquarters: 'Karachi',
            role: 'Maritime law enforcement, anti-smuggling, search and rescue, fisheries protection',
            motto: 'Guardians of the Sea',
            branches: ['Maritime Security', 'Search & Rescue', 'Anti-Smuggling', 'Environmental Protection']
        },
        category: 'Maritime Security'
    }
];

const categories = ['All', 'Armed Forces', 'Intelligence', 'Provincial Police', 'Paramilitary', 'Federal Agencies', 'Specialized Units', 'Emergency Services', 'Maritime Security'];

export default function SecurityForcesSlider() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredForces = selectedCategory === 'All' 
    ? forces 
    : forces.filter(force => force.category === selectedCategory);



const toggleCardExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
};

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-[#004d40] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#004d40]">
              Pakistan&apos;s Security 
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive overview of Pakistan&apos;s armed forces, intelligence agencies, law enforcement, 
            and emergency services working together to ensure national security and public safety.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#004d40] text-white shadow-lg scale-105'
                  : 'bg-white text-[#004d40] border border-[#004d40] hover:bg-[#004d40] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Forces Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredForces.map((force, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                expandedCard === index ? 'col-span-full lg:col-span-2' : ''
              }`}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={force.logo}
                      alt={force.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#004d40] mb-1">{force.name}</h3>
                    <span className="inline-block px-2 py-1 bg-[#e8f5e8] text-[#004d40] text-xs rounded-full">
                      {force.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {force.description}
                </p>

                {/* Expanded Details */}
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 mb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#004d40]" />
                        <div>
                          <span className="text-xs text-gray-500 block">Established</span>
                          <span className="font-semibold text-gray-800">{force.detailedInfo.established}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-[#004d40]" />
                        <div>
                          <span className="text-xs text-gray-500 block">Strength</span>
                          <span className="font-semibold text-gray-800">{force.detailedInfo.strength}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[#004d40]" />
                        <div>
                          <span className="text-xs text-gray-500 block">Headquarters</span>
                          <span className="font-semibold text-gray-800">{force.detailedInfo.headquarters}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-[#004d40]" />
                        <div>
                          <span className="text-xs text-gray-500 block">Motto</span>
                          <span className="font-semibold text-gray-800 italic">&quot;{force.detailedInfo.motto}&quot;</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-gray-500 block mb-2">Primary Role</span>
                      <p className="text-sm text-gray-700 leading-relaxed">{force.detailedInfo.role}</p>
                    </div>

                    <div>
                      <span className="text-xs text-gray-500 block mb-2">Key Branches/Wings</span>
                      <div className="flex flex-wrap gap-2">
                        {force.detailedInfo.branches.map((branch, branchIndex) => (
                          <span
                            key={branchIndex}
                            className="px-2 py-1 bg-[#f0f9f0] text-[#004d40] text-xs rounded-md"
                          >
                            {branch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleCardExpansion(index)}
                    className="flex-1 px-4 py-2 bg-[#004d40] text-white rounded-lg hover:bg-[#003d33] transition-colors duration-200 text-sm font-medium"
                  >
                    {expandedCard === index ? 'Show Less' : 'Learn More'}
                  </button>
                  
                  {force.link !== '#' && (
                    <a
                      href={force.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#004d40] text-[#004d40] rounded-lg hover:bg-[#004d40] hover:text-white transition-all duration-200 text-sm font-medium flex items-center space-x-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-[#004d40] text-center mb-8">Security Forces Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#004d40] mb-2">{forces.length}+</div>
              <div className="text-gray-600">Total Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#004d40] mb-2">1.2M+</div>
              <div className="text-gray-600">Combined Personnel</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#004d40] mb-2">182+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#004d40] mb-2">24/7</div>
              <div className="text-gray-600">National Protection</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}