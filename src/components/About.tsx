
import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-yellow-100 dark:bg-yellow-900/20 blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Who I Am</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white transition-colors">About Me</h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal className="relative group" delay="delay-200">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl bg-white dark:bg-slate-800 p-2 w-full aspect-square overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-500">
                            {/* Placeholder for About Image */}
                            <div className="w-full h-full overflow-hidden rounded-xl">
                                <img src="/images/inoy.jpeg" alt="Profile" className='object-cover' />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="space-y-6" delay="delay-400">
                        <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                            Transforming <span className="text-blue-600 dark:text-blue-400">ideas</span> into reality through code and design.
                        </h4>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                            I am a dedicated developer with a passion for creating aesthetically pleasing and functional web applications.
                            My journey started with a curiosity for how things work on the internet, which quickly turned into a career.
                            I specialize in combining clean code with modern design principles.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                            When I'm not coding, you can find me exploring various photography techniques or catching up on the latest tech trends.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-l-4 border-yellow-400 transition-colors">
                                <span className="block text-3xl font-bold text-slate-900 dark:text-white">3+</span>
                                <span className="text-slate-500 dark:text-slate-400 text-sm">Years Experience</span>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-l-4 border-blue-600 transition-colors">
                                <span className="block text-3xl font-bold text-slate-900 dark:text-white">50+</span>
                                <span className="text-slate-500 dark:text-slate-400 text-sm">Projects Completed</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
