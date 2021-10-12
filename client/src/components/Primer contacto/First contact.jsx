import "./First contact.css";
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {getThemAll} from "../../actions/getThemAll"
import { useSelector } from "react-redux";
//import { getOwn } from "../../actions/getOwn"
import { filterApi } from "../../actions/filterApi";
import React from "react";
import { NavLink } from 'react-router-dom';

export default function FirsContact() {
  const dispatch = useDispatch()
  var PokemonsNoP = useSelector((state) => state.pokemonsFilter);
  //var pokemonsPropios = useSelector((state) => state.pokemonsPropios);
  useEffect(() => {
    dispatch(getThemAll())
  },[dispatch])
  useEffect(() => {
    console.log('entre al use')
    console.log(PokemonsNoP)
    if(!PokemonsNoP.pokemons || PokemonsNoP.pokemons.length < 1) {
      dispatch(filterApi())
    }
  },[PokemonsNoP])
  
  return (
    <div className="bodys">
    <NavLink exact to="/pokemon" >
      <button className="get" type="submit">Get them all</button>
      </NavLink>
    </div>
  );
}
