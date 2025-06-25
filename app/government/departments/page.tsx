'use client';

import { motion } from 'framer-motion';

 const divisions = [
  { name: 'Aviation Division', ministry: 'Ministry of Aviation' },
  { name: 'Cabinet Division', ministry: 'Prime Minister / Cabinet Secretariat' },
  { name: 'Capital Administration & Development Division', ministry: 'Ministry of Federal Education and Professional Training' },
  { name: 'Establishment Division', ministry: 'Prime Minister / Cabinet Secretariat' },
  { name: 'National Security Division', ministry: 'Prime Minister Office' },
  { name: 'Climate Change Division', ministry: 'Ministry of Climate Change & Environmental Coordination' },
  { name: 'Commerce Division', ministry: 'Ministry of Commerce & Textile' },
  { name: 'Textile Division', ministry: 'Ministry of Commerce & Textile' },
  { name: 'Communication Division', ministry: 'Ministry of Communications & Works' },
  { name: 'Defence Division', ministry: 'Ministry of Defence' },
  { name: 'Defence Production Division', ministry: 'Ministry of Defence Production' },
  { name: 'Power Division', ministry: 'Ministry of Energy (Power Division)' },
  { name: 'Petroleum Division', ministry: 'Ministry of Energy (Petroleum Division)' },
  { name: 'Federal Education and Professional Training Division', ministry: 'Ministry of Federal Education & Professional Training' },
  { name: 'Finance Division', ministry: 'Ministry of Finance & Revenue' },
  { name: 'Economic Affairs Division', ministry: 'Ministry of Economic Affairs' },
  { name: 'Revenue Division', ministry: 'Ministry of Finance & Revenue' },
  { name: 'Foreign Affairs Division', ministry: 'Ministry of Foreign Affairs' },
  { name: 'Housing and Works Division', ministry: 'Ministry of Housing & Works' },
  { name: 'Human Rights Division', ministry: 'Ministry of Human Rights' },
  { name: 'Industries and Production Division', ministry: 'Ministry of Industries & Production' },
  { name: 'Information & Broadcasting Division', ministry: 'Ministry of Information & Broadcasting' },
  { name: 'National History and Literary Heritage Division', ministry: 'Merged into Ministry of Information & Broadcasting' },
  { name: 'Information Technology and Telecommunication Division', ministry: 'Ministry of Information Technology & Telecommunication' },
  { name: 'Interior Division', ministry: 'Ministry of Interior' },
  { name: 'Inter Provincial Coordination Division', ministry: 'Ministry of Inter-Provincial Coordination' },
  { name: 'Kashmir Affairs and Gilgit Baltistan Division', ministry: 'Ministry of Kashmir Affairs & Gilgit-Baltistan' },
  { name: 'Law and Justice Division', ministry: 'Ministry of Law & Justice' },
  { name: 'Narcotics Control Division', ministry: 'Ministry of Narcotics Control' },
  { name: 'National Food Security and Research Division', ministry: 'Ministry of National Food Security & Research' },
  { name: 'National Health Services, Regulation and Coordination Division', ministry: 'Ministry of National Health Services, Regulations & Coordination' },
  { name: 'Overseas Pakistanis and Human Resource Development Division', ministry: 'Ministry of Overseas Pakistanis & Human Resource Development' },
  { name: 'Parliamentary Affairs Division', ministry: 'Ministry of Parliamentary Affairs' },
  { name: 'Planning Development and Reform Division', ministry: 'Ministry of Planning, Development & Special Initiatives' },
  { name: 'Port and Shipping Division', ministry: 'Ministry of Maritime Affairs' },
  { name: 'Postal Services Division', ministry: 'Ministry of Communications & Works' },
  { name: 'Privatization Division', ministry: 'Ministry of Privatization' },
  { name: 'Railways Division', ministry: 'Ministry of Railways' },
  { name: 'Religious Affairs and Inter-Faith Harmony Division', ministry: 'Ministry of Religious Affairs & Interfaith Harmony' },
  { name: 'Science and Technology Division', ministry: 'Ministry of Science & Technology' },
  { name: 'States and Frontier Regions Division', ministry: 'Ministry of States & Frontier Regions (SAFRON)' },
  { name: 'Statistics Division', ministry: 'Pakistan Bureau of Statistics / Planning Ministry' },
  { name: 'Water Resources Division', ministry: 'Ministry of Water Resources' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function DepartmentsPage() {
  // Group divisions by ministry
  const grouped = divisions.reduce((acc, division) => {
    if (!acc[division.ministry]) acc[division.ministry] = [];
    acc[division.ministry].push(division.name);
    return acc;
  }, {} as Record<string, string[]>);


  return (
    <section className="w-screen mx-auto px-4 bg-slate-100 py-12">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-4xl  font-bold text-green-700 mb-8 text-center"
      >
        Government Divisions & Departments
      </motion.h1>

      <div className="grid gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(grouped).map(([ministry, divisionList], index) => (
          <motion.div
            key={ministry}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-green-100"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-3">{ministry}</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {divisionList.map((division, i) => (
                <li key={i} className="hover:text-green-600 transition-colors">
                  {division}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
