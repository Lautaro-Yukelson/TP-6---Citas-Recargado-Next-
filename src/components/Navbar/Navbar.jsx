import "./Navbar.css";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/quienes-somos">Quienes</Link></li>
                <li><Link href="/reservas">Reserva</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
