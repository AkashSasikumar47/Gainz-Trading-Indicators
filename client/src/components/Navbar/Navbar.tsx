import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="max-w-screen-xl bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <a href="/" className="Logo">
                    <div className="font-bold text-xl hover:text-orange-500">GAINZ</div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-12">
                    <ul className="flex items-center gap-6 text-base">
                        <li>
                            <a className="text-black transition hover:text-gray-500" href="/Indicators">Indicators</a>
                        </li>
                        <li>
                            <a className="text-black transition hover:text-gray-500" href="/Contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-black hover:text-gray-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Toggle Menu</span>
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                        <ul className="flex flex-col items-start gap-4 p-4 text-base">
                            <li>
                                <a className="text-black transition hover:text-gray-500" href="/Indicators">Indicators</a>
                            </li>
                            <li>
                                <a className="text-black transition hover:text-gray-500" href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;