import bands from "@/data/banddata"; //ดึงข้อมูลมากจาก banddata.ts เข้ามาใช้ในนี้
import BandCard from "@/components/BandCard"; //ดึง component BandCard แสดงข้อมูลวง 1 วง ที่เราสร้างไว้ เข้ามาใช้ เพื่อใช้แสดงผลแต่ละวง

export default function BandsPage() {  //ฟังก์ชันนี้คือสิ่งที่จะถูกเรียกมาแสดงผลตอนเข้าหน้านั้น
  return (
    <div className="p-6">          
      <h1 className="text-2xl font-bold mb-4">วงดนตรีที่ชื่นชอบ</h1> 
      {bands.map((band) => (  //return ค่าออกมาจาก map
        <BandCard key={band.id} band={band} /> //เรียกใช้ component BandCard สำหรับวงนั้นๆ
      ))}
    </div>
  );
}


//<div className="p-6">  ระยะห่างจากขอบจอเข้ามา
      //<h1 className="text-2xl font-bold mb-4">วงดนตรีที่ชื่นชอบ</h1> หัวข้อ ขนาด 2xl ตัวหนา ระยะห่างจากด้านล่าง mb-4