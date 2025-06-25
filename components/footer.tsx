'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Show/hide Back to Top button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const footerLinks = [
        {
            title: 'Quick Links',
            links: [
                { name: 'About Us', href: '/' },
                { name: 'Services', href: '/' },
                { name: 'FAQ', href: '/' },
                { name: 'Site Map', href: '/' },
            ],
        },
        {
            title: 'Government Resources',
            links: [
                { name: 'Ministries', href: '/government/ministry' },
                { name: 'Provinces', href: '/government//rovinces' },
                { name: 'Departments', href: '/government/department' },
                { name: 'Public Notices', href: '/' },
            ],
        },
        {
            title: 'Legal & Policy',
            links: [
                { name: 'Privacy Policy', href: '/' },
                { name: 'Terms of Service', href: '/' },
                { name: 'Accessibility Statement', href: '/' },
                { name: 'Disclaimer', href: '/' },
            ],
        },
    ];

    return (
        <footer className="bg-[#004d40] text-gray-200 py-10 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-700">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center mb-4 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md p-1 -ml-1">
                            <Image
                                src="/logo1.png" // Ensure this path is correct for your logo
                                alt="Government of Pakistan Logo"
                                width={100}
                                height={100}
                                className="object-contain mr-3"
                            />
                            <span className="text-xl font-bold text-white leading-tight">
                                Government of <br /> Pakistan
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Serving the nation with transparency, efficiency, and dedication.
                            Your gateway to government services and information.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    {footerLinks.map((section) => (
                        <nav key={section.title} className="md:col-span-1" aria-label={`${section.title} navigation`}>
                            <h3 className="font-semibold text-lg text-white mb-4 border-b border-gray-600 pb-2">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-green-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md p-1 -ml-1"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    {/* Contact Information */}
                    <div className="md:col-span-1">
                        <h3 className="font-semibold text-lg text-white mb-4 border-b border-gray-600 pb-2">
                            Contact Us
                        </h3>
                        <address className="not-italic text-sm space-y-3">
                            <p className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-green-300" />
                                <span>
                                    Cabinet Division,
Constitution Avenue, Islamabad,
Government of Pakistan
                                </span>
                            </p>
                            <p className="flex items-center">
                                <Phone size={18} className="mr-3 text-green-300" />
                                <Link
                                    href="tel:+92519001111"
                                    className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md p-1 -ml-1"
                                >
                                    +92-51-9001111
                                </Link>
                            </p>
                            <p className="flex items-center">
                                <Mail size={18} className="mr-3 text-green-300" />
                                <Link
                                    href="mailto:info@pakistan.gov.pk"
                                    className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md p-1 -ml-1"
                                >
info@pakistan.gov.pk                                </Link>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar - Copyright and Social Media */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Government of Pakistan. All Rights Reserved.<br/>by <Link href="https://smrehman.vercel.app" className="text-green-300 hover:underline">Syed Minam ur Rehman</Link>   
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            href="https://www.facebook.com/GovtofPakistan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-full p-2 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </Link>
                        <Link
                            href="https://x.com/govtofpakistan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-full p-2 transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/government-of-pakistan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-full p-2 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </Link>
                        <Link
                            href="https://www.youtube.com/@govtofpakn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-full p-2 transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    aria-label="Back to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </footer>
    );
}
