"use client";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [0, 1, 2].map((index) => ({
    subtitle: t(`slides.${index}.subtitle`),
    title1: t(`slides.${index}.title1`),
    title2: t(`slides.${index}.title2`),
    description: t(`slides.${index}.description`),
  }));

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentSlide];

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4 relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      <motion.img
        src="/mobile-phone.png"
        className="w-12 h-12 sm:w-16 sm:h-16 absolute top-6 left-6 opacity-90"
        animate={{
          y: [0, -20, 10, -15, 0],
          x: [0, 10, -15, 5, 0],
          rotate: [0, 5, -5, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/artificial-intelligence.png"
        className="w-14 h-14 sm:w-20 sm:h-20 absolute grayscale opacity-35 bottom-6 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, -15, 20, -10, 0],
          x: [0, 10, -10, 5, 0],
          rotate: [0, 3, -3, 3, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-teal-300/30 rounded-full z-10 hidden md:block"
          style={{
            width: Math.floor(Math.random() * 25) + 20,
            height: Math.floor(Math.random() * 25) + 20,
            top: `${30 + Math.random() * 40}%`,
            right: `${Math.random() * 20}%`,
          }}
          animate={{
            y: [0, -15, 10, -10, 0],
            x: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + "-text"}
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 40 : -40 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-start"
          >
            <span className="text-gray-400 text-xs sm:text-sm">{slide.subtitle}</span>

            <h1 className="text-2xl sm:text-4xl font-bold flex justify-center md:justify-start items-center gap-1 mt-3 flex-wrap leading-tight">
              <span className="text-[#555]">{slide.title1}</span>
              <span className="text-[#12DAB3] relative hero-section-bio-title-special">{slide.title2}</span>
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base md:w-[80%] mx-auto md:mx-0">
              {slide.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              <Link href="#contact_us" className="flex items-center gap-2 px-5 py-2 rounded-xl border-2 border-teal-400 bg-teal-400 text-white text-sm sm:text-base hover:bg-white hover:text-teal-400 transition">
                <MdOutlineSupportAgent />
                {t("buttons.consult")}
              </Link>

              <Link href="#resumes" className="flex items-center gap-2 px-5 py-2 rounded-xl border-2 border-teal-400 bg-white text-teal-400 text-sm sm:text-base hover:bg-teal-400 hover:text-white transition">
                <RiDashboardFill />
                {t("buttons.portfolio")}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex-1 relative flex justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide + "-image"}
              initial={{ opacity: 0, scale: 0.9, x: isRtl ? 40 : -40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: isRtl ? -40 : 40 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/ezgif-710052fd448133.webp"
                width={350}
                height={350}
                alt="Hero Image"
                className="rounded-xl w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className={`absolute top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full border-2 border-teal-400 text-teal-400 bg-white/70 hover:bg-teal-400 hover:text-white transition duration-300 ${isRtl ? 'right-2' : 'left-2'}`}
          >
            {isRtl ? <FaArrowRight size={14} /> : <FaArrowLeft size={14} />}
          </button>

          <button
            onClick={nextSlide}
            className={`absolute top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full border-2 border-teal-400 text-teal-400 bg-white/70 hover:bg-teal-400 hover:text-white transition duration-300 ${isRtl ? 'left-2' : 'right-2'}`}
          >
             {isRtl ? <FaArrowLeft size={14} /> : <FaArrowRight size={14} />}
          </button>
        </div>
      </div>
    </section>
  );
}