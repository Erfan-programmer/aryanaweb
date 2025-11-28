"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { HighlightData } from "@/types/type";

interface StoryViewerProps {
  stories: HighlightData[];
  initialIndex: number;
  onClose: () => void;
}

export default function StoryViewer({ stories, initialIndex, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);

  const activeStory = stories[currentIndex];
  const DURATION = 5000;

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = (elapsed / DURATION) * 100;

      if (nextProgress >= 100) {
        onClose();
      } else {
        setProgress(nextProgress);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex, onClose]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white sm:bg-black/40 sm:backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full h-[100dvh] md:w-[400px] md:h-[85vh] md:rounded-3xl overflow-hidden bg-white shadow-2xl border-0 md:border border-gray-100 flex flex-col"
      >
        
        {/* هدر */}
        <div className="absolute top-0 left-0 right-0 z-30 p-4 pt-safe-top bg-gradient-to-b from-black/10 via-white/20 to-transparent">
          {/* نوار پیشرفت */}
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mb-3 shadow-sm">
            <motion.div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, backgroundColor: "#2AD2B6" }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border-[1.5px] p-[1px] bg-white" style={{ borderColor: "#2AD2B6" }}>
                <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image 
                        src={activeStory.coverImage} 
                        alt={activeStory.title} 
                        fill
                        className="object-cover"
                    />
                </div>
              </div>
              <span className="text-gray-800 text-sm font-bold shadow-sm">{activeStory.title}</span>
            </div>
            
            <button onClick={onClose} className="text-gray-600 hover:text-red-500 transition-colors p-2 bg-white/50 rounded-full backdrop-blur-md">
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* تصویر اصلی */}
        <div className="relative w-full flex-1 flex items-center justify-center bg-[#fff]">
          <Image
            src={activeStory.storyImage || activeStory.coverImage}
            alt={activeStory.title}
            fill
            className="object-contain p-0 md:p-2"
            priority
          />
          
          {activeStory.description && (
             <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 md:pb-8 bg-gradient-to-t from-white via-white/90 to-transparent pt-24 text-center z-20">
                 <p className="text-gray-800 font-bold text-lg">{activeStory.description}</p>
             </div>
          )}
        </div>

        <>
            {currentIndex > 0 && (
                <button 
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-lg backdrop-blur-md transition-all active:scale-95 md:hover:scale-110 border border-gray-100"
                >
                    <FaAngleLeft size={22} style={{ color: "#2AD2B6" }} />
                </button>
            )}

            {currentIndex < stories.length - 1 && (
                <button 
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-lg backdrop-blur-md transition-all active:scale-95 md:hover:scale-110 border border-gray-100"
                >
                    <FaAngleRight size={22} style={{ color: "#2AD2B6" }} />
                </button>
            )}
        </>

        {/* ناحیه لمسی نامرئی برای راحتی در موبایل (زیر دکمه‌ها) */}
        <div className="absolute inset-0 z-10 flex">
          <div className="w-1/3 h-full" onClick={handlePrev} />
          <div className="w-1/3 h-full" /> 
          <div className="w-1/3 h-full" onClick={handleNext} />
        </div>

      </motion.div>
    </motion.div>
  );
}