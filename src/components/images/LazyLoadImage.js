import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);
    if (isVisible) {
        return (
            <div className={` bg-red-500 opacity-35 ${className}`}>
            </div>
        )
    } else {
        return (
            <img
                className={className}
                ref={imageRef}
                src={isVisible ? src : ''}
                alt={alt}
            />
        );
    }

};

export default LazyImage;
