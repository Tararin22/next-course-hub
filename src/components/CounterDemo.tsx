
   // count = count + 1; // เพิ่มค่า count ทีละ 1 ทุกครั้งที่ปุ่มถูกคลิก

"use client";

import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0); // สำหรับอัปเดตค่า count โดยเริ่มต้นที่ 0

  function handleClick() { // ฟังก์ชัน handleClick จะถูกเรียกใช้เมื่อปุ่มถูกคลิก
    //setCount(count + 1); // เมื่อปุ่มถูกคลิก จะเรียกใช้ฟังก์ชัน handleClick เพื่อเพิ่มค่า count ทีละ 1
    //setCount(count + 1);
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); //ดังนั้นกดปุ่ม 1 ครั้ง → count เพิ่ม 3
    setCount((prevCount) => prevCount + 1); //0 → 1 → 2 → 3

    console.log(`คลิกแล้ว ${count} ครั้ง`); 
    //console.log(`คลิกแล้ว ${count} ครั้ง`); // แสดงข้อความ "clicked" ใน console ทุกครั้งที่ปุ่มถูกคลิก
} 


  return (
    <button type="button" onClick={handleClick}> { /* เมื่อปุ่มถูกคลิก จะเรียกใช้ฟังก์ชัน handleClick เพื่อเพิ่มค่า count ทีละ 1 */ }
      คลิกแล้ว {count} ครั้ง
    </button>
  );
}
