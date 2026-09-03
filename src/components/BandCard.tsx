import Image from "next/image";
// ดึง component Image ของ Next.js มาใช้แทน <img> ธรรมดา
// เพื่อให้ได้ฟีเจอร์ปรับขนาดรูปอัตโนมัติ, lazy loading, ป้องกัน layout shift

import { Band } from "@/types/band";
// ดึง type Band มาใช้ เพื่อบอก TypeScript ว่าข้อมูลวงดนตรีต้องมีโครงสร้างหน้าตาแบบไหน

type BandCardProps = {
  band: Band; // component นี้ต้องรับ props ชื่อ band ซึ่งมีรูปแบบตาม type Band เท่านั้น
};

export default function BandCard({ band }: BandCardProps) {
  // ประกาศ component ชื่อ BandCard และ destructure ดึงค่า band ออกมาจาก props ทันที
  return (
    <article className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-slate-90 via-emerald-950 to-emerald-800 p-3 sm:p-4 lg:p-6 w-full h-full flex flex-col">
      <div className="relative w-full aspect-square">
        <Image
          src={band.imageUrl}
          alt={band.name}
          fill
          priority={band.id === 1}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover rounded-md shadow-md"
        />
      </div>

      <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-extrabold text-center mt-4 lg:mt-6 tracking-wide">
        {band.name}
      </h2>

      <p className="text-blue-200 text-xs sm:text-sm lg:text-base text-center mt-1">
        แนวเพลง: {band.genre}
      </p>

      <p className="text-blue-100 text-xs sm:text-sm text-center mt-2 px-2">
        {band.description}
      </p>

      <div className="mt-4 sm:mt-auto pb-2 w-full">
        <p className="text-white font-semibold mb-2 text-center text-xs sm:text-sm lg:text-base">สมาชิก:</p>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 place-items-center w-full max-w-fit mx-auto">
          {band.members.map((member, index) => (
            <div key={index} className="text-center w-14 sm:w-16 lg:w-20">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={80}
                height={80}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full object-cover mx-auto border-2 border-white"
              />
              <p className="text-white text-[10px] sm:text-xs lg:text-sm mt-1">{member.name}</p>
              <p className="text-blue-100 text-[8px] sm:text-[9px] lg:text-[10px] leading-tight h-[2.4em] flex items-start justify-center overflow-hidden">
                {member.fullName}
              </p>
              <p className="text-blue-200 text-[9px] sm:text-[10px] lg:text-xs leading-tight h-[2.2em] flex items-start justify-center overflow-hidden">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}