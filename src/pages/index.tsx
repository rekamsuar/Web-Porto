import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Album from '@/components/Album';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Creative Developer</title>
                <meta name="description" content="Portfolio of a creative developer specializing in modern web experiences." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Album />
                <Footer />
            </main>
        </>
    );
}