"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLanguage } from "@/context/language-context";

interface GalleryImage {
  src: string;
  thumb: string;
  alt: string;
  width: number;
  height: number;
}

const IMAGES: GalleryImage[] = [
  { src: "/img/gallery/IMG_16.jpg", thumb: "/img/thumbs/gallery/IMG_16.webp", alt: "IMG_16", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_02.jpg", thumb: "/img/thumbs/gallery/IMG_02.webp", alt: "IMG_02", width: 1024, height: 1709 },
  { src: "/img/gallery/IMG_01.jpg", thumb: "/img/thumbs/gallery/IMG_01.webp", alt: "IMG_01", width: 720, height: 1280 },
  // { src: "/img/gallery/IMG_03.jpg", thumb: "/img/thumbs/gallery/IMG_03.webp", alt: "IMG_03", width: 1134, height: 2016 },
  { src: "/img/gallery/IMG_04.jpg", thumb: "/img/thumbs/gallery/IMG_04.webp", alt: "IMG_04", width: 1526, height: 1728 },
  { src: "/img/gallery/IMG_05.jpg", thumb: "/img/thumbs/gallery/IMG_05.webp", alt: "IMG_05", width: 2592, height: 1728 },
  { src: "/img/gallery/IMG_06.jpg", thumb: "/img/thumbs/gallery/IMG_06.webp", alt: "IMG_06", width: 1276, height: 851 },
  // { src: "/img/gallery/IMG_07.jpg", thumb: "/img/thumbs/gallery/IMG_07.webp", alt: "IMG_07", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_08.jpg", thumb: "/img/thumbs/gallery/IMG_08.webp", alt: "IMG_08", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_09.jpg", thumb: "/img/thumbs/gallery/IMG_09.webp", alt: "IMG_09", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_10.jpg", thumb: "/img/thumbs/gallery/IMG_10.webp", alt: "IMG_10", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_11.jpg", thumb: "/img/thumbs/gallery/IMG_11.webp", alt: "IMG_11", width: 843, height: 1499 },
  { src: "/img/gallery/IMG_12.jpg", thumb: "/img/thumbs/gallery/IMG_12.webp", alt: "IMG_12", width: 1512, height: 851 },
  { src: "/img/gallery/IMG_13.jpg", thumb: "/img/thumbs/gallery/IMG_13.webp", alt: "IMG_13", width: 1134, height: 2016 },
  { src: "/img/gallery/IMG_14.jpg", thumb: "/img/thumbs/gallery/IMG_14.webp", alt: "IMG_14", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_15.jpg", thumb: "/img/thumbs/gallery/IMG_15.webp", alt: "IMG_15", width: 1512, height: 2016 },
  { src: "/img/gallery/IMG_17.jpg", thumb: "/img/thumbs/gallery/IMG_17.webp", alt: "IMG_17", width: 1512, height: 2016 },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [fullLoaded, setFullLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index: number) => {
    setFullLoaded(false);
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    setFullLoaded(false);
    document.body.style.overflow = "auto";
  }, []);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFullLoaded(false);
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % IMAGES.length
    );
  }, []);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFullLoaded(false);
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev - 1 + IMAGES.length) % IMAGES.length
    );
  }, []);

  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeLightbox, showNext, showPrev]);

  const activeImage =
    selectedImageIndex !== null ? IMAGES[selectedImageIndex] : null;

  const lightbox = mounted
    ? createPortal(
        <AnimatePresence>
          {activeImage && selectedImageIndex !== null && (
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
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50 p-2 transition-colors"
              >
                <IoClose />
              </button>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl sm:text-6xl z-50 p-2 transition-all hover:scale-110"
              >
                <IoChevronBack />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl sm:text-6xl z-50 p-2 transition-all hover:scale-110"
              >
                <IoChevronForward />
              </button>

              {/* Progressive Full-Size Image Container */}
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="relative w-full h-full max-w-5xl max-h-[82vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  {/* Instant cached thumbnail underneath while full-res loads */}
                  <Image
                    src={activeImage.thumb}
                    alt={activeImage.alt}
                    fill
                    unoptimized
                    className={`object-contain transition-opacity duration-300 ${
                      fullLoaded ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* Full-resolution image */}
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="92vw"
                    quality={88}
                    priority
                    onLoad={() => setFullLoaded(true)}
                    className={`object-contain transition-opacity duration-300 ${
                      fullLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Image Caption */}
                <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                  <p className="text-white text-lg font-medium">
                    {activeImage.alt}
                  </p>
                  <p className="text-white/50 text-sm">
                    {selectedImageIndex + 1} / {IMAGES.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <div className="pt-20 lg:py-24 h-screen w-full">
      <div
        data-section-scroll="true"
        className="w-full rounded-2xl h-full px-4 md:px-8 overflow-y-auto overflow-x-hidden overscroll-y-contain"
      >
        <div className="max-w-7xl mx-auto">
          {/* Masonry Layout */}
          <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {IMAGES.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: Math.min(index, 4) * 0.03,
                  duration: 0.28,
                }}
                viewport={{ once: true, amount: 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-100 break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  unoptimized
                  decoding="async"
                  loading={index < 6 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {t.gallery.viewImage}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {lightbox}
    </div>
  );
}
