'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, MapPin, Building2, Ruler,  
  ExternalLink,  Award,  Calendar
} from 'lucide-react';

const provinces = [
  {
    name: 'Punjab',
    logo: '/logo/punjab.png',
    link: 'https://www.punjab.gov.pk/',
    capital: 'Lahore',
    population: '127.7 Million',
    populationPercent: '52.9%',
    area: '205,344 km²',
    density: '622 per km²',
    urbanization: '36.4%',
    majorCities: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala'],
    established: '1947',
    description: 'Most populous province, agricultural heartland',
    highlights: ['Largest population', 'Agricultural hub', 'Industrial center']
  },
  {
    name: 'Sindh',
    logo: '/logo/sindh.png',
    link: 'https://www.sindh.gov.pk/',
    capital: 'Karachi',
    population: '55.7 Million',
    populationPercent: '23.1%',
    area: '140,914 km²',
    density: '395 per km²',
    urbanization: '54.0%',
    majorCities: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah'],
    established: '1947',
    description: 'Economic powerhouse, most urbanized province',
    highlights: ['Financial hub', 'Highest urbanization', 'Port access']
  },
  {
    name: 'Khyber Pakhtunkhwa',
    logo: '/logo/kpk.png',
    link: 'https://kp.gov.pk/',
    capital: 'Peshawar',
    population: '40.9 Million',
    populationPercent: '16.9%',
    area: '101,741 km²',
    density: '402 per km²',
    urbanization: '18.8%',
    majorCities: ['Peshawar', 'Mardan', 'Mingora', 'Kohat', 'Bannu'],
    established: '1901 (NWFP), 2010 (renamed)',
    description: 'Northwestern frontier, rich cultural heritage',
    highlights: ['Cultural diversity', 'Historic region', 'Strategic location']
  },
  {
    name: 'Balochistan',
    logo: '/logo/baluch.png',
    link: 'https://balochistan.gov.pk/',
    capital: 'Quetta',
    population: '14.9 Million',
    populationPercent: '6.2%',
    area: '347,190 km²',
    density: '43 per km²',
    urbanization: '27.5%',
    majorCities: ['Quetta', 'Gwadar', 'Turbat', 'Khuzdar', 'Sibi'],
    established: '1947',
    description: 'Largest by area, rich in natural resources',
    highlights: ['Largest province', 'Natural resources', 'CPEC gateway']
  },
  {
    name: 'Islamabad Capital Territory',
    logo: '/logo.png',
    link: '/provinces/islamabad',
    capital: 'Islamabad',
    population: '2.4 Million',
    populationPercent: '1.0%',
    area: '906 km²',
    density: '2,648 per km²',
    urbanization: '100%',
    majorCities: ['Islamabad', 'Rawalpindi (adjacent)'],
    established: '1960',
    description: 'Federal capital, planned city',
    highlights: ['Federal capital', 'Planned city', 'Government center']
  },
  {
    name: 'Gilgit-Baltistan',
    logo: '/logo/gilgit.png',
    link: 'https://gilgitbaltistan.gov.pk/',
    capital: 'Gilgit',
    population: '1.5 Million',
    populationPercent: '0.6%',
    area: '72,971 km²',
    density: '21 per km²',
    urbanization: '16.2%',
    majorCities: ['Gilgit', 'Skardu', 'Hunza', 'Ghanche'],
    established: '1947 (Northern Areas), 2009 (GB)',
    description: 'Northern territories, mountainous region',
    highlights: ['Mountain tourism', 'Strategic location', 'Natural beauty']
  },
  {
    name: 'Azad Jammu & Kashmir',
    logo: '/logo/AJK.png',
    link: 'https://ajk.gov.pk/',
    capital: 'Muzaffarabad',
    population: '4.0 Million',
    populationPercent: '1.7%',
    area: '13,297 km²',
    density: '304 per km²',
    urbanization: '15.2%',
    majorCities: ['Muzaffarabad', 'Mirpur', 'Kotli', 'Rawalakot'],
    established: '1947',
    description: 'Administered territory, scenic valleys',
    highlights: ['Autonomous region', 'Scenic beauty', 'Diaspora connections']
  },
];


