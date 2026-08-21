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
                </ul>
            </nav>
        </header>
    );
}