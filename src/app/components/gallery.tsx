"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

const IMAGES = [
    { src: '/img/gallery/IMG_16.jpg', alt: 'IMG_16' },
    { src: '/img/gallery/IMG_02.jpg', alt: 'IMG_02' },
    { src: '/img/gallery/IMG_01.jpg', alt: 'IMG_01' },
    
    // { src: '/img/gallery/IMG_03.jpg', alt: 'IMG_03' },
    { src: '/img/gallery/IMG_04.jpg', alt: 'IMG_04' },
    { src: '/img/gallery/IMG_05.jpg', alt: 'IMG_05' },
    { src: '/img/gallery/IMG_06.jpg', alt: 'IMG_06' },
    // { src: '/img/gallery/IMG_07.jpg', alt: 'IMG_07' },
    { src: '/img/gallery/IMG_08.jpg', alt: 'IMG_08' },
    { src: '/img/gallery/IMG_09.jpg', alt: 'IMG_09' },
    { src: '/img/gallery/IMG_10.jpg', alt: 'IMG_10' },
    { src: '/img/gallery/IMG_11.jpg', alt: 'IMG_11' },
    { src: '/img/gallery/IMG_12.jpg', alt: 'IMG_12' },
    { src: '/img/gallery/IMG_13.jpg', alt: 'IMG_13' },
    { src: '/img/gallery/IMG_14.jpg', alt: 'IMG_14' },
    { src: '/img/gallery/IMG_15.jpg', alt: 'IMG_15' },
    
    { src: '/img/gallery/IMG_17.jpg', alt: 'IMG_17' },
];

export default function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    const showNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % IMAGES.length);
        }
    };

    const showPrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + IMAGES.length) % IMAGES.length);
        }
    };

    return (
        <div className='pt-20 lg:py-24 h-screen w-full'>
            <div
                data-section-scroll="true"
                className="w-full rounded-2xl h-full px-4 md:px-8 overflow-y-auto overflow-x-hidden overscroll-y-contain"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Masonry Layout */}
                    <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {IMAGES.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Image
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImageIndex !== null && (
                        <motion.div
                            data-scroll-lock="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50 p-2 transition-colors"
                            >
                                <IoClose />
                            </button>

                            {/* Navigation Arrows */}
                            <button
                                onClick={showPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl sm:text-6xl z-50 p-2 transition-all hover:scale-110"
                            >
                                <IoChevronBack />
                            </button>
                            <button
                                onClick={showNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl sm:text-6xl z-50 p-2 transition-all hover:scale-110"
                            >
                                <IoChevronForward />
                            </button>

                            {/* Image Container */}
                            <motion.div
                                key={selectedImageIndex}
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                className="relative w-full h-full max-w-5xl flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={IMAGES[selectedImageIndex].src}
                                        alt={IMAGES[selectedImageIndex].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Image Caption */}
                                <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                                    <p className="text-white text-lg font-medium">
                                        {IMAGES[selectedImageIndex].alt}
                                    </p>
                                    <p className="text-white/50 text-sm">
                                        {selectedImageIndex + 1} / {IMAGES.length}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
