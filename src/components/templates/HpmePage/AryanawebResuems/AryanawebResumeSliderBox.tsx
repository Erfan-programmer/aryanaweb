"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrBlockQuote } from "react-icons/gr";

interface ResumeSliderProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

const overlayImages = [
  "/persian--32384.png",
  "/zoroastrianism--32402.png",
  "/acropolis--32354.png",
];

export default function AryanawebResumeSliderBox({
  img,
  title,
  description,
  link,
}: ResumeSliderProps) {
  const [hover, setHover] = useState(false);

  return (
    <article
      className="w-[99.8%] bg-white/30 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover(true)}
    >
      {/* باکس کانتینر عکس */}
      <div className="w-full h-40 overflow-hidden rounded-t-xl relative bg-gray-100">
        <img
          src={img}
          alt={title}
          // تغییرات در اینجا اعمال شد:
          // 1. استفاده از min-h-full برای اطمینان از پر شدن قاب
          // 2. استفاده از style برای محاسبه دقیق اسکرول
          className="w-full min-h-full object-cover transition-transform duration-[4000ms] ease-linear will-change-transform"
          style={{
            transform: hover 
              ? "translateY(calc(-100% + 160px))" // کل عکس بره بالا منهای ارتفاع کادر (160 پیکسل)
              : "translateY(0)",
          }}
        />
      </div>

      <div className="p-3 flex flex-col gap-2 relative">
        <h3 className="text-base font-bold text-[var(--main-color)] flex items-center gap-2">
          <GrBlockQuote className={"text-[var(--main-color)]"} />
          <span>{title}</span>
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 min-h-10">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="mt-2 relative inline-block text-center bg-[var(--main-color)] text-white rounded-lg py-2 text-sm hover:bg-[var(--main-color)]/50 transition-all overflow-hidden"
        >
          {/* آیکون‌ها و محتوای دکمه بدون تغییر باقی ماندند */}
          <Image
            width={20}
            height={20}
            src="/acropolis--32354.png"
            alt=""
            className={`
              absolute right-6 top-1 w-4 h-4 grayscale object-contain pointer-events-none
              opacity-0 scale-0 translate-y-2 translate-x-2
              transition-all duration-500
              ${hover ? "opacity-40 scale-100 -translate-y-4 translate-x-4" : ""}
            `}
          />
          <Image
            width={20}
            height={20}
            src="/persian--32384.png"
            alt=""
            className={`
              absolute left-2 bottom-2 w-4 h-4 grayscale object-contain pointer-events-none
              opacity-0 scale-0 translate-y-2 -translate-x-2
              transition-all duration-500 delay-100
              ${hover ? "opacity-40 scale-100 -translate-y-10 translate-x-4" : ""}
            `}
          />
          <Image
            width={20}
            height={20}
            src="/zoroastrianism--32402.png"
            alt=""
            className={`
              absolute right-1 bottom-1 w-4 h-4 grayscale object-contain pointer-events-none
              opacity-0 scale-0 -translate-y-1 translate-x-1
              transition-all duration-500 delay-200
              ${hover ? "opacity-40 scale-100 -translate-y-10 translate-x-12" : ""}
            `}
          />
          مشاهده بیشتر
        </a>
      </div>
    </article>
  );
}