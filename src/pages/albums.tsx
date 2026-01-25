
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { supabase } from '@/service/apiClient';
import { GalleryAsset } from '@/types';

const AssetCard = ({ asset }: { asset: GalleryAsset }) => (
    <div className="break-inside-avoid mb-2 relative group rounded-[1rem] overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 transition-all duration-700 hover:-translate-y-3 hover:shadow-blue-500/20">
        <div className="relative overflow-hidden">
            {asset.type === 'video' ? (
                <video
                    src={asset.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    style={{ minHeight: asset.isPortrait ? '450px' : '220px' }}
                />
            ) : (
                <img
                    src={asset.url}
                    alt={asset.title}
                    className="w-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    style={{ minHeight: asset.isPortrait ? '450px' : '220px' }}
                />
            )}

            <div className="absolute top-2 left-2 p-3 bg-white/10 backdrop-blur-xl rounded-2xl text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                {asset.type === 'video' ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase tracking-widest text-white rounded-full mb-3">
                        {asset.category}
                    </span>
                    <h4 className="text-2xl font-black text-white leading-tight">
                        {asset.title}
                    </h4>
                </div>
            </div>
        </div>
    </div>
);

export default function Albums() {
    const [galleryAssets, setGalleryAssets] = useState<GalleryAsset[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');
    const [filters, setFilters] = useState(['All']);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const { data, error } = await supabase
                    .from('albums')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data) {
                    const mappedData: GalleryAsset[] = data.map((item: any) => {
                        const url = item.album;
                        const isVideo = url.match(/\.(mp4|webm|ogg|mov)$/i);

                        return {
                            id: item.id,
                            title: item.title,
                            url: url,
                            type: isVideo ? 'video' : 'image',
                            isPortrait: item.id % 2 === 0,
                            category: item.category || 'General'
                        };
                    });
                    setGalleryAssets(mappedData);

                    const uniqueCategories = Array.from(new Set(mappedData.map(a => a.category)));
                    if (uniqueCategories.length > 1 || (uniqueCategories.length === 1 && uniqueCategories[0] !== 'General')) {
                        setFilters(['All', ...uniqueCategories]);
                    }
                }
            } catch (error) {
                console.error('Error fetching albums:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    const filteredAssets = activeFilter === 'All'
        ? galleryAssets
        : galleryAssets.filter(a => a.category === activeFilter);


    return (
        <>
            <Head>
                <title>Gallery | Portfolio</title>
                <meta name="description" content="A cinematic collection of photos and videos." />
            </Head>

            <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col">
                <Navbar />

                <section className="pt-32 pb-24 flex-grow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-10">
                                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
                                    THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">GALLERY</span>
                                </h1>

                                <div className="flex flex-wrap justify-center gap-3 mb-12">
                                    {filters.map(filter => (
                                        <button
                                            key={filter}
                                            onClick={() => setActiveFilter(filter)}
                                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === filter
                                                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 grow-0 scale-105'
                                                : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {isLoading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                            </div>
                        ) : (
                            <>
                                <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                                    {filteredAssets.map((asset) => (
                                        <ScrollReveal key={asset.id}>
                                            <AssetCard asset={asset} />
                                        </ScrollReveal>
                                    ))}
                                </div>

                                {filteredAssets.length === 0 && (
                                    <div className="text-center py-20">
                                        <p className="text-slate-500 text-lg">No items found in this category.</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
