import React, { useState, useEffect } from 'react';
import { ArrowSquareOut, GithubLogo, Warning, X } from '@phosphor-icons/react';
import ScrollReveal from './ScrollReveal';
import { Project } from '@/types';
import projectsData from '@/data/projects.json';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        try {
            setLoading(true);
            const sorted = [...projectsData].sort(
                (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            );
            setProjects(sorted);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Failed to load projects');
        } finally {
            setLoading(false);
        }
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
                            <div key={i} className="animate-pulse bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
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
                            <Warning size={64} weight="light" className="mx-auto" />
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project: Project, index: number) => (
                            <ScrollReveal key={project.id} delay={['delay-0', 'delay-200', 'delay-400'][index % 3]}>
                                <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
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
                                                    <GithubLogo size={20} weight="fill" />
                                                </a>

                                                <a
                                                    href={project['url-web']}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                                    title="Visit Site"
                                                >
                                                    <ArrowSquareOut size={20} weight="bold" />
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
                                <X size={24} weight="bold" />
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
                                    <ArrowSquareOut size={20} weight="bold" className="ml-2" />
                                </a>
                                <a
                                    href={selectedProject['url-github']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex justify-center items-center px-6 py-4 border-2 border-slate-200 dark:border-slate-700 text-sm sm:text-base font-bold rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                                >
                                    View on GitHub
                                    <GithubLogo size={20} weight="fill" className="ml-2" />
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
