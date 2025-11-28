"use client";
import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  instaUrl: string;
  telegramUrl: string;
  linkUrl: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  instagram: "#bbb",
  telegram: "#bbb",
  linkedin: "#bbb",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleClick = (item: GlassIconsItem) => {
    let url = "";
    if (item.color === "instagram") url = item.instaUrl;
    else if (item.color === "telegram") url = item.telegramUrl;
    else if (item.color === "linkedin") url = item.linkUrl;

    if (url) window.open(url, "_blank");
  };

  return (
    <div className={`grid gap-4 grid-cols-3 mx-auto py-[3em] ${className || ""}`}>
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[3em] h-[3em] [perspective:24em] [transform-style:preserve-3d] group ${item.customClass || ""}`}
          onClick={() => handleClick(item)}
        >
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.5em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.5em] bg-[hsla(0,0%,100%,0.15)] transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center" aria-hidden="true">
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-sm opacity-0 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
