"use client";
import React from "react";
import { FaSuperpowers } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

export default function AryanawebDigitalMarketing() {
  const t = useTranslations("AryanawebDigitalMarketing");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  return (
    <section 
      className="digital-marketing-section py-10 my-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex relative z-10 flex-col md:flex-row justify-between items-center bg-[var(--main-color)] text-white rounded-4xl p-6 gap-10 md:gap-6 overflow-hidden">

          <div className="absolute inset-0 bg-[url('/persepolis-designsara.ir_.png')] bg-repeat bg-auto bg-center grayscale opacity-10"></div>

          <div className="flex items-center gap-3 text-white px-4 py-3 text-xl relative z-20 w-full md:w-auto justify-center md:justify-start">
            <FaSuperpowers className="text-4xl" />
            <div className="flex flex-col text-center md:text-start">
              <a href="tel:09918040507" className="font-semibold dir-ltr hover:text-gray-200 transition-colors">09918040507</a>
              <a href="tel:09025205618" className="font-semibold dir-ltr hover:text-gray-200 transition-colors">09025205618</a>
              <span className="text-sm opacity-90">{t("contactLabel")}</span>
            </div>
          </div>

          <div className="agendcy-digital-marketing flex-1 mx-auto text-center relative z-20 px-2">
            <h4 className="text-2xl md:text-3xl font-bold mb-2">
              {t("title")}
            </h4>

            <div className="agendcy-desc mx-auto w-full md:w-[70%] text-sm leading-7 text-center opacity-90">
              <span>
                {t("description")}
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center relative z-20 w-full md:w-auto">
            <button className="px-6 py-2 rounded-xl border-[2px] text-[var(--main-color)] border-white bg-white hover:bg-transparent hover:text-white duration-300 transition-all w-full md:w-auto font-medium">
              {t("button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}