
import React, { useState, useEffect } from 'react';
import { Camera, Play } from '@phosphor-icons/react';
import ScrollReveal from './ScrollReveal';
import albumsData from '@/data/albums.json';


interface AlbumAsset {
    id: number;
    type: 'image' | 'video';
    url: string;
    title: string;
    isPortrait: boolean;
}

const AlbumAssetCard: React.FC<{ asset: AlbumAsset }> = ({ asset }) => {
    return (
        <div className="break-inside-avoid mb-6 relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-slate-200 dark:bg-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
            {asset.type === 'video' ? (
                <div className="relative w-full overflow-hidden">
                    <video
                        src={asset.url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        style={{ minHeight: asset.isPortrait ? '400px' : '200px' }}
                    />
                    <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play size={20} weight="fill" />
                    </div>
                </div>
            ) : (
                <div className="relative w-full overflow-hidden">
                    <img
                        src={asset.url}
                        alt={asset.title}
                        className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        style={{ minHeight: asset.isPortrait ? '400px' : '200px' }}
                    />
                    <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera size={20} weight="bold" />
                    </div>
                </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {asset.title}
                </span>
                <span className="text-white/60 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {asset.type === 'video' ? 'Featured Clip' : 'Moment Captured'}
                </span>
            </div>
        </div>
    );
};

const Album = () => {
    const [albumAssets, setAlbumAssets] = useState<AlbumAsset[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const sorted = [...albumsData]
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                .slice(0, 9);

            const mappedData: AlbumAsset[] = sorted.map((item) => {
                const url = item.album;
                const isVideo = url.match(/\.(mp4|webm|ogg|mov)$/i);

                return {
                    id: item.id,
                    title: item.title,
                    url: url,
                    type: isVideo ? 'video' : 'image',
                    isPortrait: item.id % 2 === 0
                };
            });
            setAlbumAssets(mappedData);
        } catch (error) {
            console.error('Error loading albums:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <section id="album" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
                        <div className="text-left">
                            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-xs sm:text-sm mb-2">Life In Focus</h2>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-slate-900 dark:text-white transition-colors tracking-tight">Life Album</h3>
                        </div>
                        <p className="max-w-md text-base sm:text-lg text-slate-600 dark:text-slate-400 transition-colors leading-relaxed">
                            A cinematic collection of moments, inspirations, and behind-the-scenes snapshots from my daily life and creative journey.
                        </p>
                    </div>
                </ScrollReveal>


                <ScrollReveal delay="delay-200">
                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                        </div>
                    ) : (
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                            {albumAssets.map((asset) => (
                                <AlbumAssetCard key={asset.id} asset={asset} />
                            ))}
                        </div>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Album;
