'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Crown, Users, ExternalLink, MapPin } from 'lucide-react';

export default function LeadersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const leaders = [
    {
      name: "Asif Ali Zardari",
      title: "President of Pakistan",
      image: "/leaders/zardari.jpg",
      description: "The President is the ceremonial head of state and represents the unity of the Islamic Republic of Pakistan. He performs duties as outlined in the Constitution and is elected by the members of the Parliament and Provincial Assemblies.",
      link: "https://president.gov.pk",
      icon: Crown,
      gradient: "from-emerald-600 to-teal-700",
      accentColor: "emerald"
    },
    {
      name: "Shehbaz Sharif",
      title: "Prime Minister of Pakistan",
      image: "/leaders/shebaz.jpg",
      description: "The Prime Minister is the chief executive of Pakistan, responsible for running the government, policy making, and administration of affairs. He leads the cabinet and is elected by the National Assembly.",
      link: "https://pmo.gov.pk",
      icon: Users,
      gradient: "from-green-600 to-emerald-700",
      accentColor: "green"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50 py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-6 border border-emerald-100">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-medium text-sm">Islamic Republic of Pakistan</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-green-800 bg-clip-text text-transparent mb-4">
            Leaders of Pakistan
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Leaders Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {leaders.map((leader) => {
            const IconComponent = leader.icon;
            
            return (
              <motion.div
                key={leader.name}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/50">
                  {/* Icon Badge */}
                  <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Profile Image */}
                  <div className="text-center mb-6 mt-4">
                    <motion.div
                      variants={imageVariants}
                      whileHover="hover"
                      className="relative inline-block"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} rounded-full blur-md opacity-30`}></div>
                      <Image
                        src={leader.image}
                        alt={leader.title}
                        width={180}
                        height={180}
                        className="relative mx-auto rounded-full object-cover border-4 border-white shadow-xl"
                      />
                      
                      {/* Decorative Ring */}
                      <div className={`absolute inset-0 rounded-full border-2 border-${leader.accentColor}-300 animate-pulse`}></div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {leader.name}
                      </h3>
                      <p className={`text-${leader.accentColor}-700 font-semibold bg-${leader.accentColor}-50 px-4 py-1 rounded-full text-sm inline-block`}>
                        {leader.title}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {leader.description}
                    </p>

                    {/* Action Button */}
                    <motion.a
                      href={leader.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${leader.gradient} text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-${leader.accentColor}-500/25`}
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </motion.a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-full blur-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200">
              Serving the Nation
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}