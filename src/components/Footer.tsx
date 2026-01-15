
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t-4 border-yellow-400 dark:border-blue-600 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold font-poppins mb-2">MY<span className="text-yellow-400">PORTFOLIO</span>.</h2>
                    <p className="text-slate-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map(social => (
                        <a key={social} href="#" className="text-slate-400 hover:text-white hover:text-blue-400 transition-colors">
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
