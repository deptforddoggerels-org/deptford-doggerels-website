import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
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
                <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
                {/* Zines Dropdown */}
                <li className="relative group">
                    <button
                        className="inline-flex items-center gap-1 hover:underline focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <li><Link href="/zines" className="hover:underline">Zines</Link></li>
                        <FaChevronDown className="w-3 h-3 mt-[1px]" />
                    </button>

                    <ul
                        className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border shadow-md z-50 p-2 rounded-md min-w-[120px] transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-1"
                    >
                        <li>
                            <Link href="/zines/vol-1" className="block px-4 py-2 hover:bg-gray-100">
                                Vol. 1
                            </Link>
                        </li>
                    </ul>
                </li>


                {/* Static Links */}
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>

                {/* Instagram Icon */}
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
