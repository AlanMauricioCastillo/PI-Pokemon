import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPaged } from "../../actions/getPaged";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { orderAsc } from "../../actions/orderAsc"
//import {clearDetails} from "../../actions/clearDetails"
import {getThemAll} from "../../actions/getThemAll"
//import PokemonDetails from "../Pokemon details/PokemonDetails";
import "./Main.css";

export default function Main() {
  const [input, setInput] = React.useState({
    alfabetico: "",
    fuerza: "",
    tipos: "",
    procedencia: "",
  });
  let [pag, setpag] = React.useState(1);
  let [pokemonsOnscreen, setpokemonsOnscreen] = React.useState([]);
  const dispatch = useDispatch()
  //const dispatch1 = useDispatch()
  var tiposGState = useSelector((state) => state.pokemonsTypes);
  var Pokemons = useSelector((state) => state.pokemons);
  var ownPokemons = useSelector((state) => state.pokemonsPropios);
  //console.log(pag)
  //const dispatch1 = useDispatch()
  console.log(Pokemons,'Pokemons')
  console.log(pokemonsOnscreen,'pokemonsOnscreen')
  useEffect(() => {
    setpokemonsOnscreen(Pokemons)
  }, [Pokemons])
  
  let paginamax = 91
  const hendlestate = (e) => {
    //console.log(e)
    if(e === "back") {
      setpag(pag-6)
    } 
    if(e === "next") {
      setpag(pag+6)
    }
    if(e === "pri" && pag===1) {
      dispatch(getThemAll())
    }
  }

  const hendleChange = (e) => {
    if(e.target.value === "none") {
      setInput((prev) => ({...prev, [e.target.name]: ""}));
  } else {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
}

const hendleChangeTipos = (e) => {
  //console.log(e)
  if(e.target.value === "none") {
    setInput((prev) => ({
      ...prev,
      tipos: "",
    }));
  } else {
    let value = [...input.tipos];
    if (!input.tipos.includes(e.target.value)) value.push(e.target.value);
    setInput((prev) => ({
      ...prev,
      tipos: value,
    }));
  }
}
console.log(Pokemons,'pokemons')

let { alfabetico, fuerza, tipos, procedencia } = input
if(alfabetico) {
  if(alfabetico === "A-Z") {
    let aux = Pokemons

    console.log(aux,'auxxxxxxxxxx')
    aux.pokemons.sort((a, b) => {
        //console.log(a,'aaaaaaaaaaaaaaaaa')
        //console.log(b,'bbbbbbbbbbbbbbbbb')
        if(a.name > b.name) {
          return 1
        } else {
          return - 1
        }
      })
      dispatch(orderAsc(aux))
    } 
    if(alfabetico === "Z-A") {
      let aux = Pokemons

    console.log(aux,'auxxxxxxxxxx')
    aux.pokemons.sort((a, b) => {
        //console.log(a,'aaaaaaaaaaaaaaaaa')
        //console.log(b,'bbbbbbbbbbbbbbbbb')
        if(a.name < b.name) {
          return 1
        } else {
          return - 1
        }
      })
      dispatch(orderAsc(aux))
    }
  } else if(fuerza) {
    if(fuerza === "Mayor") {

    } 
    if(fuerza === "Menor") {

    }
  } else if(procedencia) {
    if(procedencia === "Creados") {

    }
    if(procedencia === "Preexistentes") {

    }
  } else if(tipos.length > 1) {

  };

  return (
    <div>
    <form onChange={e => {
        e.preventDefault();
        if(e.target.name !== "tipos") {
          hendleChange(e)
          //console.log(e)
        }
        //console.log(e.target.name)
        //console.log(e.target.value)
      }}
      >
        <nav>
          <ul className="list-item">
            <div>
              <p>
                <label>Orden Alfabetico</label>
                <select name="alfabetico">
                  <option value="none"></option>
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
                <label>Orden por Fuerza</label>
                <select name="fuerza">
                  <option value="none"></option>
                  <option>Mayor</option>
                  <option>Menor</option>
                </select>
              </p>
              <p>
                <label>Filtro por Tipo</label>
                <select name="tipos" onChange={hendleChangeTipos}>
                  <option value="none"></option>
                  {tiposGState.map((e, i) => {
                    return (
                      <option
                        key={i}
                        value={`${e.Nombre}`}
                      >{`${e.Nombre}`}</option>
                    );
                  })}
                </select>
                <label>Filtro por Procedencia</label>
                <select name="procedencia">
                <option value="none"></option>
                  <option>Creados</option>
                  <option>Preexistentes</option>
                </select>
              </p>
            </div>
          </ul>
        </nav>
      </form>
      <div className="cards">
        {pokemonsOnscreen.pokemons ? (
          
          pokemonsOnscreen.pokemons.map((e, i) => {
            
            return (
              <div key={i} className="card">
                <Link to={`/pokemon/${e.id}`} className="link">
                  <div>
                    <div>
                      <img src={e.imagen} width="300" height="300" alt="" />
                    </div>
                    <h5 className="card-title">{e.name}</h5>
                    <h6>Tipo/s</h6>
                    {e.types.map((t, i) => {
                      return <p key={i}>{t}</p>;
                    })}
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>

      <div className="pagination" >
        <form 
          onClick={(e) => {
            //console.log(e)
            e.preventDefault();
            //console.log(e.target.name)
            if(e.target.name !== "back" && e.target.name !== "next") {
              if(pag === 1) {
                //console.log(e.target.innerText)
                e.target.innerText !== "1" && dispatch(getPaged(e.target.innerText))
              } else dispatch(getPaged(e.target.innerText))
            }
              hendlestate(e.target.name)
          }}
        >
          {pag===1 ? "" :<button className="but" name="back" >
            &laquo;
          </button>}
          <button className="but" id="pri" name="pri" >
            {pag}
          </button>
          <button className="but" name="seg" >
            {pag+1}
          </button>
          <button className="but" name="ter" >
            {pag+2}
          </button>
          {pag===paginamax ? "" :<button className="but" name="cua" >
            {pag+3}
          </button>}
          {pag===paginamax ? "" :<button className="but" name="qui" >
            {pag+4}
          </button>}
          {pag===paginamax ? "" :<button className="but" id="sex" name="sex" >
            {pag+5}
          </button>}
          {pag===paginamax ? "" :<button className="but" name="next">
            &raquo;
          </button>}
        </form>
      </div>

    </div>
  );
}
