'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Facebook, Twitter, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    // Close menu on route change (mobile)
    useEffect(() => {
        setMenuOpen(false);
        setMobileDropdown(null);
    }, [pathname]);

    // Keyboard accessibility for desktop dropdowns
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (dropdownOpen && (e.key === 'Escape' || e.key === 'Tab')) {
                setDropdownOpen(null);
            }
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [dropdownOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Government',href: '/government',
            submenu: [
                { name: 'Ministries', href: '/government/ministry' },
                { name: 'Provinces', href: '/government/provinces' },
                { name: 'Departments', href: '/government/departments' },
            ],
        },
        {
            name: 'Documents' ,href:'/',
            submenu: [
                { name: 'Downloads', href: '/' },
                { name: 'Policies', href: '/' },
            ],
        },
        {
            name: 'Media',
            submenu: [
                { name: 'Press Releases', href: '/' },
                { name: 'News', href: '/' },
            ],
        },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="w-full shadow">
            {/* Topbar */}
            <div className="bg-white text-[#004d40] text-sm px-4 py-2 flex justify-between items-center border-b">
                <div className="flex items-center gap-2 font-semibold">
                    <Image
                        src="/logo.png"
                        alt="Pakistan Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    Government of Pakistan
                </div>
                <div className="flex items-center gap-4 text-[#004d40]">
                    <Search size={18} className="cursor-pointer hover:text-black focus:outline-none focus:ring-2 focus:ring-[#004d40]" tabIndex={0} />
                    <Facebook size={18} href='https://www.facebook.com/GovtofPakistan' className="hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600" tabIndex={0} />
                    <Twitter size={18} href='https://x.com/govtofpakistan/' className="hover:text-sky-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500" tabIndex={0} />
                </div>
            </div>

            {/* Main navbar with centered nav items */}
            <div className="bg-[#004d40] text-white px-4 border-t border-[#004d40]">
                <div className="max-w-7xl mx-auto h-14 flex justify-center items-center relative">
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6" ref={navRef}>
                        {navLinks.map((link) =>
                            link.submenu ? (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    tabIndex={0}
                                    onMouseEnter={() => setDropdownOpen(link.name)}
                                    onMouseLeave={() => setDropdownOpen(null)}
                                    onFocus={() => setDropdownOpen(link.name)}
                                    onBlur={() => setDropdownOpen(null)}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter' || e.key === ' ') setDropdownOpen(link.name);
                                        if (e.key === 'Escape') setDropdownOpen(null);
                                    }}
                                >
                                    <button
                                        className={`hover:text-green-300 font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-green-300 ${
                                            dropdownOpen === link.name ? 'text-green-600' : ''
                                        }`}
                                        aria-haspopup="true"
                                        aria-expanded={dropdownOpen === link.name}
                                    >
                                        {link.name}
                                        <motion.span
                                            animate={{ rotate: dropdownOpen === link.name ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={16} />
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {dropdownOpen === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                className="absolute top-full left-0 bg-white text-gray-800 shadow-md rounded-md mt-1 z-50"
                                            >
                                                <ul className="min-w-[160px] py-2">
                                                    {link.submenu.map((sublink) => (
                                                        <li key={sublink.name}>
                                                            <Link
                                                                href={sublink.href}
                                                                className={`block px-4 py-2 hover:bg-gray-100 ${
                                                                    pathname === sublink.href ? 'bg-gray-100 font-semibold' : ''
                                                                }`}
                                                                tabIndex={0}
                                                            >
                                                                {sublink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`hover:text-green-300 font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-300 ${
                                        pathname === link.href ? 'bg-green-300 text-[#006400]' : ''
                                    }`}
                                    tabIndex={0}
                                >
                                    {link.name}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-white focus:outline-none focus:ring-2 focus:ring-green-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-[#006400] text-white px-4 py-4 space-y-4 overflow-hidden"
                    >
                        {navLinks.map((link) =>
                            link.submenu ? (
                                <div key={link.name}>
                                    <button
                                        className="flex items-center justify-between w-full font-semibold focus:outline-none focus:ring-2 focus:ring-green-300"
                                        onClick={() =>
                                            setMobileDropdown(mobileDropdown === link.name ? null : link.name)
                                        }
                                        aria-expanded={mobileDropdown === link.name}
                                    >
                                        {link.name}
                                        <motion.span
                                            animate={{ rotate: mobileDropdown === link.name ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={18} />
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {mobileDropdown === link.name && (
                                            <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="pl-4 space-y-1 overflow-hidden"
                                            >
                                                {link.submenu.map((sublink) => (
                                                    <li key={sublink.name}>
                                                        <Link
                                                            href={sublink.href}
                                                            className={`block hover:text-green-300 py-1 ${
                                                                pathname === sublink.href ? 'text-green-300 font-semibold' : ''
                                                            }`}
                                                            tabIndex={0}
                                                        >
                                                            {sublink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block hover:text-green-300 py-1 ${
                                        pathname === link.href ? 'text-green-300 font-semibold' : ''
                                    }`}
                                    tabIndex={0}
                                >
                                    {link.name}
                                </Link>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
