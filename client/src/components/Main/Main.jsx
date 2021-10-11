import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPaged } from "../../actions/getPaged";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { orderAsc } from "../../actions/orderAsc";
import {typeFilter} from "../../actions/typeFilter"
import { filterApi } from "../../actions/filterApi";
import { orderDes } from "../../actions/orderDes";
import { forceAsc } from "../../actions/forceAsc";
import { forceDes } from "../../actions/forceDes";
//import {clearDetails} from "../../actions/clearDetails"
import {getThemAll} from "../../actions/getThemAll"
//import PokemonDetails from "../Pokemon details/PokemonDetails";
import "./Main.css";

export default function Main() {
  const dispatch = useDispatch()
  const [serchTipes, setSerchTypes] = React.useState("");
  const [tiposLState, setTiposLState] = React.useState([]);
  const [filtrando, setFiltrando] = React.useState("");
  const [typeFilters, setTypeFilters] = React.useState([]);
  const [hide, setHide] = React.useState('all')
  const [paged, setPaged] = React.useState("");
  const [pagedApi, setPagedApi] = React.useState("");
  const [update, setUpdate] = React.useState("")
  const [pag, setpag] = React.useState(1);
  const [pokemonsOnscreen, setpokemonsOnscreen] = React.useState("");
  //const [own, setOwn] = React.useState("")
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = React.useState({
    alfabetico: "",
    fuerza: "",
    tipos: "",
    procedencia: "",
  });

  var tiposGState = useSelector((state) => state.pokemonsTypes);
  var Pokemons = useSelector((state) => state.pokemons);
  //var pokemonsPropios = useSelector((state) => state.pokemonsPropios);
  //console.log(paged)
  
  //console.log(pokemonsPropios,'pokemonsPropios')
  //console.log(pokemonsOnscreen,'pokemonsOnscreen')

  useEffect(() => {
    setTiposLState(tiposGState)
  }, [tiposGState])
  


  useEffect(() => {
    setpokemonsOnscreen(Pokemons)
  },[Pokemons])

  useEffect(() => {
    if(serchTipes !== "")
    dispatch(typeFilter({pokemons: serchTipes}))
    setSerchTypes("")
  }, [dispatch, serchTipes])

  useEffect(() => {
    if(hide === "api") {
      document.getElementById("pagination")
      .style.display = "none";
      document.getElementById("paginationApi")
      .style.display = "inline-block";
    } 
    if(hide === "all") {
      document.getElementById("pagination")
      .style.display = "inline-block";
      document.getElementById("paginationApi")
      .style.display = "none";
    }
    if(hide === "nones") {
      document.getElementById("paginationApi")
      .style.display = "none";
      document.getElementById("pagination")
      .style.display = "none";
    }
  },[hide])

  useEffect(() => {
    if(update === "back to basic") {
      dispatch(getThemAll())
      setUpdate("")
    }
  },[dispatch, update])

  useEffect(() => {
    if(paged !== "") {
      dispatch(getPaged(paged))
      setPaged("")
    }

  },[dispatch, paged])

  useEffect(() => {
    if(pagedApi !== "") {
      dispatch(filterApi(pagedApi))
      setPagedApi("")
    }

},[dispatch, pagedApi])

/* useEffect(() => {
  if(own !== "") {
    setpokemonsOnscreen(pokemonsPropios)
    setOwn("")
  }
},[own, pokemonsPropios]) */


  
  let paginamax = 90
  const hendlestate = (e) => {
    if(e === "back") {
      setpag(pag-6)
    } 
    if(e === "next") {
      setpag(pag+6)
    }
    if(e === "main") {
      setUpdate("back to basic")
      setHide("all")
      setpag(1)
      setPaged("")
    }
  }

  const hendleChange = (e) => {
    if(e.target.value === "none") {
      setInput((prev) => ({...prev, [e.target.name]: ""}));
  } else {
    setInput((prev) => ({
      ...prev, 
      [e.target.name]: e.target.value
    }));
  }
}

/* const hendleChangeTipos = (e) => {
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
} */
/* 
tiposGState.map((e, i) => {
  return (
    <option
      key={i}
      value={`${e.Nombre}`}
    >{`${e.Nombre}`}</option>
  );
}) */


const HendleChangeOnFilters = (e) => {
  /* if() */
  //console.log(e)
  const comand = e.target.value
  if(comand === "none" || comand === "refresh") {
    setUpdate("back to basic")
  }
  if(comand === "A-Z") {
    let aux = Pokemons
    aux.pokemons.sort((a, b) => {
        if(a.name > b.name) {
          return 1
        } else {
          return - 1
        }
      })
      dispatch(orderAsc(aux))
    } 
    if(comand === "Z-A") {
      let aux = Pokemons
    aux.pokemons.sort((a, b) => {
        //console.log(a,'aaaaaaaaaaaaaaaaa')
        //console.log(b,'bbbbbbbbbbbbbbbbb')
        if(a.name < b.name) {
          return 1
        } else {
          return - 1
        }
      })
      dispatch(orderDes(aux))
    } 
    if(comand !== "A-Z" && comand !== "Z-A") {
    setInput((prev) => ({
    ...prev, 
    alfabetico: ""
  }))
} 
if(comand === "Mayor") {
      let aux = Pokemons
    aux.pokemons.sort((a, b) => {
        if(a.fuerza < b.fuerza) {
          return 1
        } else {
          return - 1
        }
      })
      dispatch(forceAsc(aux))
    }
    if(comand === "Menor") {
      let aux = Pokemons
    aux.pokemons.sort((a, b) => {
        if(a.fuerza > b.fuerza) {
          return 1
        } else {
          return - 1
        }
      })
      dispatch(forceDes(aux))
    } 
    if(comand !== "Mayor" && comand !== "Menor") {
    setInput((prev) => ({
    ...prev, 
    fuerza: ""
  }))
} 
if(e.target.name === "procedencia") {
  if(comand === "Creados") {
    //setOwn("call")
} else if (comand === "Preexistentes") {
 // setOwn("")
}
}

    if(comand === "Preexistentes") {
      setHide("api")
      //setPagedApi(1)
      setPagedApi(1);

    } else if (comand === "Creados") {
      setHide("nones")
    } else {
      setHide("all")
    }
    if(comand !== "Creados" && comand !== "Preexistentes") {
    setInput((prev) => ({
    ...prev, 
    procedencia: ""
  }))
} 
if(e.target.name === "tipos" && comand !== "refresh") {
  /* if(filtrando.length > 0) {
    let arre = []
    for (let i = 0; i < filtrando.length; i++) {
      for (let f = 0; f < filtrando[i].types.length; f++) {
        console.log(filtrando[i].types)
        for (let j = 0; j < typeFilters.length; j++) {
          if(filtrando[i].types[f].includes(typeFilters[j])) {
            arre.push(filtrando[i])
          }
        }
      }
    }
    console.log(arre)
    //console.log(typeFilters)
    //dispatch(typeFilter(serchTipes))
    setSerchTypes(serchTipes)
  } */
  setFiltrando(Pokemons.pokemons)
  let arr
  //console.log(typeFilters)
  //console.log(comand,'comand')
  if(!typeFilters.includes(comand)) {
    document.getElementById(comand).style.backgroundColor = "red"
    //e.target.style.color = "red"
    setTypeFilters((prev) => ([...prev, comand]));
  } /*else if(e.target.name === "tipos") {
  } */ else {
    //console.log('entro al else')
    arr =typeFilters.filter(e => e !== comand)
    //console.log(arr)
    setTypeFilters(arr)
    document.getElementById(comand).style.backgroundColor = "white"
    //e.target.style.color = "black"
    if(arr.length < 1) {
      setUpdate("back to basic")
    }
  }
if(comand === "refresh") {
  tiposLState.forEach(element => {
    document.getElementById(element.Nombre).style.backgroundColor = "white"
  });
  setTypeFilters([])
  setUpdate("back to basic")
}
};
}


const hendleTypeFilter = () => {
  if(filtrando.length > 0) {
    let arre = []
    for (let i = 0; i < filtrando.length; i++) {
      for (let f = 0; f < filtrando[i].types.length; f++) {
        console.log(filtrando[i].types)
        for (let j = 0; j < typeFilters.length; j++) {
          if(filtrando[i].types[f].includes(typeFilters[j])) {
            arre.push(filtrando[i])
          }
        }
      }
    }
    console.log(arre)
    //console.log(typeFilters)
    //dispatch(typeFilter(serchTipes))
    setSerchTypes(arre)
  }
}
console.log(Pokemons.pokemons)

console.log(pokemonsOnscreen.pokemons)
//console.log(input,'input')
  return (
    <div>
    <form onChange={e => {
        e.preventDefault();
          hendleChange(e)
          HendleChangeOnFilters(e)
      }}
      >
        <nav>
          <ul className="list-item">
            <div>
              <p>
                <label>Orden Alfabetico</label>
                <select name="alfabetico">
                  <option className="ini"  value="none">Messy</option>
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
                <label>Orden por Fuerza</label>
                <select name="fuerza">
                  <option className="ini"  value="none">All</option>
                  <option>Mayor</option>
                  <option>Menor</option>
                </select>
              </p>
              <p>
                <label>Filtro por Tipo</label>
                <select name="tipos" 
                //onChange={hendleChangeTipos}
                //onClick={HendleChangeOnFilters}
                >
                  <option className="ini"  value="refresh">All</option>
                  {
                    tiposLState.map((e, i) => {
                    return (
                      <option
                        id={e.Nombre}
                        key={i}
                        value={`${e.Nombre}`}
                      >{`${e.Nombre}`}</option>
                    );
                  })
                  }
                </select>
                <button onClick={(e) => {
                  e.preventDefault()
                  hendleTypeFilter(e)
                }}>serch</button>
                <label>Filtro por Procedencia</label>
                <select name="procedencia">
                <option className="ini"  value="none">Mix</option>
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
      <div id="pagination" className="pagination" >
        <form 
          onClick={(e) => {
            //console.log(e)
            e.preventDefault();
            //console.log(e.target.name)
            if(e.target.name !== "back" && e.target.name !== "next") {
              if(pag === 1) {
                //console.log(e.target.innerText)
                e.target.innerText !== "Main" && setPaged(e.target.value);
              } else e.target.innerText !== "Main" && setPaged(e.target.value);
            }
              hendlestate(e.target.name)
          }}
        >
          {pag===1 ? "" :<button className="but" name="back" >
            &laquo;
          </button>}
          <button className="but" id="main" name="main" >
            Main
          </button>
          <button className="but" id="pri" name="pri" value={pag+1} >
            {pag}
          </button>
          <button className="but" name="seg" value={pag+2} >
            {pag+1}
          </button>
          {pag>paginamax ? "" :<button className="but" name="ter" value={pag+3} >
            {pag+2}
          </button>}
          {pag>paginamax ? "" :<button className="but" name="cua" value={pag+4} >
            {pag+3}
          </button>}
          {pag>paginamax ? "" :<button className="but" name="qui" value={pag+5} >
            {pag+4}
          </button>}
          {pag>paginamax ? "" :<button className="but" id="sex" name="sex" value={pag+6} >
            {pag+5}
          </button>}
          {pag>paginamax ? "" :<button className="but" name="next">
            &raquo;
          </button>}
        </form>
      </div>


      <div id="paginationApi" className="pagination" >
        <form 
          onClick={(e) => {
            e.preventDefault();
            if(e.target.name === "main") {
              hendlestate(e.target.name)
              } 
            //console.log(e.target.name)
            e.target.innerText !== "Main" 
            && 
            setPagedApi(e.target.innerText);
          }}>
          <button id="main" className="but" name="main" >
            Main
          </button>
          <button className="but" id="pri" name="pri" >
            1
          </button>
          <button className="but" name="seg" >
            2
          </button>
          <button className="but" name="ter" >
            3
          </button>
          <button className="but" name="cua" >
            4
          </button>
        </form>

      </div>

    </div>
  );
}
