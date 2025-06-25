'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Globe2, Wifi,  Ruler, User, User2, 
  MapPin, TrendingUp, GraduationCap, Building2, 
  Smartphone, Calendar, DollarSign, Home, Factory,
  Heart, Zap,  Shield, Mountain, Wheat,
  Award, Baby, Church, FileText, Briefcase, Car
} from 'lucide-react';

// Official PBS Census 2023 Data
const censusStats = [
  {
    icon: Users,
    label: 'Total Population (2023 Census)',
    value: '241,499,431',
    source: 'PBS Digital Census 2023',
    description: 'Excludes Gilgit-Baltistan & AJK'
  },
  {
    icon: User,
    label: 'Male Population',
    value: '51.4%',
    source: 'PBS Census 2023',
    description: 'Male demographic ratio'
  },
  {
    icon: User2,
    label: 'Female Population',
    value: '48.6%',
    source: 'PBS Census 2023',
    description: 'Female demographic ratio'
  },
  {
    icon: Home,
    label: 'Total Households',
    value: '40.8 Million',
    source: 'PBS Census 2023',
    description: 'Number of households counted'
  },
  {
    icon: TrendingUp,
    label: 'Population Growth Rate',
    value: '2.55%',
    source: 'PBS Census 2017-2023',
    description: 'Annual average growth rate'
  },
  {
    icon: Calendar,
    label: 'Average Household Size',
    value: '5.92 persons',
    source: 'PBS Census 2023',
    description: 'Persons per household'
  }
];

// Provincial Distribution - PBS Official
const provincialStats = [
  {
    icon: MapPin,
    label: 'Punjab Population',
    value: '127.7 Million',
    source: 'PBS Census 2023',
    description: '52.9% of total population'
  },
  {
    icon: MapPin,
    label: 'Sindh Population',
    value: '55.7 Million',
    source: 'PBS Census 2023',
    description: '23.1% of total population'
  },
  {
    icon: MapPin,
    label: 'Khyber Pakhtunkhwa',
    value: '40.9 Million',
    source: 'PBS Census 2023',
    description: '16.9% of total population'
  },
  {
    icon: MapPin,
    label: 'Balochistan Population',
    value: '14.9 Million',
    source: 'PBS Census 2023',
    description: '6.2% of total population'
  },
  {
    icon: Building2,
    label: 'Islamabad (ICT)',
    value: '2.4 Million',
    source: 'PBS Census 2023',
    description: 'Federal capital territory'
  },
  {
    icon: Mountain,
    label: 'Total Districts',
    value: '160+',
    source: 'PBS Administrative',
    description: 'District-level divisions'
  }
];

// Religious Demographics - PBS 2017 Official
const religiousStats = [
  {
    icon: Church,
    label: 'Muslim Population',
    value: '96.47%',
    source: 'PBS Religious Data 2021',
    description: 'Majority religious community'
  },
  {
    icon: Church,
    label: 'Hindu Population',
    value: '2.14%',
    source: 'PBS Religious Data 2021',
    description: 'Largest minority community'
  },
  {
    icon: Church,
    label: 'Christian Population',
    value: '1.27%',
    source: 'PBS Religious Data 2021',
    description: 'Second largest minority'
  },
  {
    icon: Church,
    label: 'Ahmadi Population',
    value: '0.09%',
    source: 'PBS Religious Data 2021',
    description: 'Religious minority group'
  },
  {
    icon: Church,
    label: 'Other Religions',
    value: '0.02%',
    source: 'PBS Religious Data 2021',
    description: 'Various minority religions'
  },
  {
    icon: Award,
    label: 'Religious Diversity Index',
    value: 'Moderate',
    source: 'PBS Analysis',
    description: 'Multi-religious society'
  }
];

// Geographic & Infrastructure - Official Sources
const geographicStats = [
  {
    icon: Ruler,
    label: 'Total Area',
    value: '881,913 km²',
    source: 'Survey of Pakistan',
    description: '9th largest country by area'
  },
  {
    icon: Globe2,
    label: 'Population Density',
    value: '287 per km²',
    source: 'PBS Calculation 2023',
    description: 'Based on 2023 census'
  },
  {
    icon: Mountain,
    label: 'Provinces',
    value: '4 + ICT',
    source: 'Constitution of Pakistan',
    description: 'Federal administrative units'
  },
  {
    icon: Building2,
    label: 'Urban Population %',
    value: '37.4%',
    source: 'PBS Urban Classification',
    description: 'People in urban areas'
  },
  {
    icon: Home,
    label: 'Rural Population %',
    value: '62.6%',
    source: 'PBS Rural Classification',
    description: 'People in rural areas'
  },
  {
    icon: Car,
    label: 'Major Highways',
    value: '12,000+ km',
    source: 'National Highway Authority',
    description: 'National highway network'
  }
];

