import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Float, Environment, ContactShadows, OrbitControls } from '@react-three/drei';

function SconceModel({ onClick, ...props }: any) {
    const [hovered, setHover] = useState(false);

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer';
        else document.body.style.cursor = 'auto';
        return () => { document.body.style.cursor = 'auto'; };
    }, [hovered]);

    return (
        <group
            {...props}
            dispose={null}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {/* Wall Base */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.35, 0.1, 32]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Curved Arm */}
            <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.3, 0.04, 16, 32, Math.PI]} />
                <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Lamp Holder */}
            <mesh position={[0, -0.4, 0.3]}>
                <cylinderGeometry args={[0.1, 0.15, 0.2, 32]} />
                <meshStandardMaterial color="#b85c1c" metalness={0.9} roughness={0.3} />
            </mesh>

            {/* Bulb */}
            <mesh position={[0, -0.7, 0.3]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial
                    color="#ffddaa"
                    emissive="#ff8800"
                    emissiveIntensity={3}
                    toneMapped={false}
                />
            </mesh>

            {/* Glow Light */}
            <pointLight position={[0, -0.7, 0.3]} intensity={5} color="#ffaa00" distance={5} />
        </group>
    );
}

const Hero = () => {
    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-20 transition-colors duration-300">
            {/* Background Blobs - Modified for Dark Mode */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-200 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>

            {/* 3D Model Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                            <SconceModel scale={2} position={[3, 0, 0]} rotation={[0, -0.5, 0]} onClick={toggleTheme} />
                        </Float>
                        <Environment preset="city" />
                        <OrbitControls enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
                <h2 className="text-blue-600 dark:text-yellow-400 font-bold tracking-wide uppercase text-sm mb-4 animate-fade-in-up pointer-events-auto">
                    {/* Welcome to my world */}
                </h2>
                <h1 className="text-6xl md:text-8xl font-poppins font-extrabold text-slate-900 dark:text-white leading-tight mb-6 animate-fade-in-up animation-delay-150 transition-colors pointer-events-auto">
                    I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400 dark:from-blue-400 dark:to-yellow-300">Digital</span> <br />
                    Experiences.
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10 animate-fade-in-up animation-delay-300 transition-colors pointer-events-auto">
                    A passionate developer and designer crafting beautiful, functional, and user-centered digital products.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-450 pointer-events-auto">
                    <button className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        View My Work
                    </button>
                    <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-700 font-bold rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                        About Me
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
                <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
