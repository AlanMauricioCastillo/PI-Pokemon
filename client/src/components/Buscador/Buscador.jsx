import {useDispatch} from "react-redux"
//import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {clearDetails} from "../../actions/clearDetails"
import {getFromName} from "../../actions/getFromName"
import { getFromId } from "../../actions/getFromId";
//import { getThemAll } from "../../actions/getThemAll";
import React from "react";
import './Buscador.css';
import { Link } from "react-router-dom";



export default function Buscador() {
  const dispatch = useDispatch()
  /* useEffect(() => {
    dispatch(getThemAll())
  }, [dispatch]) */
  const dispatch1 = useDispatch()
  useEffect(() => {
    dispatch1(clearDetails())
  }, [dispatch1])
  const [pokemon, setPokemon] = React.useState("");
  var details = useSelector((state) => state.pokemonsDetails);
  
  const chose = () => {
    if(pokemon.length > 34) {
      dispatch(getFromId(pokemon))
    } else dispatch(getFromName(pokemon))
  }

  return (
    <div className="big">
    <div className="form-containerses">
    <h1 className="titleBuscador" >Buscalos en tu Pokedex</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      clearDetails()
      chose()
      setPokemon("")
  }
    }>
      <input
        type="text"
        placeholder="Pokemon..."
        value={pokemon}
        onChange={e => setPokemon(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
    {
      details.nombre
        ?
          <div key={details.id} className="cardes" >
              <Link to={`/pokemon/${details.id}`} className="link" >
                <div>
                  <div>
                    <img
                      src={details.imagen}
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="textBox">
                  <h5 className="card-title">{details.nombre}</h5>
                    <h6>Tipo/s</h6>
                    {
                      details.tipo.map((t, i) => {
                        return <p key={i}>{t}</p>
                      })
                    }
                    </div>
                </div>
              </Link>
            </div>
        :
        <div className="pokedexRoto"/>
      }
    </div>
    </div>
  );
}

