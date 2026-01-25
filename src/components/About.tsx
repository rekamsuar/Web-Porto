
import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-yellow-100 dark:bg-yellow-900/20 blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <ScrollReveal>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white transition-colors">About Me</h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <ScrollReveal className="relative group max-w-md mx-auto lg:max-w-none" delay="delay-200">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl bg-white dark:bg-slate-800 p-2 w-full aspect-square overflow-hidden shadow-2xl lg:skew-y-3 lg:hover:skew-y-0 transition-all duration-500">
                            <div className="w-full h-full overflow-hidden rounded-xl">
                                <img src="/images/inoy.jpeg" alt="Profile" className='object-cover ' />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="space-y-6 text-center lg:text-left" delay="delay-400">
                        <h4 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">
                            Transforming <span className="text-blue-600 dark:text-blue-400">ideas</span> into reality through code and design.
                        </h4>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                            My name is Sutrisno, a graduate of Informatic Engineering from Politeknik Harapan Bersama Tegal. I am a passionate developer who creates aesthetic and functional web applications, specializing in frontend development.
                        </p>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                            When I'm not coding, you can find me exploring this beautiful world.
                        </p>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-l-4 border-yellow-400 transition-colors">
                                <span className="block text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">2</span>
                                <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Years Experience</span>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-l-4 border-blue-600 transition-colors">
                                <span className="block text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">7</span>
                                <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Projects Completed</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
