import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="logo">
                <h2>Blog Application</h2>
            </Link>
            <Link to="/">หน้าแรก</Link>
            <Link to="/About">เกี่ยวกับเรา</Link>
            <Link to="/Blogs">บทความทั้งหมด</Link>
        </nav>
    )
}