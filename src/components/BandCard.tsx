import Image from "next/image"; //ดึง component Image ของ Next.js เข้ามาใช้ (แทน <img> ธรรมดา) เพื่อให้ได้ฟีเจอร์ปรับขนาดรูปอัตโนมัติ
import { Band } from "@/types/band";
//ดึง type Band ที่นิยามไว้ในไฟล์ types/band.ts เข้ามา เพื่อบอก TypeScript ว่าข้อมูลวงดนตรีต้องมีโครงสร้างหน้าตาแบบไหน

type BandCardProps = {
  band: Band; //กำหนดว่า component นี้จะรับ props ชื่อ band เพียงตัวเดียว และค่าที่ส่งเข้ามาต้องมีรูปแบบตาม type Band
};

export default function BandCard({ band }: BandCardProps) { //ประกาศ component ชื่อ BandCard รับ props เข้ามาแล้ว destructure ดึงค่า band ออกมาใช้ตรงๆ ทันที (แทนที่จะต้องเขียน props.band ทุกครั้ง)
  return (
    <article className="relative overflow-hidden rounded-xl shadow-lg mb-12 bg-gradient-to-b from-slate-80 via-blue-90 to-blue-900 p-3 max-w-sm mx-auto">
      <div className="flex justify-center"> //จัดให้รูปอยู่กึ่งกลางแนวนอน
        <Image
          src={band.imageUrl} //ดึงรูป
          alt={band.name} // คำอธิบาย
          width={300} //สัดส่วนต้นฉบับที่ Next.js ใช้คำนวณ (ป้องกัน layout shift)
          height={200}
          priority={band.id === 1} //เฉพาะวงแรก (id: 1) ให้โหลดรูปทันทีแบบ priority ส่วนวงอื่น lazy load ตามปกติ
          sizes="(max-width: 400px) 100vw, 400px" //บอก Next.js ให้เลือกขนาดไฟล์รูปที่เหมาะกับหน้าจอ
          className="w-auto max-h-80 rounded-md shadow-md"
        />
      </div>

      <h2 className="text-white text-4xl font-extrabold text-center mt-6 tracking-wide">
        {band.name}
      </h2>
      <p className="text-blue-200 text-center mt-1">แนวเพลง: {band.genre}</p>

      <div className="mt-4 text-center">
        <p className="text-white font-semibold mb-1">สมาชิก:</p>
        <ul className="text-blue-100">
          {band.members.map((member, index) => (
            <li key={index}>
              {member.name} — {member.role}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
