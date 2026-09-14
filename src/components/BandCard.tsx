import Image from "next/image";
// ดึง component Image ของ Next.js มาใช้แทน <img> ธรรมดา
// เพื่อให้ได้ฟีเจอร์ปรับขนาดรูปอัตโนมัติ, lazy loading, ป้องกัน layout shift

import { Band } from "@/types/band";
// ดึง type Band มาใช้ เพื่อบอก TypeScript ว่าข้อมูลวงดนตรีต้องมีโครงสร้างหน้าตาแบบไหน

type BandCardProps = {
  band: Band; // component นี้ต้องรับ props ชื่อ band ซึ่งมีรูปแบบตาม type Band เท่านั้น

  // ↓↓↓ เพิ่มเข้ามาใหม่ทั้งหมด 4 บรรทัดนี้ เพื่อรองรับฟีเจอร์ follow และ like ↓↓↓
  isFollowing: boolean;       // เพิ่มเข้ามาใหม่: บอกว่าวงนี้กำลังถูกติดตามอยู่หรือไม่ (ค่ามาจาก state ที่อยู่ใน BandList ไม่ได้เก็บเองในการ์ด)
  onToggleFollow: () => void; // เพิ่มเข้ามาใหม่: ฟังก์ชันที่จะถูกเรียกตอนกดปุ่มติดตาม/เลิกติดตาม (ตัว logic จริงอยู่ที่ BandList)
  likeCount: number;          // เพิ่มเข้ามาใหม่: จำนวน like ปัจจุบันของวงนี้ (มาจาก state ใน BandList เช่นกัน)
  onLike: () => void;         // เพิ่มเข้ามาใหม่: ฟังก์ชันที่จะถูกเรียกตอนกดปุ่ม like
};

