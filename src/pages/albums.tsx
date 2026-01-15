import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const albumsData = [
    {
        id: 1,
        title: 'Life in Code',
        description: 'Snapshots from hackathons, late night coding sessions, and workspace setups.',
        cover: 'bg-blue-100 dark:bg-blue-900',
        count: 12
    },
    {
        id: 2,
        title: 'Travel Diaries',
        description: 'Exploring new places, cultures, and finding inspiration in nature.',
        cover: 'bg-green-100 dark:bg-green-900',
        count: 24
    },
    {
        id: 3,
        title: 'Conference Talks',
        description: 'Sharing knowledge and networking with amazing developers around the world.',
        cover: 'bg-purple-100 dark:bg-purple-900',
        count: 8
    },
    {
        id: 4,
        title: 'Photography',
        description: 'A collection of my best shots, from landscapes to street photography.',
        cover: 'bg-yellow-100 dark:bg-yellow-900',
        count: 45
    },
    {
        id: 5,
        title: 'Video Projects',
        description: 'Short films, tech reviews, and experimental video content.',
        cover: 'bg-red-100 dark:bg-red-900',
        count: 5
    },
    {
        id: 6,
        title: 'Community Events',
        description: 'Meetups, workshops, and community gathering highlights.',
        cover: 'bg-indigo-100 dark:bg-indigo-900',
        count: 18
    }
];

export default function Albums() {
    const getDelayClass = (index: number) => {
        const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
        return delays[index % delays.length];
    };

    return (
        <>
            <Head>
                <title>Albums | Portfolio</title>
                <meta name="description" content="Photo and video albums showcasing my life and work." />
            </Head>

            <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex flex-col">
                <Navbar />

                <section className="pt-32 pb-16 flex-grow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
                                    My Albums
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                    A collection of moments, diverse projects, and memories captured in photos and videos.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {albumsData.map((album, index) => (
                                <ScrollReveal key={album.id} delay={getDelayClass(index)}>
                                    <div className="group cursor-pointer bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                        <div className={`h-56 w-full ${album.cover} relative overflow-hidden`}>
                                            {/* Placeholder for actual image */}
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 opacity-30 text-6xl font-bold">
                                                {album.title.charAt(0)}
                                            </div>
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                                                {album.count} items
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {album.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {album.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
