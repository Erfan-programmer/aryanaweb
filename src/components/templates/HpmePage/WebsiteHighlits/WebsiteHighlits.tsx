"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import HighlightItem from "./HighlightItem";
import StoryViewer from "./StoryViewer";
import { HighlightData } from "@/types/type";
import { useTranslations, useLocale } from "next-intl";

export default function WebsiteHighlights() {
  const t = useTranslations("WebsiteHighlights");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const highlightsData: HighlightData[] = [
    { id: 1, key: "siteDesign", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 2, key: "application", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 3, key: "automation", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 4, key: "portfolio", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 5, key: "crm", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 6, key: "education", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 7, key: "consulting", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
    { id: 8, key: "seo", img: "/459725486_1085086939886582_2878224217257692386_n.jpg" },
  ].map((item) => ({
    id: item.id,
    coverImage: item.img,
    title: t(`items.${item.key}.title`),
    description: t(`items.${item.key}.description`),
  }));

  const openStory = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeStory = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section 
      className="w-full py-8 overflow-hidden bg-[var(--main-color)] sm:bg-[#fff]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        
        <div className="block sm:hidden w-full">
          <Swiper
            key={locale} 
            dir={isRtl ? "rtl" : "ltr"}
            modules={[FreeMode]}
            spaceBetween={15}
            slidesPerView="auto"
            freeMode={true}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            grabCursor={true}
            className="w-full !px-0"
          >
            {highlightsData.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-auto first:ml-0">
                <HighlightItem
                  item={item}
                  onClick={() => openStory(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {highlightsData.map((item, index) => (
            <HighlightItem
              key={item.id}
              item={item}
              onClick={() => openStory(index)}
            />
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <StoryViewer
            stories={highlightsData}
            initialIndex={selectedIndex}
            onClose={closeStory}
          />
        )}
      </AnimatePresence>
    </section>
  );
}