type Province = typeof provinces[number];

export default function EnhancedProvinceSlider() {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detailed'

  return (
    <section className="bg-white py-16 px-4">
      
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Provinces & Territories of Pakistan
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Explore Pakistan&apos;s diverse provinces and territories with official census data and key statistics
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'grid' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'detailed' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50'
              }`}
            >
              Detailed View
            </button>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {provinces.map((province, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white  text-green-600  rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedProvince(province)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white text-green-600 rounded-full flex items-center justify-center shadow-md">
                    <Image
                      src={province.logo}
                      alt={province.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{province.name}</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-center text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {province.population}
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {province.capital}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1 justify-center">
                    {province.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-white bg-opacity-70 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Detailed View */}
        {viewMode === 'detailed' && (
          <div className="space-y-8">
            {provinces.map((province, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Province Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mr-4">
                        <Image
                          src={province.logo}
                          alt={province.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-800">{province.name}</h3>
                        <p className="text-green-600 text-sm">Capital: {province.capital}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{province.description}</p>
                    <a 
                      href={province.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Visit Official Website
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>

                  {/* Statistics */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <Users className="w-5 h-5 text-green-600 mb-1" />
                        <div className="text-sm font-semibold text-green-800">{province.population}</div>
                        <div className="text-xs text-green-600">Population</div>
                        <div className="text-xs text-gray-500">{province.populationPercent} of total</div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <Ruler className="w-5 h-5 text-blue-600 mb-1" />
                        <div className="text-sm font-semibold text-blue-800">{province.area}</div>
                        <div className="text-xs text-blue-600">Total Area</div>
                        <div className="text-xs text-gray-500">{province.density}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <Building2 className="w-5 h-5 text-purple-600 mb-1" />
                        <div className="text-sm font-semibold text-purple-800">{province.urbanization}</div>
                        <div className="text-xs text-purple-600">Urbanization</div>
                        <div className="text-xs text-gray-500">Urban population</div>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <Calendar className="w-5 h-5 text-orange-600 mb-1" />
                        <div className="text-sm font-semibold text-orange-800">{province.established}</div>
                        <div className="text-xs text-orange-600">Established</div>
                        <div className="text-xs text-gray-500">Formation year</div>
                      </div>
                    </div>

                    {/* Major Cities */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Major Cities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {province.majorCities.map((city, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {province.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal for Selected Province */}
        {selectedProvince && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProvince(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Image
                    src={selectedProvince.logo}
                    alt={selectedProvince.name}
                    width={48}
                    height={48}
                    className="object-contain mr-3"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">{selectedProvince.name}</h3>
                    <p className="text-green-600">Capital: {selectedProvince.capital}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProvince(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedProvince.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Demographics</h4>
                  <p className="text-sm text-green-700">Population: {selectedProvince.population}</p>
                  <p className="text-sm text-green-700">Share: {selectedProvince.populationPercent}</p>
                  <p className="text-sm text-green-700">Density: {selectedProvince.density}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Geography</h4>
                  <p className="text-sm text-blue-700">Area: {selectedProvince.area}</p>
                  <p className="text-sm text-blue-700">Urbanization: {selectedProvince.urbanization}</p>
                  <p className="text-sm text-blue-700">Established: {selectedProvince.established}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Major Cities</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProvince.majorCities.map((city, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Key Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProvince.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={selectedProvince.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Visit Official Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>
        )}

        {/* Data Source Footer */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  Official Government Data
                </h3>
                <p className="text-green-700 leading-relaxed">
                  All statistics presented here are sourced from official Pakistani government agencies including 
                  Pakistan Bureau of Statistics (PBS), the official agency responsible for collection, compilation and dissemination of statistical information. 
                  The 2023 census recorded a total population of 241,499,431 and represents Pakistan&apos;s first digital census.
                </p>
                <p className="text-sm text-green-600 mt-3 font-medium">
                  Pakistan Bureau of Statistics • Statistics House, 21-Mauve Area, G-9/1, Islamabad
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}