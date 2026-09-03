export type Member = {
  // type Member กำหนดโครงสร้างข้อมูลของสมาชิก 1 คนในวง
  name: string;      // ชื่อสมาชิก เช่น "โอม"
  role: string;      // หน้าที่/ตำแหน่งในวง เช่น "นักร้องนำ"
  imageUrl: string;  // path รูปประจำตัวของสมาชิกคนนี้ เช่น "/images/bands/members/om.jpg"
  fullName: string;  // ชื่อเต็มของสมาชิก 
};

export type Band = {
  // type Band กำหนดโครงสร้างข้อมูลของวงดนตรี 1 วง
  id: number;           // เลขประจำวง ใช้อ้างอิง/เป็น key ตอน map()
  name: string;         // ชื่อวง เช่น "Cocktail (ค็อกเทล)"
  genre: string;        // แนวเพลงของวง เช่น "Pop Rock"
  imageUrl: string;     // path รูปปกวง/รูปอัลบั้ม
  description: string;
  members: Member[];    // รายชื่อสมาชิกในวง เป็น array ของ Member 
                         // (ซ้อนอีกชั้นหนึ่ง เพราะวงมีสมาชิกได้หลายคน 
                         //  แต่ละคนก็มีโครงสร้างตาม type Member ด้านบน)
};