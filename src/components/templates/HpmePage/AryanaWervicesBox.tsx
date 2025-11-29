import Image from "next/image";

const colorPalettes = [
  {
    c1: "bg-blue-500",
    c2: "bg-yellow-400",
    c3: "bg-purple-500",
    c4: "bg-green-500",
    c5: "bg-orange-500",
  },
  {
    c1: "bg-red-500",
    c2: "bg-cyan-400",
    c3: "bg-indigo-500",
    c4: "bg-pink-500",
    c5: "bg-lime-400",
  },
  {
    c1: "bg-sky-500",
    c2: "bg-emerald-500",
    c3: "bg-fuchsia-500",
    c4: "bg-amber-400",
    c5: "bg-gray-400",
  },
  {
    c1: "bg-teal-500",
    c2: "bg-rose-500",
    c3: "bg-violet-500",
    c4: "bg-lime-500",
    c5: "bg-red-400",
  },
];

export default function AryanaWervicesBox({
  title,
  index,
  description,
  img,
}: {
  title: string;
  description: string;
  index: number;
  img: string;
}) {
  const palette = colorPalettes[index % colorPalettes.length];

  return (
    // تغییر ۱: استفاده از group/item به جای group خالی
    <article className="text-[var(--main-color)] shadow-xl w-[80%] mx-auto p-4 rounded-xl relative overflow-hidden group/item h-60 bg-white">
        <Image
          src={"/persepolis-designsara.ir_.png"}
          width={200}
          height={200}
          alt=""
          className="w-full absolute left-0 top-0 grayscale opacity-10"
        />
      
      {/* تغییر ۲: تمام group-hover ها تبدیل به group-hover/item شدند */}
      <div className="absolute top-0 left-0 w-12 h-12 rounded-full z-20 bg-[var(--main-color)]/20 shadow-[0_0_40px_var(--main-color)]/60 transition duration-300 group-hover/item:opacity-0"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 z-20 rounded-full bg-[var(--main-color)]/20 shadow-[0_0_40px_var(--main-color)]/60 transition duration-300 group-hover/item:opacity-0"></div>

      <div
        className={`absolute top-0 left-0 w-8 h-8 rounded-full ${palette.c1} opacity-0 scale-0 transition duration-500 group-hover/item:opacity-30 group-hover/item:scale-150 z-0`}
      ></div>
      <div
        className={`absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 rounded-full ${palette.c2} opacity-0 scale-0 transition duration-600 delay-200 group-hover/item:opacity-20 group-hover/item:scale-200 z-0`}
      ></div>
      <div
        className={`absolute bottom-4 left-4 w-7 h-7 rounded-full ${palette.c3} opacity-0 scale-0 transition duration-700 delay-300 group-hover/item:opacity-20 group-hover/item:scale-175 z-0`}
      ></div>
      <div
        className={`absolute top-4 right-4 w-5 h-5 rounded-full ${palette.c4} opacity-0 scale-0 transition duration-600 delay-100 group-hover/item:opacity-20 group-hover/item:scale-175 z-0`}
      ></div>
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${palette.c5} opacity-0 scale-0 transition duration-500 delay-400 group-hover/item:opacity-20 group-hover/item:scale-150 z-0`}
      ></div>

      <div className="relative z-10">
        <Image
          src={img}
          alt=""
          width={300}
          height={300}
          className="w-24 h-24 mx-auto shadow-lg rounded-full p-4 transition-all duration-300 group-hover/item:scale-x-[-1] bg-white"
        />
        <h3 className="text-center font-bold mt-2">{title}</h3>
        <div className="service-box-desc text-xs text-center text-gray-400 mt-2 h-20">
          <span>{description}</span>
        </div>
      </div>
    </article>
  );
}