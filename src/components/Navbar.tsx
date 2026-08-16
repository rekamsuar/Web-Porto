import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { List, Moon, Sun, X } from '@phosphor-icons/react';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Tools', href: '/#tools' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Albums', href: '/albums' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isOpen ? 'bg-white dark:bg-slate-900 min-h-[100dvh] overflow-hidden' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-poppins text-blue-600 tracking-tighter hover:scale-105 transition-transform">
                            MY<span className="text-yellow-400">PORTFOLIO</span>.
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 hover:scale-105 transform"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
                        </button>

                        <a
                            href="https://wa.me/6285640194234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-lg shadow-blue-600/20"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-slate-200 dark:bg-slate-800' : 'bg-slate-100 dark:bg-slate-800'} text-slate-600 dark:text-yellow-400`}
                        >
                            {isDark ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`p-1.5 transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-700 dark:text-slate-300'} hover:text-blue-600 focus:outline-none`}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-slate-900 transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 pt-20">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-4xl font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/6285640194234"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className={`bg-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-2xl w-full max-w-sm transform text-center ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                    >
                        Contact Me
                    </a>

                    <div className={`flex space-x-8 pt-10 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}>
                        <a href="https://www.linkedin.com/in/sutrisno-sutrisno-86a068245" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold uppercase tracking-widest">
                            LinkedIn
                        </a>
                        <a href="https://github.com/rekamsuar" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold uppercase tracking-widest">
                            GitHub
                        </a>
                        <a href="https://www.instagram.com/wongelucu/" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold uppercase tracking-widest">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
