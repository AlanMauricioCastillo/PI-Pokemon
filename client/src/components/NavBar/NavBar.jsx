import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./pokemon.png";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img id="logoHenry" src={Logo} className="logo" alt="" />
      </div>
      <nav>
        <ul className="list-item">
          <li className="list-item">
            <NavLink className="link" exact to="/pokemon">
              Home
            </NavLink>
            <NavLink className="link" exact to="/pokemonCreator">
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
