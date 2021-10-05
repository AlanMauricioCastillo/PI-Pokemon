import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './pokemon.png'

import './Navbar.css';

/* export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
} */

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="navbar">
          <div>
              <img id="logoHenry" src={Logo} width="30" height="30" alt="" />
          </div>
          <nav>
              <ul className="list-item">
                  <li className="list-item">
                      <NavLink exact to="/pokemon" >Home</NavLink>
                      {/* <NavLink to="/favs" >Favoritas</NavLink> */}
                  </li>
              </ul>
          </nav>
      </header>
  )
  }
}
