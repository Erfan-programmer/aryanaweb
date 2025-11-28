"use client";
import Image from "next/image";
import TiltedCard from "./TiltedCard";
import { useTranslations, useLocale } from "next-intl";

export default function AryanawebTeamMember() {
  const t = useTranslations("AryanawebTeamMember");
  const locale = useLocale();
  const isRtl = locale === "fa" || locale === "ar";

  const teamMembers = [
    {
      id: 1,
      imageSrc: "/vahid.jpg",
      altText: t("members.0.alt"),
      captionText: t("members.0.role"),
    },
    {
      id: 2,
      imageSrc: "/mamad.jpg",
      altText: t("members.1.alt"),
      captionText: t("members.1.role"),
    },
    {
      id: 3,
      imageSrc: "/erfan.jpg",
      altText: t("members.2.alt"),
      captionText: t("members.2.role"),
    },
  ];

  return (
    <section 
      className="aryana-web-team-member py-12 md:py-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Title */}
      <div className="flex flex-col justify-center items-center relative mx-auto text-center">
        <div className="absolute -top-10 right-1/2 translate-x-1/2 z-[-1] opacity-30">
          <Image
            src="/1000_F_1139204807_JCJfshiKDyMsv5Kf7Le1uvk7aQ51OslA.jpg"
            width={200}
            height={200}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>

        <h2 className="text-[#222] font-bold text-2xl md:text-3xl flex gap-2 items-center">
          <span>{t("titlePart1")}</span>
          <span className="text-[var(--main-color)]">{t("titlePart2")}</span>
        </h2>
      </div>

      {/* Team Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 place-items-center px-4">
        {teamMembers.map((member) => (
          <TiltedCard
            key={member.id}
            imageSrc={member.imageSrc}
            altText={member.altText}
            captionText={member.captionText}
            containerHeight="260px"
            containerWidth="260px"
            imageHeight="260px"
            imageWidth="260px"
            rotateAmplitude={12}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-sm md:text-base font-bold text-white bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">
                {member.captionText}
              </p>
            }
          />
        ))}
      </div>
    </section>
  );
}