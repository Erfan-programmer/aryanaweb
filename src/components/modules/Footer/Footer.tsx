"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  return (
    <section 
      className="bg-[var(--main-color)] relative mt-30 min-h-[50vh] pt-20 pb-6 text-white overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >

      <div className="absolute inset-0 bg-[url('/persepolis-designsara.ir_.png')] bg-no-repeat bg-cover bg-center grayscale opacity-10 z-10"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full top-0 rotate-180 stroke-white"
      >
        <path
          className="fill-white"
          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
        ></path>
      </svg>

      <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/Ariyana Logo white_.png"
          alt="Ariyana Logo"
          width={120}
          height={120}
          className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
        />
      </div>

      <footer className={`max-w-7xl mx-auto px-4 sm:px-6 pt-40 pb-14 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 relative z-20 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>

        <div className="flex flex-col gap-4 max-w-sm items-center md:items-start">
          <h2 className="text-2xl font-bold">{t("title")}</h2>
          <p className="text-sm text-white/80 leading-6">
            {t("description")}
          </p>
          <div className="flex gap-5 mt-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors duration-200 transition-all">
              <FaInstagram size={26} />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0088CC] transition-colors duration-200 transition-all">
              <FaTelegram size={26} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors duration-200 transition-all">
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full md:w-auto">

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">{t("columns.services.title")}</h3>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.services.links.webDesign")}</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.services.links.webDev")}</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.services.links.app")}</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">{t("columns.support.title")}</h3>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.support.links.contact")}</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.support.links.faq")}</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.support.links.help")}</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">{t("columns.about.title")}</h3>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.about.links.team")}</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.about.links.products")}</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">{t("columns.about.links.blog")}</a>
          </div>

        </div>
      </footer>

      <div className="border-t border-white/20 mt-4 pt-4 text-center text-xs sm:text-sm text-white font-bold relative z-10 px-4">
        {t("copyright")}
      </div>
    </section>
  );
}