'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="font-pirata p-4 border-b flex items-center justify-between px-6 md:px-12 bg-white text-lg">
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
                            href="/zines"
                            className={pathname.startsWith('/zines') ? 'underline' : 'hover:underline'}
                        >
                            Zines
                        </Link>
                        <FaChevronDown className="w-3 h-3 mt-[1px]" />
                    </div>

                    <ul
                        className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border shadow-md z-50 p-2 rounded-md min-w-[120px] transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-1"
                    >
                        <li>
                            <Link
                                href="/zines/vol-1"
                                className={isActive('/zines/vol-1') ? 'underline block px-4 py-2' : 'block px-4 py-2 hover:bg-gray-100'}
                            >
                                Vol. 1
                            </Link>
                        </li>
                    </ul>
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
    );
}
