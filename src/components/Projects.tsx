import React, { useState, useEffect } from 'react';
import { supabase } from '../service/apiClient';
import ScrollReveal from './ScrollReveal';
import { Project } from '@/types';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('project')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) {
                    throw error;
                }

                setProjects(data || []);
            } catch (err: any) {
                setError(err.message || 'Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white transition-colors">Featured Projects</h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            A showcase of my recent projects and applications.
                        </p>
                    </div>
                </ScrollReveal>

                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
                                <div className="h-64 bg-slate-200 dark:bg-slate-700"></div>
                                <div className="p-8">
                                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-4 w-3/4"></div>
                                    <div className="flex gap-2 mb-4">
                                        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project: Project, index: number) => (
                            <ScrollReveal key={project.id} delay={['delay-0', 'delay-200', 'delay-400'][index % 3]}>
                                <div className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                                    <div className="h-64 relative overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Project+Image';
                                            }}
                                        />

                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>

                                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                            {project['tech-tools'] && project['tech-tools'][0] && (
                                                <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-slate-900 text-xs font-bold uppercase tracking-wider border border-white/20">
                                                    {project['tech-tools'][0]}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-1">{project.title}</h4>
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {project['tech-tools']?.map((tool: string, idx: number) => (
                                                <span key={idx} className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto gap-4">
                                            <button
                                                onClick={() => openModal(project)}
                                                className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60 transition-colors"
                                            >
                                                Details
                                            </button>
                                            <div className="flex gap-2">
                                                <a
                                                    href={project['url-github']}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                                    title="View Code"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                </a>

                                                <a
                                                    href={project['url-web']}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                                    title="Visit Site"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6" style={{ zIndex: 100 }}>
                    <div
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity animate-fadeIn"
                        onClick={closeModal}
                    ></div>
                    <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col animate-modalPop border border-slate-200 dark:border-slate-700">
                        <div className="relative h-48 sm:h-64 md:h-80 bg-slate-100 dark:bg-slate-700 shrink-0">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-contain p-4 md:p-8"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Project+Image';
                                }}
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 dark:bg-black/50 dark:hover:bg-black/70 text-slate-900 dark:text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-5 sm:p-8 md:p-10">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                {selectedProject.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject['tech-tools']?.map((tool: string, idx: number) => (
                                    <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider">
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-8">
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 dark:border-slate-700 mt-auto">
                                <a
                                    href={selectedProject['url-web']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex justify-center items-center px-6 py-4 border border-transparent text-sm sm:text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                                >
                                    Visit Live Site
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <a
                                    href={selectedProject['url-github']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex justify-center items-center px-6 py-4 border-2 border-slate-200 dark:border-slate-700 text-sm sm:text-base font-bold rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                                >
                                    View on GitHub
                                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
