import React from 'react';
import { Envelope } from '@phosphor-icons/react';
import { siGithub, siInstagram } from 'simple-icons';

interface SocialLink {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const BrandIcon = ({ path, title }: { path: string; title: string }) => (
    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <title>{title}</title>
        <path d={path} />
    </svg>
);

const socialLinks: SocialLink[] = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sutrisno-sutrisno-86a068245',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/rekamsuar',
        icon: <BrandIcon path={siGithub.path} title={siGithub.title} />,
    },
    {
        name: 'Email',
        href: 'mailto:siinoy42@gmail.com',
        icon: <Envelope size={24} weight="bold" />,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/wongelucu/',
        icon: <BrandIcon path={siInstagram.path} title={siInstagram.title} />,
    },
];

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16 border-t-4 border-yellow-400 dark:border-blue-600 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold font-poppins mb-4 tracking-tighter">MY<span className="text-yellow-400">PORTFOLIO</span>.</h2>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto">Crafting digital experiences with passion and precision.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {socialLinks.map(social => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-white hover:text-blue-400 transition-all font-medium hover:scale-110"
                            aria-label={social.name}
                        >
                            {social.icon}
                            <span>{social.name}</span>
                        </a>
                    ))}
                </div>

                <div className="pt-8 border-t border-slate-800 w-full text-center">
                    <p className="text-slate-500 text-xs">© {new Date().getFullYear()} MYPORTFOLIO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
