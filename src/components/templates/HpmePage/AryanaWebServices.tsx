"use client";
import AryanaWervicesBox from "./AryanaWervicesBox";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRef } from "react";

export default function AryanaWebServices() {
  const t = useTranslations("AryanaWebServices");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";
  
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const servicesImages = [
    "/world-wide-web.png",
    "/robot-dog.png",
    "/ui.png",
    "/mobile-phone.png",
    "/world-wide-web.png",
  ];

  const aryanaServices = servicesImages.map((img, index) => ({
    title: t(`services.${index}.title`),
    description: t(`services.${index}.desc`),
    img: img,
  }));

  return (
    <section 
      className="aryana-web-services py-20 max-w-7xl mx-auto mt-20" 
      id="services"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <h2 className="font-bold text-2xl text-center mb-6 flex items-center gap-2 justify-center relative w-fit mx-auto">
        <div className="absolute -top-14 right-1 z-[-1] opacity-40">
          <Image
            src={"/1000_F_1139204807_JCJfshiKDyMsv5Kf7Le1uvk7aQ51OslA.jpg"}
            width={200}
            height={200}
            alt=""
            className="w-20 h-20"
          />
        </div>
        <span>{t("titlePart1")}</span>
        <span className="text-[var(--main-color)] relative">{t("titlePart2")}</span>
      </h2>

      <p className="text-center text-gray-600 mb-10">
        {t("description")}
      </p>

      <div className="relative group px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full !py-4"
          dir={isRtl ? "rtl" : "ltr"}
          key={locale}
        >
          {aryanaServices.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <AryanaWervicesBox
                key={index}
                title={item.title}
                index={index}
                description={item.description}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div 
            ref={prevRef}
            className={`absolute top-1/2 -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center w-10 h-10 bg-white text-[var(--main-color)] rounded-full shadow-lg border border-gray-100 hover:bg-[var(--main-color)] hover:text-white transition-all duration-300 hover:scale-110 ${isRtl ? 'right-0 sm:-right-4' : 'left-0 sm:-left-4'}`}
        >
          {isRtl ? <FaAngleRight size={20} /> : <FaAngleLeft size={20} />}
        </div>

        <div 
            ref={nextRef}
            className={`absolute top-1/2 -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center w-10 h-10 bg-white text-[var(--main-color)] rounded-full shadow-lg border border-gray-100 hover:bg-[var(--main-color)] hover:text-white transition-all duration-300 hover:scale-110 ${isRtl ? 'left-0 sm:-left-4' : 'right-0 sm:-right-4'}`}
        >
          {isRtl ? <FaAngleLeft size={20} /> : <FaAngleRight size={20} />}
        </div>
      </div>
    </section>
  );
}