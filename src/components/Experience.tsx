import React, { useState, useEffect } from 'react';
import { supabase } from '../service/apiClient';
import ScrollReveal from './ScrollReveal';
import { Experiences } from '@/types';

const Experience: React.FC = () => {
    const [experiences, setExperiences] = useState<Experiences[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('experience')
                    .select('*')
                    .order('period-start', { ascending: false });

                if (error) {
                    throw error;
                }

                setExperiences(data || []);
            } catch (err: any) {
                setError(err.message || 'Failed to fetch experiences');
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const formatPeriod = (start: string, end: string) => {
        const startDate = formatDate(start);
        const endDate = end ? formatDate(end) : 'Present';
        return `${startDate} - ${endDate}`;
    };

    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/10 blur-3xl opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white transition-colors">Work Experience</h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A timeline of my professional growth and the companies I've had the pleasure to work with.
                        </p>
                    </div>
                </ScrollReveal>

                {loading && (
                    <div className="space-y-8 md:space-y-12">
                        {[1, 2].map((i) => (
                            <div key={i} className="animate-pulse bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-700/50">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="flex-grow w-full">
                                        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-3"></div>
                                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mb-4"></div>
                                        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-32"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="text-center py-12">
                        <div className="text-red-500 dark:text-red-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp: Experiences, index: number) => (
                            <ScrollReveal key={exp.id} delay={`delay-${index * 200}`} className="relative">
                                {index !== experiences.length - 1 && (
                                    <div className="hidden md:block absolute left-[2.25rem] top-20 bottom-[-3rem] w-0.5 bg-gradient-to-b from-blue-600/50 to-transparent"></div>
                                )}

                                <div className="group bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                                    <div className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700 group-hover:scale-110 transition-transform duration-500 bg-white dark:bg-slate-800">
                                        <img
                                            src={exp.image}
                                            alt={exp.company}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${exp.company}&background=random&size=128`;
                                            }}
                                        />
                                    </div>

                                    <div className="text-center md:text-left flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                            <div>
                                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {exp.company}
                                                </h4>
                                                <div className="text-slate-600 dark:text-slate-400">
                                                    {exp.position}
                                                </div>
                                            </div>
                                            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full h-fit">
                                                {formatPeriod(exp['period-start'], exp['period-end'])}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
