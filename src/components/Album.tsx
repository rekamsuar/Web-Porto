
import React from 'react';
import ScrollReveal from './ScrollReveal';

const photos = [
    'bg-slate-300 dark:bg-slate-700',
    'bg-blue-200 dark:bg-blue-900',
    'bg-yellow-200 dark:bg-yellow-900',
    'bg-red-200 dark:bg-red-900',
    'bg-green-200 dark:bg-green-900',
    'bg-purple-200 dark:bg-purple-900'
];

const Album = () => {
    return (
        <section id="album" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Activities</h2>
                            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white transition-colors">Life Album</h3>
                        </div>
                        <p className="max-w-md text-slate-600 dark:text-slate-400 mt-4 md:mt-0 transition-colors">
                            A collection of moments, inspirations, and behind-the-scenes snapshots from my daily life.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay="delay-200">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {photos.map((item, index) => (
                            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                                <div className={`w-full h-64 ${item} transition-transform duration-500 group-hover:scale-110`}>
                                    {/* Image Placeholder */}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium">Moment #{index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Album;
