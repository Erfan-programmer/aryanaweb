"use client";
import Image from "next/image";
import AryanawebResumeSlider from "./AryanawebResumeSlider";
import { useTranslations, useLocale } from "next-intl";

export default function AryanawebResuems() {
  const t = useTranslations("AryanawebResumes");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  return (
    <section 
      className="aryanaweb-section my-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="aryanaweb-inner max-w-7xl mx-auto px-4">
        <div className="flex items-center flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8">
          
          <div className="aryanaweb-resumes-bio relative text-center lg:text-start w-full lg:w-1/3">
            <div className={`absolute -top-14 z-[-1] opacity-40 ${isRtl ? 'right-1' : 'left-1'}`}>
              <Image
                src="/1000_F_1139204807_JCJfshiKDyMsv5Kf7Le1uvk7aQ51OslA.jpg"
                width={200}
                height={200}
                alt=""
                className="w-20 h-20"
              />
            </div>

            <h2 className="text-[#222] font-bold text-3xl flex gap-2 items-center justify-center lg:justify-start flex-wrap">
              <span>{t("titlePart1")}</span>
              <span className="text-[var(--main-color)]">{t("titlePart2")}</span>
            </h2>

            <div className="aryanaweb-resumes-bio-desc w-full md:w-[80%] mt-4 mx-auto lg:mx-0">
              <span className="text-gray-400 leading-relaxed">
                {t("description")}
              </span>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <AryanawebResumeSlider />
          </div>

        </div>
      </div>
    </section>
  );
}