export default function BandCard({
  band,
  // เพิ่มเข้ามาใหม่: destructure props ใหม่ 4 ตัวออกมาจาก props ด้วย เหมือนกับที่ destructure band
  isFollowing,
  onToggleFollow,
  likeCount,
  onLike,
}: BandCardProps) {
  // ประกาศ component ชื่อ BandCard และ destructure ดึงค่า band ออกมาจาก props ทันที
  return (
    // เปลี่ยนสีพื้นหลัง: จาก slate/emerald (เขียว-เทา) เป็น pink/sky (ชมพู-ฟ้า)
    // ปรับเพิ่มความหรู: rounded-xl -> rounded-2xl (โค้งมนขึ้นเล็กน้อย), shadow-lg -> shadow-xl พร้อมเพิ่ม ring-1 ring-black/5 (เส้นขอบบางจางๆ แทนเงาทึบ)
    // เพิ่ม padding เล็กน้อย (p-3→p-4, p-4→p-5, p-6→p-7) ให้เนื้อหาดูโปร่ง ไม่อัดแน่น
    <article className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 bg-gradient-to-b from-pink-100 via-fuchsia-300 to-sky-400 p-4 sm:p-5 lg:p-7 w-full h-full flex flex-col">
      {/* <article> คือ container หลักของการ์ดแต่ละใบ */}
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

      {/* ปรับเพิ่มความหรู: เพิ่ม font-serif ให้ชื่อวง (serif ให้ความรู้สึกหรูคลาสสิกกว่า sans-serif ตัวหนาเยอะๆ)
          เปลี่ยน font-extrabold -> font-bold เพราะ serif ตัวหนามากไปจะดูหนักเกิน */}
      <h2 className="text-white font-serif text-xl sm:text-2xl lg:text-4xl font-bold text-center mt-4 lg:mt-6 tracking-wide">
        {band.name}
      </h2>

      {/* เพิ่มเข้ามาใหม่: เส้นคั่นบางๆ ระหว่างชื่อวงกับแนวเพลง ช่วยให้ดูมีการจัดวางที่ตั้งใจมากขึ้น (structural device) */}
      <div className="w-8 h-px bg-white/40 mx-auto my-2" />

      {/* เปลี่ยนสี: text-blue-200 -> text-sky-200 */}
      <p className="text-sky-800 text-xs sm:text-sm lg:text-base text-center mt-1">
        แนวเพลง: {band.genre}
      </p>

      {/* เพิ่มเข้ามาใหม่: แสดงจำนวนสมาชิกและปีก่อตั้ง
          ดึงจำนวนสมาชิกจาก band.members.length ตรงๆ ไม่ได้เพิ่ม state ใหม่ 
          ส่วน foundedYear ดึงมาจาก field ใหม่ที่เพิ่งเพิ่มเข้า type Band */}
      {/* เปลี่ยนสี: text-blue-200 -> text-sky-200 */}
      <p className="text-sky-800 text-xs sm:text-sm text-center">
        สมาชิก {band.members.length} คน · ก่อตั้งปี {band.foundedYear}
      </p>

      {/* เปลี่ยนสี: text-blue-100 -> text-sky-100 */}
      <p className="text-sky-800 text-xs sm:text-sm text-center mt-2 px-2">
        {band.description}
      </p>

      {/* เพิ่มเข้ามาใหม่ทั้ง: ปุ่ม Follow และปุ่ม Like ของการ์ดนี้ */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {/* เพิ่มเข้ามาใหม่: ปุ่มติดตาม/เลิกติดตาม
            onClick เรียก onToggleFollow ที่รับมาจาก props (การ์ดเองไม่ได้ตัดสินใจอะไร แค่บอก parent ว่า "ถูกกด")
            className ใช้ isFollowing เปลี่ยนสีปุ่มให้ต่างกันระหว่างสถานะ follow อยู่ กับยังไม่ follow
            ปรับเพิ่มความหรู: rounded-full -> rounded-md (ดูเป็นทางการกว่าปุ่มโค้งมนแบบแอปมือถือ)
            font-semibold -> font-medium tracking-wide (ตัวหนังสือบางลง เว้นระยะห่างตัวอักษร ดูสุขุมขึ้น) */}
        <button
          onClick={onToggleFollow}
          className={`px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium tracking-wide border transition ${
            isFollowing
              ? "bg-white text-pink-700 border-white" // เปลี่ยนสี: text-emerald-900 -> text-pink-700
              : "bg-transparent text-white border-pink-200 hover:bg-white/10" // เปลี่ยนสี: border-white/60 -> border-pink-200
          }`}
        >
          {isFollowing ? "กำลังติดตาม ✓" : "+ ติดตาม"}
        </button>

        {/* เพิ่มเข้ามาใหม่: ปุ่ม like แสดงจำนวน like ปัจจุบันควบคู่ไปด้วย
            onClick เรียก onLike ที่รับมาจาก props เหมือนกับปุ่ม follow
            ปรับเพิ่มความหรู: rounded-full -> rounded-md, font-semibold -> font-medium tracking-wide (เหมือนปุ่ม follow ด้านบน) */}
        {/* เปลี่ยนสี: border-white/60 -> border-pink-200 */}
        <button
          onClick={onLike}
          className="px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium tracking-wide border border-pink-200 text-white hover:bg-white/10 transition flex items-center gap-1"
        >
          ❤️ {likeCount}
        </button>
      </div>

      <div className="mt-4 sm:mt-auto pb-2 w-full">
        <p className="text-white font-semibold mb-2 text-center text-xs sm:text-sm lg:text-base">สมาชิก:</p>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 place-items-center w-full max-w-fit mx-auto">
          {band.members.map((member, index) => (
            <div key={index} className="text-center w-14 sm:w-16 lg:w-20">
              {/* ปรับเพิ่มความหรู: border-2 border-white -> border border-white/50 (ขอบบางลงและโปร่งแสง แทนขอบขาวหนาทึบ ดูสุขุมกว่า) */}
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={80}
                height={80}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full object-cover mx-auto border border-white/50"
              />
              <p className="text-white text-[10px] sm:text-xs lg:text-sm mt-1">{member.name}</p>

              {/* เปลี่ยนสี: text-blue-100 -> text-sky-100 */}
              <p className="text-sky-100 text-[8px] sm:text-[9px] lg:text-[10px] leading-tight h-[2.4em] flex items-start justify-center overflow-hidden">
                {member.fullName}
              </p>

               {/* ตำแหน่ง/หน้าที่ของสมาชิกในวง เช่น นักร้องนำ, มือกีตาร์โครงสร้าง className เหมือนบรรทัด fullName ด้านบน
                    เพื่อควบคุมความสูงให้คงที่และตัดข้อความที่ล้นทิ้งเช่นกันต่างกันแค่สี (text-blue-200) และขนาด/ความสูงเล็กน้อย
                    เพื่อให้ดู "รอง" ลงมาจากชื่อเต็ม */}
              {/* เปลี่ยนสี: text-blue-200 -> text-sky-200 */}
              <p className="text-sky-200 text-[9px] sm:text-[10px] lg:text-xs leading-tight h-[2.2em] flex items-start justify-center overflow-hidden">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}