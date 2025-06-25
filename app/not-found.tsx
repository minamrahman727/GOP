'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#e0f2f1] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <Image
          src="/logo.png"
          alt="Pakistan Logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />

        <h1 className="text-5xl font-bold text-[#004d40] mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry the page you&apos;re looking for doesn&apos;t exist or was moved.  
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 rounded bg-[#004d40] text-white font-semibold hover:bg-[#004d40] transition"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </main>
  );
}
