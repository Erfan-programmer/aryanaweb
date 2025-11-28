"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HighlightData } from "@/types/type";

interface Props {
  item: HighlightData;
  onClick: () => void;
}

export default function HighlightItem({ item, onClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={onClick}>
      <motion.div
        whileHover={{ rotate: 3 }}
        className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-lg group-hover:shadow-red-500/50 transition-shadow duration-300"
      >
        <div className="p-[2px] bg-white rounded-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative">
            <Image
              src={item.coverImage}
              alt={item.title}
              fill
              className="object-cover group-hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </motion.div>
      <span className="text-xs sm:text-sm font-bold text-white sm:text-gray-900 text-center truncate w-20">
        {item.title}
      </span>
    </div>
  );
}