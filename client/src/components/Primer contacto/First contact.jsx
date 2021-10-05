import "./First contact.css";
import React from "react";
import { NavLink } from 'react-router-dom';

export default function FirsContact({ getMovies, movies, addMovieFavorite }) {
  return (
    <div className="bodys">
    <NavLink exact to="/pokemon" >
      <button className="get" type="submit">Get them all</button>
      </NavLink>
    </div>
  );
}
