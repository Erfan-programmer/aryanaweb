"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function ContactUsSection() {
  const t = useTranslations("ContactUsSection");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  return (
    <section
      className="contact-us-section relative bg-[var(--main-color)] py-16 md:py-24 overflow-hidden text-white my-20 mt-32"
      id="contact_us"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-40 md:w-72 lg:w-96">
        <Image
          src="/topbar-shape.png"
          alt=""
          width={450}
          height={450}
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 max-w-xl md:max-w-2xl mx-auto text-center px-4 mt-10 md:mt-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          {t("title")}
        </h2>
        <p className="text-xs sm:text-sm md:text-base mb-6 md:mb-10 opacity-90 leading-7">
          {t("description")}
        </p>

        <form className="bg-white text-[#888] rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 space-y-4 md:space-y-5">
          <input
            type="text"
            className="border border-gray-300 rounded-xl px-4 py-2.5 bg-gray-50 text-[#222] outline-none focus:ring-2 focus:ring-[var(--main-color)] duration-300 w-full placeholder:text-start"
            placeholder={t("placeholders.name")}
          />

          <input
            type="text"
            className="border border-gray-300 rounded-xl px-4 py-2.5 bg-gray-50 text-[#222] outline-none focus:ring-2 focus:ring-[var(--main-color)] duration-300 w-full placeholder:text-start dir-ltr text-left"
            placeholder={t("placeholders.phone")}
          />

          <textarea
            className="border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-[#222] outline-none focus:ring-2 focus:ring-[var(--main-color)] duration-300 h-28 md:h-32 resize-none w-full placeholder:text-start"
            placeholder={t("placeholders.message")}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[var(--main-color)] text-white py-3 rounded-xl font-bold hover:bg-opacity-80 duration-300"
          >
            {t("button")}
          </button>
        </form>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full stroke-white"
      >
        <path
          className="fill-white"
          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
        ></path>
      </svg>
    </section>
  );
}