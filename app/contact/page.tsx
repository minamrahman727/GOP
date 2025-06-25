'use client';

import Head from 'next/head';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Government of Pakistan</title>
        <meta name="description" content="Official contact page for the Government of Pakistan. Includes address, helpline and official email." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="bg-gradient-to-br from-white to-[#f0fdf4] min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h1 className="text-4xl font-bold text-[#004d40]">Contact the Government of Pakistan</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We welcome your inquiries, feedback, and communication. Reach us directly through the contact details below.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start"
        >
          {/* Left - Contact Info */}
          <div className="space-y-6 text-left">
            <div className="flex items-start space-x-4">
              <MapPin className="text-[#006400] mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#004d40]">Office Address</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cabinet Division,<br />
                  Constitution Avenue, Islamabad,<br />
                  Government of Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-[#006400] mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#004d40]">Helpline</h4>
                <p className="text-gray-700 text-sm">+92-51-9001111</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-[#006400] mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#004d40]">Email</h4>
                <p className="text-gray-700 text-sm">info@pakistan.gov.pk</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-[#006400] mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#004d40]">Office Hours</h4>
                <p className="text-gray-700 text-sm">Monday to Friday, 9:00 AM to 5:00 PM (PKT)</p>
              </div>
            </div>

            <Image
              src="/logo.png"
              alt="Government Logo"
              width={80}
              height={80}
              className="mt-6"
            />
          </div>

          {/* Right - Map or Department Links */}
          <div className="w-full h-[320px] rounded-lg overflow-hidden shadow-lg border">
            <iframe
              title="Govt Office Map"
              src="https://maps.google.com/maps?q=Cabinet%20Division,%20Islamabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </main>
    </>
  );
}
