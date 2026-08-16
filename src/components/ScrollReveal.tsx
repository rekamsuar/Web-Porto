import React, { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ScrollRevealProps {
    children: React.ReactNode;
    threshold?: number;
    className?: string;
    delay?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    threshold = 0.1,
    className = '',
    delay = ''
}) => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [isVisible, setIsVisible] = useState(prefersReducedMotion);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, prefersReducedMotion]);

    const animationClasses = prefersReducedMotion
        ? className
        : `transition-all duration-1000 transform ${isVisible ? `opacity-100 translate-y-0 ${delay}` : 'opacity-0 translate-y-10'} ${className}`;

    return (
        <div ref={ref} className={animationClasses}>
            {children}
        </div>
    );
};

export default ScrollReveal;