// Economic Indicators - Government Sources
const economicStats = [
  {
    icon: DollarSign,
    label: 'GDP Growth Rate',
    value: '2.4%',
    source: 'PBS Economic Survey 2024',
    description: 'Real GDP growth FY2024'
  },
  {
    icon: Factory,
    label: 'Industrial Growth',
    value: '-0.17%',
    source: 'PBS Q1 2023-24',
    description: 'Manufacturing sector performance'
  },
  {
    icon: Briefcase,
    label: 'Services Sector Share',
    value: '61.2%',
    source: 'PBS Economic Data',
    description: 'Contribution to GDP'
  },
  {
    icon: Wheat,
    label: 'Agriculture Share',
    value: '18.9%',
    source: 'PBS Economic Survey',
    description: 'Agricultural GDP contribution'
  },
  {
    icon: TrendingUp,
    label: 'Inflation Rate (SPI)',
    value: '308.86',
    source: 'PBS Weekly SPI 2025',
    description: 'Sensitive Price Index'
  },
  {
    icon: FileText,
    label: 'Export Growth',
    value: 'Variable',
    source: 'PBS Trade Statistics',
    description: 'Quarterly trade reports'
  }
];

// Social Indicators - Official Data
const socialStats = [
  {
    icon: GraduationCap,
    label: 'Literacy Rate',
    value: '62.8%',
    source: 'Pakistan Social & Living Standards',
    description: 'Population 10+ years'
  },
  {
    icon: Heart,
    label: 'Life Expectancy',
    value: '67.3 years',
    source: 'Pakistan Demographic Survey',
    description: 'Average at birth'
  },
  {
    icon: Baby,
    label: 'Birth Rate',
    value: '28.2 per 1000',
    source: 'Pakistan Demographic Survey',
    description: 'Annual birth rate'
  },
  {
    icon: Smartphone,
    label: 'Mobile Penetration',
    value: '88%',
    source: 'Pakistan Telecom Authority',
    description: 'Mobile phone usage'
  },
  {
    icon: Wifi,
    label: 'Internet Users',
    value: '54.7%',
    source: 'Pakistan Telecom Authority',
    description: 'Internet penetration rate'
  },
  {
    icon: Zap,
    label: 'Electricity Access',
    value: '95%+',
    source: 'Ministry of Energy',
    description: 'Household electricity access'
  }
];

const categories = [
  { id: 'census', label: 'Census 2023', stats: censusStats },
  { id: 'provincial', label: 'Provincial Data', stats: provincialStats },
  { id: 'religious', label: 'Religious Demographics', stats: religiousStats },
  { id: 'geographic', label: 'Geography', stats: geographicStats },
  { id: 'economic', label: 'Economy', stats: economicStats },
  { id: 'social', label: 'Social Indicators', stats: socialStats }
];

export default function OfficialPakistanStats() {
  const [activeCategory, setActiveCategory] = useState('census');
  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="bg-white py-16 px-4 min-h-screen">
       
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
            <div className="w-16 h-1 bg-green-600 mr-3"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-800">
              Official Pakistan Statistics
            </h2>
            <div className="w-16 h-1 bg-green-600 ml-3"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            Authenticated data from Pakistan Bureau of Statistics (PBS) and other official government sources
          </p>
          <p className="text-sm text-green-700 font-medium">
            Source: Pakistan Bureau of Statistics (PBS) • Government of Pakistan
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCategory?.stats?.map((stat, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 25px rgba(0,100,0,0.15)"
              }}
              className="bg-white border-2 border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  Official
                </span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-green-800">
                  {stat.value}
                </h3>
                <p className="font-semibold text-gray-800 text-base">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
                <div className="pt-2 border-t border-green-100">
                  <p className="text-xs text-green-600 font-medium">
                    Source: {stat.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Government Disclaimer */}
        <motion.div 
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
        </motion.div>
      </div>
    </section>
  );
}