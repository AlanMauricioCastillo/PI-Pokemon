import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFromId } from "../../actions/getFromId";
import { useParams } from "react-router";
import "./PokemonDetails.css";

export default function PokemonDetails() {
  const { id_or_query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromId(id_or_query));
  }, [dispatch, id_or_query]);
  var pokemon = useSelector((state) => state.pokemonsDetails);

  //const{Title, Poster, Actors, Director, Plot, Rated, Released, Writer, Year} = movie
  const {
    nombre,
    id,
    imagen,
    fuerza,
    defensa,
    altura,
    peso,
    velocidad,
    tipo,
    vida,
  } = pokemon;
  return (
    <div className="big">
      <div className="pokemon-detail">
        {pokemon.nombre ? (
          <div className="description">
            <div className="titledetails">
              <h1>{nombre}</h1>
            </div>
            <img src={imagen} alt={"im"} className="img" />
            <div className="cardano">
              <h2>Id: {id}</h2>
              <h2>Fuerza: {fuerza}</h2>
              <h2>Defensa: {defensa}</h2>
              <h2>Altura: {altura}</h2>
              <h2>Peso: {peso}</h2>
              <h2>Velocidad: {velocidad}</h2>
              <h2>Vida: {vida}</h2>
            </div>
            <div className="cardanolo">
              <h2>
                Tipo/s:{" "}
                {tipo.map((e, i) => {
                  return <div key={i}>{e}</div>;
                })}
              </h2>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
