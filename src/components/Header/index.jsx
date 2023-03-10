import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="flex header">
      <div className="logo">
        <Link to="/" className="flex">
          <img src={logo} alt="Claudio Operti logo" />
        </Link>
      </div>
      <nav className="flex nav">
        <Link to="/" className="underline">
          Inicio
        </Link>
        <Link to="/about" className="underline">
          Sobre mi
        </Link>
        <Link to="/portfolio" className="underline">
          Portafolio 
        </Link>
        <Link to="/contact" className="underline">
          Contacto 
        </Link>
      </nav>
    </header>
  );
}
