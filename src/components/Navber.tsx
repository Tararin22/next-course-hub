// navbar home/courses/about
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="siteHeader">
            <nav className="navbar">
                <ul className="navList">
                    <li><Link href="/" className="navLink">Home</Link></li>
                    <li><Link href="/courses" className="navLink">Courses</Link></li>
                    <li><Link href="/about" className="navLink">About</Link></li>
                    <li><Link href="/bands" className="navLink">Bands</Link></li> 
                </ul> 
            </nav>
        </header>
    );
} // 12 เพิ่มเข้ามาเพื่อ ให้ตรงแทบเมนูมีขึ้นมาเพิ่มอีกอัน แล้วลิ้งไปอีกหน้า navLink ทำให้มีขีดเส้นใต้ตอนเอาเม้าส์ไปชี้