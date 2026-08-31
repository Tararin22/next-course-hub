import { Band } from "@/types/band";

const bands: Band[] = [ //สร้างตัวแปร bands เป็น array ของ Band โดยมีข้อมูลของวงดนตรี 3 วง ได้แก่ Cocktail, Bodyslam และ Potato
  {
    id: 1, //วงดนตรีวงแรกมี id เป็น 1
    name: "Cocktail (ค็อกเทล)", //ชื่อวง
    genre: "Pop Rock", //แนวเพลง
    imageUrl: "/images/bands/cocktail.jpg", //รูป
    members: [ //array :ซ้อนยุใน objectย่อย มีชื่อ หน้าที่ เสร็จแล้วปิดด้วย },
      { name: "โอม", role: "นักร้องนำ" },
      { name: "เชา", role: "มือกีต้าร์" },
      { name: "ปาร์ค", role: "มือกีต้าร์เบส" },
      { name: "ฟิลิปส์", role: "มือกลอง" },
      
    ],
  },

    {
    id: 2,
    name: "Big Ass (บิ๊กแอส)",
    genre: "Alternative Rock",
    imageUrl: "/images/bands/bigass.jpg",
    members: [
      { name: "เจ๋ง", role: "นักร้องนำ" },
      { name: "อ๊อฟ", role: "มือกีต้าร์/โปรดิวเซอร์" },
      { name: "หมู", role: "มือกีต้าร์/ผู้ร่วมก่อตั้งวง" },
    ],
  },

  {
    id: 3, //วงที่ 3
    name: "คณะขวัญใจ",
    genre: "Indie Folk และ Folk-Rock",
    imageUrl: "/images/bands/KN.jpg",
    members: [
      { name: "เปิ้ล", role: "นักร้องนำ/กีต้าร์โปร่ง" },
      { name: "คิง", role: "มือกีต้าร์ไฟฟ้า" },
      { name: "ตั๋น", role: "มือกีต้าร์เบส" },
      { name: "เบ็ต", role: "มือกลอง" },
    ],
  },
];

export default bands;