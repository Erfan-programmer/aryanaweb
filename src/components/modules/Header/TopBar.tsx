"use client";
import TextType from "@/components/templates/HeroSection/CircularText";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TopBar() {
  const t = useTranslations("TopBar");
  

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
        <nav className="bg-[var(--main-color)] w-full overflow-hidden">
          <div
            className="
              flex flex-col md:flex-row
              items-center md:items-center
              justify-between
              max-w-7xl mx-auto py-2 px-4
              text-white gap-2 md:gap-0
              text-center md:text-right
            "
          >
            <span className="w-full whitespace-nowrap text-sm md:text-base">
              <TextType
                text={[t("workingHours")]}
                typingSpeed={75}
                pauseDuration={4000}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>

            <div className="w-full whitespace-nowrap text-sm md:text-base">
              <TextType
                text={[t("address")]}
                typingSpeed={75}
                pauseDuration={4000}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}