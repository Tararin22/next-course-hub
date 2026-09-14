import bands from "@/data/banddata"; // ดึงข้อมูลมากจาก banddata.ts เข้ามาใช้ในนี้
import BandList from "@/components/BandList"; // แก้ไข: เปลี่ยนจาก BandCard เป็น BandList เพราะตอนนี้ logic ทั้งหมด (search/follow/like/sort) ย้ายไปอยู่ใน BandList แล้ว หน้านี้แค่ส่งข้อมูลต่อให้เท่านั้น

export default function BandsPage() {  //ฟังก์ชันนี้คือสิ่งที่จะถูกเรียกมาแสดงผลตอนเข้าหน้านั้น
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
        วงดนตรีที่ชื่นชอบ
      </h1>

      {/* ส่ง bands ทั้งหมดให้ BandList ไปจัดการ filter/sort/follow/like เอง
          ไม่ map BandCard ตรงๆ ที่นี่แล้ว เพราะ logic ทั้งหมดย้ายไปอยู่ใน BandList */}
      <BandList bands={bands} />
    </div>
  );
}

//<div className="p-6">  ระยะห่างจากขอบจอเข้ามา
//<h1 className="text-2xl font-bold mb-4">วงดนตรีที่ชื่นชอบ
//</h1> หัวข้อ ขนาด 2xl ตัวหนา ระยะห่างจากด้านล่าง mb-4