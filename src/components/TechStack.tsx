import React from 'react';
import ScrollReveal from './ScrollReveal';

const TechStack: React.FC = () => {
    const techGroups = [
        {
            category: "Frontend Development",
            level: "Intermediate",
            levelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            skills: [
                { name: "React.js", icon: "react" },
                { name: "Vue.js", icon: "vue" },
                { name: "Next.js", icon: "nextjs" },
                { name: "Tailwind CSS", icon: "tailwind" },
                { name: "Bootstrap", icon: "bootstrap" },
                { name: "TypeScript", icon: "ts" },
                { name: "JavaScript", icon: "js" },
                { name: "RESTful API", icon: "postman" },
            ]
        },
        {
            category: "Backend & API",
            level: "Beginner",
            levelColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
            skills: [
                { name: "Laravel", icon: "laravel" },
                { name: "PHP", icon: "php" },
                { name: "SQL", icon: "mysql" },
                // { name: "Supabase", icon: "supabase" },
            ]
        },
        {
            category: "DevOps & Tools",
            level: "Beginner - Intermediate",
            levelColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
            skills: [
                { name: "Git", icon: "git" },
                { name: "Docker", icon: "docker" },
                { name: "Linux", icon: "linux" },
                { name: "Ubuntu", icon: "ubuntu" },
                { name: "Nginx", icon: "nginx" },
            ]
        }
    ];

    const getIconUrl = (icon: string) => {
        return `https://skillicons.dev/icons?i=${icon}`;
    };

    return (
        <section id="tools" className="py-24 bg-slate-50 dark:bg-slate-800/20 relative overflow-hidden transition-colors duration-300">
            {/* Background decorative elements */}
            <div className="absolute right-0 top-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/10 blur-3xl opacity-50"></div>
            <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 dark:bg-yellow-900/10 blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white transition-colors">Tools & Frameworks</h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            The technology stack and tools I use to bring ideas to life and build scalable web applications.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {techGroups.map((group, groupIdx) => (
                        <ScrollReveal key={group.category} delay={`delay-${groupIdx * 200}`} className="h-full">
                            <div className="h-full bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="flex items-center justify-between ">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {group.category}
                                    </h4>
                                    {/* <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${group.levelColor}`}>
                                        {group.level}
                                    </span> */}
                                </div>
                                <div className='flex items-center justify-between my-4'>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${group.levelColor}`}>
                                        {group.level}
                                    </span>
                                </div>


                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {group.skills.map((skill) => (
                                        <div key={skill.name} className="flex flex-col items-center gap-3 group/skill">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center p-3 border border-slate-100 dark:border-slate-800 group-hover/skill:scale-110 group-hover/skill:border-blue-500/50 group-hover/skill:shadow-lg group-hover/skill:shadow-blue-500/10 transition-all duration-300">
                                                <img
                                                    src={getIconUrl(skill.icon)}
                                                    alt={skill.name}
                                                    className="w-10 h-10 object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
