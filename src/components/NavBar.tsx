'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    return (
        <div className="relative">
            {/* Gradient background behind the navbar */}
            <div
                className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-20"
                aria-hidden="true"
            />

            {/* Actual navbar */}
            <nav className="fixed top-0 left-0 w-full z-30 font-pirata p-4 flex items-center justify-between px-6 md:px-12 bg-transparent text-white">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-40">
                    <Image
                        src="/DoggerelsIconBW.webp"
                        alt="Site Icon"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    <span>Deptford Doggerels</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 items-center relative">
                    <li>
                        <Link
                            href="/gallery"
                            className={isActive('/gallery') ? 'underline' : 'hover:underline'}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/poems"
                            className={pathname.startsWith('/poems') ? 'underline' : 'hover:underline'}
                        >
                            Poems
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={isActive('/contact') ? 'underline' : 'hover:underline'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={isActive('/about') ? 'underline' : 'hover:underline'}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/deptforddoggerels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-pink-600 transition-colors"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden z-40"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center gap-8 text-2xl md:hidden z-30">
                        <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                        <Link href="/poems" onClick={() => setIsOpen(false)}>Poems</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <a
                            href="https://www.instagram.com/deptforddoggerels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-pink-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaInstagram size={28} />
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
}
