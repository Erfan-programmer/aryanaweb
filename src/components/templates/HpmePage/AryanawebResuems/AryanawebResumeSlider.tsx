"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import AryanawebResumeSliderBox from "./AryanawebResumeSliderBox";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react"; // تغییر 1: ایمپورت useState

export default function AryanawebResumeSlider() {
  const t = useTranslations("AryanawebResumeSlider");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  // تغییر 2: استفاده از useState به جای useRef
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const items = [
    { img: "/darbar-screen.jpg", link: "https://darbartabriz.com" },
    { img: "/shirzad.jpg", link: "https://shirzadpic.com" },
    { img: "/sibisto.jpg", link: "https://example2.com" },
    { img: "/titan.jpg", link: "https://example2.com" },
    { img: "/business-app.jpg", link: "" },
  ].map((item, index) => ({
    ...item,
    title: t(`items.${index}.title`),
    description: t(`items.${index}.desc`),
  }));

  return (
    <div className="w-full mt-12 sm:mt-0 relative group">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        dir={isRtl ? "rtl" : "ltr"}
        key={locale}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // تغییر 3: پاس دادن مستقیم استیت‌ها به navigation
        navigation={{
          prevEl,
          nextEl,
        }}
        // نکته: onBeforeInit دیگر برای نویگیشن لازم نیست
        className="overflow-hidden py-4"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          480: { slidesPerView: 2, spaceBetween: 8 },
          640: { slidesPerView: 3.5, spaceBetween: 20 },
        }}
        onSwiper={(swiper) => {
          swiper.el.addEventListener("mouseenter", () =>
            swiper.autoplay.stop()
          );
          swiper.el.addEventListener("mouseleave", () =>
            swiper.autoplay.start()
          );
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <AryanawebResumeSliderBox
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه‌های کاستوم نویگیشن */}
      {/* تغییر 4: استفاده از ref فانکشنال برای ست کردن استیت */}
      <button 
        ref={(node) => setPrevEl(node)}
        className={`swiper-prev absolute cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-[var(--main-color)] hover:bg-[var(--main-color)]/80 text-white p-3 rounded-full shadow-md transition  duration-300 ${isRtl ? '-right-4' : '-left-4'}`}
      >
        {isRtl ? <FaAngleRight size={22} /> : <FaAngleLeft size={22} />}
      </button>
      
      <button 
        ref={(node) => setNextEl(node)}
        className={`swiper-next absolute cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-[var(--main-color)] hover:bg-[var(--main-color)]/80 text-white p-3 rounded-full shadow-md transition duration-300 ${isRtl ? '-left-4' : '-right-4'}`}
      >
        {isRtl ? <FaAngleLeft size={22} /> : <FaAngleRight size={22} />}
      </button>
    </div>
  );
}