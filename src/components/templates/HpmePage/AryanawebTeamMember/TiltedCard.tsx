"use client";
import type { SpringOptions } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useAnimate } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import GlassIcons from "./GlassIcons";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [hovering, setHovering] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!hovering) {
      animate(
        scope.current,
        {
          y: [0, -10, 10, -5, 0],
        },
        {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }
      );
    } else {
      animate(scope.current, { y: 0 }, { duration: 0.2 });
    }
  }, [hovering]);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    setHovering(true);
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    setHovering(false);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

 
const items = [
  {
    icon: <FaTelegram />,
    color: "telegram",
    label: "Telegram",
    instaUrl:  "https://www.instagram.com/vahidfoto__?igsh=bWxybm12dGdleWVo",
    linkUrl:"https://linkedin.com",
    telegramUrl: "https://t.me/@vahidfotohiii",
  },
 
 
 
  {
    icon: <FaInstagram />,
    color: "instagram",
    label: "Instagram",
    instaUrl: "https://www.instagram.com/erfan_kmi80?igsh=bTI3NzlrcWZzdmhz",
    linkUrl:"https://linkedin.com",
    telegramUrl: "https://t.me/@erfan_kzemi",  },
  {
    icon: <FaLinkedin />,
    color: "linkedin",
    label: "LinkedIn",
    instaUrl: "https://www.instagram.com/murat.stack?igsh=cmt3YXljMzZjM3dz",
    linkUrl:"https://www.linkedin.com/in/mohammad-moradzade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    telegramUrl: "https://t.me/@Mohammad_moradzade",  },
];

  return (
    <div className="flex flex-col justify-center items-center">
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={scope}
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
       

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute bottom-4 w-[90%] left-1/2 -translate-x-1/2 z-[3] will-change-transform [transform:translateZ(40px)] px-4 py-2 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.15)] text-[var(--main-color)] font-semibold text-center transition-all duration-300 flex flex-col justify-center items-center">
            {overlayContent}
            <Image
              src={"/zoroastrianism--32402.png"}
              width={200}
              height={200}
              className="w-8 h-8 absolute z-[-1] grayscale opacity-25"
              alt=""
            />
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
       <div className="relative">
          <GlassIcons items={items} className="custom-class" />
        </div>
    </div>
  );
}
