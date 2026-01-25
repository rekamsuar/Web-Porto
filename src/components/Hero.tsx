import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-20 transition-colors duration-300">
            {/* Background Blobs - Modified for Dark Mode */}
            <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-yellow-200 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-200 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-poppins font-extrabold text-slate-900 dark:text-white leading-tight mb-6 animate-fade-in-up animation-delay-150 transition-colors pointer-events-auto">
                    Story Of My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400 dark:from-blue-400 dark:to-yellow-300">Experiences.</span> <br className="hidden sm:block" />
                    
                </h1>
                <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 animate-fade-in-up animation-delay-300 transition-colors pointer-events-auto px-4">
                    Growing and developing is not just a choice, but a way to survive.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-450 pointer-events-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        <Link href="/#about">View My Work</Link>
                    </button>
                    {/* <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-700 font-bold rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                        About Me
                    </button> */}
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
                <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
