import { NavLink } from "react-router-dom";
import HeaderCSS from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </nav>
    </div>
  );
}
