import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    threshold?: number;
    className?: string;
    delay?: string; 
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    threshold = 0.1,
    className = "",
    delay = ""
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: threshold
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 transform ${isVisible
                    ? `opacity-100 translate-y-0 ${delay}`
                    : 'opacity-0 translate-y-10'
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
