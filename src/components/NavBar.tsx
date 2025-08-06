'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="relative">
            {/* Gradient background behind the navbar */}
            <div
                className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-40"
                aria-hidden="true"
            />

            {/* Actual navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 font-pirata p-4 flex items-center justify-between px-6 md:px-12 bg-transparent text-white">



                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/DoggerelsIconBW.webp"
                        alt="Site Icon"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    <span>Deptford Doggerels</span>
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex gap-8 items-center relative">
                    <li>
                        <Link
                            href="/gallery"
                            className={isActive('/gallery') ? 'underline' : 'hover:underline'}
                        >
                            Gallery
                        </Link>
                    </li>

                    {/* Zines Dropdown */}
                    <li className="relative group">
                        <div
                            className="inline-flex items-center gap-1 hover:underline focus:outline-none"
                        >
                            <Link
                                href="/poems"
                                className={pathname.startsWith('/poems') ? 'underline' : 'hover:underline'}
                            >
                                Poems
                            </Link>
                        </div>

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
            </nav>
        </div>

    );
}
