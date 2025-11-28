"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TopBar from "./TopBar";

import { 
  FaHome, 
  FaPhoneVolume, 
  FaBlog, 
  FaGraduationCap, 
  FaBriefcase,
  FaGlobe,
  FaChevronDown
} from "react-icons/fa";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  
  // Ref برای دسکتاپ
  const langMenuRef = useRef<HTMLDivElement>(null);
  // Ref جدید برای موبایل
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const isRtl = locale === "fa" || locale === "ar";

  const languages = [
    { code: "fa", name: "فارسی", flag: "🇮🇷", dir: "rtl" },
    { code: "en", name: "English", flag: "🇺🇸", dir: "ltr" },
    { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  ];

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      // بررسی می‌کنیم که آیا کلیک بیرون از دسکتاپ AND بیرون از موبایل بوده است
      const isOutsideDesktop = langMenuRef.current && !langMenuRef.current.contains(target);
      const isOutsideMobile = mobileLangRef.current && !mobileLangRef.current.contains(target);

      if (isOutsideDesktop && isOutsideMobile) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  const menuItems = [
    { title: t("menu.home"), href: "/", icon: <FaHome size={18} /> },
    { title: t("menu.services"), href: "/#services", icon: <FaBriefcase size={18} /> },
    { title: t("menu.education"), href: "/education", icon: <FaGraduationCap size={18} /> },
    { title: t("menu.blog"), href: "/blog", icon: <FaBlog size={18} /> },
    { title: t("menu.contact"), href: "/#contact_us", icon: <FaPhoneVolume size={18} /> },
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <TopBar />

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
          
          <div className="w-16 h-16 md:w-20 md:h-20 relative shrink-0">
            <Image
              src="/Ariyana Logo.png"
              alt="Ariyana Logo"
              width={400}
              height={400}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-500 font-medium text-sm lg:text-base">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-[var(--main-color)] transition-colors"
                >
                  {index === 0 && item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-[var(--main-color)] transition-colors border border-gray-200 px-2 py-1.5 rounded-lg"
              >
                <FaGlobe size={18} />
                <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
                <FaChevronDown size={10} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className={`absolute top-full mt-2 bg-white border border-gray-100 shadow-xl rounded-xl w-32 overflow-hidden z-50 ${isRtl ? 'left-0' : 'right-0'}`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                          lang.code === locale 
                          ? 'bg-[var(--main-color)]/10 text-[var(--main-color)]' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--main-color)]'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-start gap-2 text-gray-600">
              <div className={`flex flex-col text-sm ${isRtl ? 'items-end' : 'items-start'}`}>
                <a href="tel:09918040507" className="font-semibold text-gray-800 tracking-wider hover:text-[var(--main-color)] dir-ltr">
                  09918040507
                </a>
                <a href="tel:09025205618" className="font-semibold text-gray-800 tracking-wider hover:text-[var(--main-color)] dir-ltr">
                  09025205618
                </a>
                <span className="text-gray-500 text-xs">{t("actions.contactLabel")}</span>
              </div>
              <FaPhoneVolume size={24} className="text-[var(--main-color)] mt-1" />
            </div>

            <Link href="/login" className="flex items-center gap-2 bg-[var(--main-color)] text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-[#FF8C42] transition-all text-sm">
              <FiLogIn size={18} className={isRtl ? "rotate-180" : ""} />
              <span>{t("actions.login")}</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* اضافه کردن ref جدید به این بخش */}
            <div className="relative" ref={mobileLangRef}>
              <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setLangOpen(!langOpen);
                }}
                className="flex items-center gap-1 text-gray-600 hover:text-[var(--main-color)] bg-gray-50 border border-gray-200 px-2 py-1.5 rounded-lg"
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-xs font-bold">{currentLang.code.toUpperCase()}</span>
                <FaChevronDown size={10} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langOpen && (
                <div className={`absolute top-full mt-2 bg-white border border-gray-100 shadow-xl rounded-xl w-32 overflow-hidden z-50 ${isRtl ? 'left-0' : 'right-0'}`}>
                   {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                          lang.code === locale 
                          ? 'bg-[var(--main-color)]/10 text-[var(--main-color)]' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--main-color)]'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(true)}
            >
              <FiMenu size={30} />
            </button>
          </div>
        </nav>

        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`fixed top-0 h-full w-[85%] max-w-[300px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col 
            ${isRtl 
                ? `left-0 ${open ? "translate-x-0" : "-translate-x-full"}`
                : `right-0 ${open ? "translate-x-0" : "translate-x-full"}`
            }
          `}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="w-12 h-12 relative">
               <Image src="/Ariyana Logo.png" alt="Logo" width={200} height={200} className="w-full h-full object-contain" />
            </div>
            <button onClick={() => setOpen(false)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-all">
              <FiX size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl text-gray-700 font-medium hover:bg-[var(--main-color)] hover:text-white hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-[var(--main-color)] group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4">
            
            <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">{t("actions.phoneTitle")}</span>
                <a href="tel:09918040507" className="font-bold text-gray-800 hover:text-[var(--main-color)] dir-ltr text-right">09918040507</a>
                <a href="tel:09025205618" className="font-bold text-gray-800 hover:text-[var(--main-color)] dir-ltr text-right">09025205618</a>
              </div>
              <div className="bg-[var(--main-color)]/10 p-2 rounded-full">
                 <FaPhoneVolume size={20} className="text-[var(--main-color)]" />
              </div>
            </div>

            <Link href="/login" className="w-full flex items-center justify-center gap-2 bg-[var(--main-color)] text-white font-semibold px-4 py-3 rounded-xl shadow-md hover:bg-[#FF8C42] transition-all">
              <FiLogIn size={20} className={isRtl ? "rotate-180" : ""} />
              <span>{t("actions.login")}</span>
            </Link>
          </div>
        </div>

      </header>
    </div>
  );
}