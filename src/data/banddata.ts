import { Band } from "@/types/band";

const bands: Band[] = [ //สร้างตัวแปร bands เป็น array ของ Band โดยมีข้อมูลของวงดนตรี 3 วง ได้แก่ Cocktail, Bodyslam และ Potato
  {
    id: 1, //วงดนตรีวงแรกมี id เป็น 1
    name: "Cocktail (ค็อกเทล)", //ชื่อวง
    genre: "Pop Rock", //แนวเพลง
    imageUrl: "/images/bands/cocktail.jpg", //รูป
    description: "วงค็อกเทลก่อตั้งเมื่อปี พ.ศ. 2545 โดย โอม - ปัณฑพล ประสารราชกิจ ขณะศึกษาอยู่ในระดับชั้นมัธยมศึกษาปีที่ 6 ที่โรงเรียนเตรียมอุดมศึกษา โดยโอมเริ่มแต่งเพลงแรก คือ (ยิ้มให้ฉันหน่อย) จากนั้นจึงร่วมกับ วิศรุต เตชะวรงค์ (บู๊ สกายคิกเรนเจอร์) ในการจัดทำอัลบั้มเพลง โดยโอมขอยืมเงินของพ่อแม่ จำนวนทั้งหมด 85,000 บาท เพื่อจัดทำอัลบั้มเพลง จากนั้นจึงเริ่มเชิญชวนเพื่อนคนอื่น ๆ ที่ศึกษาในโรงเรียนเดียวกัน มาร่วมทำอัลบั้มกับทั้งคู่", //รายละเอียดวง
    members: [ //array :ซ้อนยุใน objectย่อย มีชื่อ หน้าที่ รูป เสร็จแล้วปิดด้วย },
      { name: "โอม", fullName: "ปัณฑพล ประสารราชกิจ", role: "นักร้องนำ", imageUrl: "/images/bands/members/โอมม.jpg" },
      { name: "เชา", fullName: "ชวรัตน์ หรรษคุณาฒัย", role: "มือกีต้าร์", imageUrl: "/images/bands/members/เชาา.jpg" },
      { name: "ปาร์ค", fullName: "เกริกเกียรติ สว่างวงศ์", role: "มือกีต้าร์เบส", imageUrl: "/images/bands/members/ปาร์คค.jpg" },
      { name: "ฟิลิปส์", fullName: "ฟิลิปส์ เปรมสิริกรณ์", role: "มือกลอง", imageUrl: "/images/bands/members/ฟิลิปส์ส์.jpg" },
      { name: "เหน่ง", fullName: "วิวัฒน์ สว่างวรรณรัตน์", role: "มือกีต้าร์", imageUrl: "/images/bands/members/เหน่งง.jpg" },
      { name: "เอ็กซ์", fullName: "ชรัณ ตัณฑนันทน์", role: "เปียโน/คีย์บอร์ด", imageUrl: "/images/bands/members/เอ็กซ์ซ์.jpg" },
    ],
  },

  {
    id: 2,
    name: "Big Ass (บิ๊กแอส)",
    genre: "Alternative Rock",
    imageUrl: "/images/bands/bigass.jpg",
    description: "เป็นวงดนตรีร็อค สัญชาติไทย สังกัดค่ายจีนี่ เรคคอร์ด มีเพลงที่ได้รับความนิยมได้แก่ ทางผ่าน ก่อนตาย เกิดมาแค่รักกัน เล่นของสูง คนไม่เอาถ่าน พรหมลิขิต ฝุ่น ลมเปลี่ยนทิศ ไม่เดียงสา เป็นต้น",
    members: [
      { name: "เจ๋ง", fullName: "	เดชา โคนาโล", role: "นักร้องนำ", imageUrl: "/images/bands/members/เจ๋ง.jpg" },
      { name: "อ๊อฟ", fullName: "พูนศักดิ์ จตุระบุล ", role: "มือกีต้าร์/โปรดิวเซอร์", imageUrl: "/images/bands/members/อ๊อฟ.jpg" },
      { name: "หมู", fullName: "อภิชาติ พรมรักษา", role: "มือกีต้าร์/ผู้ร่วมก่อตั้งวง", imageUrl: "/images/bands/members/หมู.jpg" },
    ],
  },

  {
    id: 3, //วงที่ 3
    name: "คณะขวัญใจ",
    genre: "Indie Folk และ Folk-Rock",
    imageUrl: "/images/bands/KN.jpg",
    description: ": เติบโตมากับเสียงเพลงลูกทุ่งและหมอลำ ผสมผสานกลายเป็นดนตรีแนวอินดี้โฟล์คและโฟล์ค-ร็อกร่วมสมัย ที่มีเนื้อหาภาษาสละสลวยและจริงใจ",
    members: [
      { name: "เปิ้ล",fullName: "ชีวิน โกมารทัต", role: "นักร้องนำ/กีต้าร์โปร่ง", imageUrl: "/images/bands/members/เปิ้ล.jpg" },
      { name: "คิง", fullName: "วิชัยรัตน์ ปรีดี", role: "มือกีต้าร์ไฟฟ้า", imageUrl: "/images/bands/members/คิง.jpg" },
      { name: "ตั๋น", fullName: "อดิศร บรบุตร", role: "มือกีต้าร์เบส", imageUrl: "/images/bands/members/ตั๋น.jpg" },
      { name: "เบ็ต", fullName: "พงศนาถ บุญแสนแก้ว", role: "มือกลอง", imageUrl: "/images/bands/members/เบ็ต.jpg" },
    ],
  },
];

export default bands;