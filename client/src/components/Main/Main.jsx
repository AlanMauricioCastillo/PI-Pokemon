import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPaged } from "../../actions/getPaged";
import { filtrarPokemonNoPropios } from "../../actions/filtrarPokemonNoPropios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { orderAsc } from "../../actions/orderAsc";
import { getOwn } from "../../actions/getOwn";
import { typeFilter } from "../../actions/typeFilter";
import { filterApi } from "../../actions/filterApi";
import { orderDes } from "../../actions/orderDes";
import { forceAsc } from "../../actions/forceAsc";
import { forceDes } from "../../actions/forceDes";
//import {clearDetails} from "../../actions/clearDetails"
import { getThemAll } from "../../actions/getThemAll";
//import PokemonDetails from "../Pokemon details/PokemonDetails";
import "./Main.css";

export default function Main() {
  const dispatch = useDispatch();
  const [pageFrom, setPageFrom] = React.useState("");
  const [serchTipes, setSerchTypes] = React.useState("");
  const [tiposLState, setTiposLState] = React.useState([]);
  const [filtrando, setFiltrando] = React.useState("");
  const [typeFilters, setTypeFilters] = React.useState([]);
  const [hide, setHide] = React.useState("all");
  const [paged, setPaged] = React.useState("");
  const [pagedApi, setPagedApi] = React.useState("");
  const [update, setUpdate] = React.useState("");
  const [pag, setpag] = React.useState("");
  const [pokemonsOnscreen, setpokemonsOnscreen] = React.useState("");
  const [own, setOwn] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = React.useState({
    alfabetico: "",
    fuerza: "",
    tipos: "",
    procedencia: "",
  });

  var tiposGState = useSelector((state) => state.pokemonsTypes);
  var Pokemons = useSelector((state) => state.pokemons);
  var PokemonsNoP = useSelector((state) => state.pokemonsFilter);
  var pokemonsPropios = useSelector((state) => state.pokemonsPropios);

  useEffect(() => {
    setTiposLState(tiposGState);
  }, [tiposGState]);

  useEffect(() => {
      setpokemonsOnscreen(Pokemons);
  }, [Pokemons]);

  useEffect(() => {
    if(!Pokemons.pokemons && Pokemons.length < 1) {
      dispatch(getThemAll());
    }
    if(pageFrom === "own") {
      setpokemonsOnscreen(Pokemons);
    } if(pageFrom === "alien") {
      setpokemonsOnscreen(PokemonsNoP)
    }
}, [Pokemons, PokemonsNoP, dispatch, pageFrom]);

  useEffect(() => {
    if (serchTipes !== "") {
      /* if(pageFrom === "own") { */
        dispatch(typeFilter({ pokemons: serchTipes }))
      /* } else if(pageFrom === "alien") {
        dispatch(typeFilter({ pokemonsNoPropios: serchTipes }))
      } */
    };
    setSerchTypes("");
  }, [dispatch, serchTipes]);

  /* useEffect(() => {
    if (hide === "api") {
      if(PokemonsNoP.length < 1) {
        dispatch(filterApi());
      }
      document.getElementById("pagination").style.display = "none";
      document.getElementById("paginationApi").style.display = "inline-block";
    }
    if (hide === "all") {
      document.getElementById("pagination").style.display = "inline-block";
      document.getElementById("paginationApi").style.display = "none";
    }
    if (hide === "nones") {
      document.getElementById("paginationApi").style.display = "none";
      document.getElementById("pagination").style.display = "none";
    }
  }, [hide]); */

  useEffect(() => {
    if (update === "back to basic") {
      dispatch(getThemAll());
      setUpdate("");
      //dispatch(getOwn());
    }
  }, [dispatch, update]);

  /* useEffect(() => {
    if (paged !== "") {
      dispatch(getPaged(paged));
      setPaged("");
    }
  }, [dispatch, paged]); */

  /////////////////////////////////////////los 40 paginados desde el back
  /*   useEffect(() => {
    if(pagedApi !== "") {
      dispatch(filterApi(pagedApi))
      setPagedApi("")
    }
},[dispatch, pagedApi]) */
  /////////////////////////////////////
  ////////////////////////////////////////////los 40 completos
  /* useEffect(() => {
  if(pagedApi === 1) {
    dispatch(filterApi())
    setPagedApi("")
  }
},[dispatch, pagedApi]) */
/* 
  useEffect(() => {
    if (pagedApi !== "" && PokemonsNoP.pokemons) {
      console.log(PokemonsNoP.pokemons);
      let arr = [];
      if (pagedApi === "4") {
        for (let i = 36; i < 40; i++) {
          //console.log(PokemonsNoP.pokemons[i])
          arr.push(PokemonsNoP.pokemons[i]);
        }
      } else {
      console.log(PokemonsNoP);
        for (let i = parseInt(pagedApi, 10) * 12 - 12; i < parseInt(pagedApi, 10) * 12; i++) {
          let sum = i + 1;
          arr.push(PokemonsNoP.pokemons[sum]);
        }
      }
      console.log(arr);
      setpokemonsOnscreen({ pokemons: arr });
      //setPagedApi("1");
    }
  }, [PokemonsNoP, pagedApi]); */
  ////////////////////////////////////////////
  useEffect(() => {
    if (own !== "") {
      //console.log(pokemonsPropios)
      if(pokemonsPropios.length < 1) {
        //dispatch(filterApi());
        alert("¡no thing here!")
      } else {
        let pokemons = [];
        for (let i = 0; i < pokemonsPropios.length; i++) {
          pokemons.push({
            id: pokemonsPropios[i].id,
            name: pokemonsPropios[i].Nombre,
            types: pokemonsPropios[i].Types.map((tipo) => tipo.Nombre),
            imagen: pokemonsPropios[i].Imagen,
            fuerza: pokemonsPropios[i].Fuerza,
          });
        }

        console.log(pokemons);
        setpokemonsOnscreen({ pokemons: pokemons });
        setOwn("");
      }
    }
  }, [own]);

  /* let paginamax = 3; */
  const hendlestate = (e) => {
    console.log(e)
    
    /* if (e === "back") {
      setpag(pag - 6);
    }
    if (e === "next") {
      setpag(pag + 6);
    } */
    if (e === "main") {
      setUpdate("back to basic");
      setHide("nones");
      setpag("");
      //setPaged("");
    } /* else setpag(parseInt(e, 10)) */
  };

  const hendleChange = (e) => {
    if (e.target.value === "none") {
      setInput((prev) => ({ ...prev, [e.target.name]: "" }));
    } else {
      setInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const HendleChangeOnFilters = (e) => {
    /* if() */
    //console.log(e)
    const comand = e.target.value;
    console.log(comand)
    if (comand === "none" || comand === "refresh") {
      tiposLState.forEach((element) => {
        document.getElementById(element.Nombre).style.backgroundColor =
          "white";
      });
      setTypeFilters([]);
      console.log(e.target.name)
      //setPagedApi("")
    }
      if(e.target.name === "procedencia" && comand === "none") {
        
        if(PokemonsNoP.pokemons !== undefined && PokemonsNoP.pokemons.length < 1) {
        console.log('bien')
        setHide("api");
          //setpag(1);
      
        setUpdate("back to basic");
      //}
    }
    }
    if (comand === "A-Z" && pageFrom === "own") {
      console.log('entre a-z igual a own')
      let aux = pokemonsOnscreen;
      aux.pokemons.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(orderAsc(aux));
    }
    //console.log(pageFrom)
    if (comand === "A-Z" && pageFrom !== "own") {
      console.log('entre a-z dist')
      let aux = PokemonsNoP
      aux.pokemons.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      console.log(aux)
      dispatch(filtrarPokemonNoPropios(aux))
      setPagedApi("1");
    }
    if (comand === "Z-A" && pageFrom === "own") {
      let aux = pokemonsOnscreen;
      aux.pokemons.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(orderDes(aux));
    }
    if (comand === "Z-A" && pageFrom !== "own") {
      let aux = PokemonsNoP
      aux.pokemons.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(filtrarPokemonNoPropios(aux))
      setPagedApi("1");
    }
    if (comand !== "A-Z" && comand !== "Z-A") {
      setInput((prev) => ({
        ...prev,
        alfabetico: "",
      }));
    }
    if (comand === "Mayor" && pageFrom === "own") {
      let aux = pokemonsOnscreen;
      aux.pokemons.sort((a, b) => {
        if (a.fuerza < b.fuerza) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(forceAsc(aux));
    }
    if (comand === "Mayor" && pageFrom !== "own") {
      let aux = PokemonsNoP
      aux.pokemons.sort((a, b) => {
        if (a.fuerza < b.fuerza) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(filtrarPokemonNoPropios(aux))
      setPagedApi("1");
    }
    if (comand === "Menor" && pageFrom === "own") {
      let aux = pokemonsOnscreen;
      aux.pokemons.sort((a, b) => {
        if (a.fuerza > b.fuerza) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(forceDes(aux));
    }
    if (comand === "Menor" && pageFrom !== "own") {
      let aux = PokemonsNoP
      aux.pokemons.sort((a, b) => {
        if (a.fuerza > b.fuerza) {
          return 1;
        } else {
          return -1;
        }
      });
      dispatch(filtrarPokemonNoPropios(aux))
      setPagedApi("1");
    }
    if (comand !== "Mayor" && comand !== "Menor") {
      setInput((prev) => ({
        ...prev,
        fuerza: "",
      }));
    }

    //////////////////////////////////////////////paginando los 40
    /* if(comand === "Preexistentes") {
      setHide("api")
      //setPagedApi(1)
      //setPagedApi(1);

    } else if (comand === "Creados") {
      setHide("nones")
    } else {
      setHide("nones")
    } */
    //////////////////////////////////////////////////
    /////////////////////////////////////////////////los 40 en una pagina
    if (comand === "Preexistentes") {
      setPageFrom("alien")
      console.log(PokemonsNoP)
      if(typeof PokemonsNoP.pokemons === "object" && PokemonsNoP.pokemons.length > 0) {
        console.log('entro a pre')
        setHide("api");
        setpag(1);
      } else {
        dispatch(filterApi());
        alert("aun esperando el respond!")
      }
    }
    console.log(pageFrom)
    if (comand === "Creados") {
      dispatch(getOwn())
      //setPageFrom("own")
      console.log('entre a creado')
      setOwn("call");
      //console.log(pokemonsPropios.Pokemons)
      if(pokemonsPropios.length < 1) {
        
        console.log('entre a creado if')
        alert("¡no thing here!")
      } else {
        console.log('entre a creado else')

        setHide("nones");
      }
    }
    console.log(pageFrom)
    if (comand === "none") {
      setPageFrom("own")
      setHide("nones");
    }
    console.log(pageFrom)
    ////////////////////////////////////////////////////
    if (comand !== "Creados" && comand !== "Preexistentes") {
      setInput((prev) => ({
        ...prev,
        procedencia: "",
      }));
    }
    if (e.target.name === "tipos" && comand !== "refresh") {
      /* if(pageFrom === "own"){ */
        setFiltrando(Pokemons.pokemons);
      /* } else setFiltrando(PokemonsNoP.pokemons); */
      let arr;
      //console.log(typeFilters)
      //console.log(comand,'comand')
      if (!typeFilters.includes(comand)) {
        document.getElementById(comand).style.backgroundColor = "red";
        //e.target.style.color = "red"
        setTypeFilters((prev) => [...prev, comand]);
      } /*else if(e.target.name === "tipos") {
  } */ else {
        //console.log('entro al else')
        arr = typeFilters.filter((e) => e !== comand);
        //console.log(arr)
        setTypeFilters(arr);
        document.getElementById(comand).style.backgroundColor = "white";
        //e.target.style.color = "black"
        if (arr.length < 1) {
          setUpdate("back to basic");
        }
      }
      /* if (comand === "refresh") {
        tiposLState.forEach((element) => {
          document.getElementById(element.Nombre).style.backgroundColor =
            "white";
        });
        setTypeFilters([]);
        setUpdate("back to basic");
      } */
    }
  };

  const hendleTypeFilter = () => {
    if (filtrando.length > 0) {
      console.log(filtrando)
      let arre = [];
      for (let i = 0; i < filtrando.length; i++) {
        for (let f = 0; f < filtrando[i].types.length; f++) {
          console.log(filtrando[i].types);
          for (let j = 0; j < typeFilters.length; j++) {
            if (filtrando[i].types[f].includes(typeFilters[j])) {
              arre.push(filtrando[i]);
            }
          }
        }
      }
      //filtra arre!!!!!!!!!!!!!!!!!!!!!!
      const dataArr = new Set(arre);
      let result = [...dataArr];
      console.log(result);
      setSerchTypes(result);
      setpokemonsOnscreen(result)
    }
  };

  console.log(pag)
  useEffect(() => {
    if (pag !== "") {
      console.log(PokemonsNoP.pokemons);
      let arr = [];
      if (pag === "4") {
        for (let i = 36; i < 40; i++) {
          //console.log(PokemonsNoP.pokemons[i])
          arr.push(PokemonsNoP.pokemons[i]);
        }
      } else {
      console.log(PokemonsNoP);
        for (let i = pag * 12 - 12; i < pag * 12; i++) {
          let sum = i + 1;
          //console.log(sum)
          arr.push(PokemonsNoP.pokemons[sum]);
        }
      }
      console.log(arr);
      setpokemonsOnscreen({ pokemons: arr });
      //setPagedApi("1");
    }
  }, [pag]);
  console.log(PokemonsNoP);
  console.log(pokemonsOnscreen);
  return (
    <div className="big">
      <form
      className="forma"
        onChange={(e) => {
          e.preventDefault();
          hendleChange(e);
          HendleChangeOnFilters(e);
        }}
      >
        <nav >
          <ul >
            <div>
              <p>
                <label>Orden Alfabetico</label>
                <select name="alfabetico">
                  <option className="ini" value="none">
                    Messy
                  </option>
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
                <label>Orden por Fuerza</label>
                <select name="fuerza">
                  <option className="ini" value="none">
                    All
                  </option>
                  <option>Mayor</option>
                  <option>Menor</option>
                </select>
              </p>
              <p>
                <label>Filtro por Tipo</label>
                <select
                  name="tipos"
                  //onChange={hendleChangeTipos}
                  //onClick={HendleChangeOnFilters}
                >
                  <option className="ini" value="refresh">
                    All
                  </option>
                  {tiposLState.map((e, i) => {
                    return (
                      <option
                        id={e.Nombre}
                        key={i}
                        value={`${e.Nombre}`}
                      >{`${e.Nombre}`}</option>
                    );
                  })}
                </select>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    hendleTypeFilter(e);
                  }}
                >
                  serch
                </button>
                <label>Filtro por Procedencia</label>
                <select name="procedencia">
                  <option className="ini" value="none">
                    Mix
                  </option>
                  <option>Creados</option>
                  <option id="preex">Preexistentes</option>
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
                    </div >
                    <div className="textBox">
                    <h3 className="card-title">{e.name}</h3>
                    <h4>Tipo/s</h4>
                    {e.types.map((t, i) => {
                      return <h5 key={i}>{t}</h5>;
                    })}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div id="pagination" className="pagination">
        <form
          onClick={(e) => {
            //console.log(e)
            e.preventDefault();
            //console.log(e.target.name)
            if (e.target.name !== "back" && e.target.name !== "next") {
              if (pag === 1) {
                //console.log(e.target.innerText)
                e.target.innerText !== "Main" && setpag(e.target.value);
              } else e.target.innerText !== "Main" && setpag(e.target.value);
            }
            hendlestate(e.target.name);
          }}
        >
          {/* {pag === 1 ? (
            ""
          ) : (
            <button className="" name="back">
              &laquo;
            </button>
          )} */}
          {/* <button className="" id="main" name="main" value="main">
            Main
          </button> */}
          <button className="" id="pri" name={1} value={1}>
            {1}
          </button>
          <button className="" name={pag + 2} value={2}>
            {2}
          </button>
            <button className="" name={pag + 3} value={3}>
              {3}
            </button>
            <button className="" name={pag + 4} value={4}>
              {4}
            </button>
          {/* {pag > paginamax ? (
            ""
          ) : (
            <button className="" name="qui" value={pag + 5}>
              {pag + 4}
            </button>
          )}
          {pag > paginamax ? (
            ""
          ) : (
            <button className="" id="sex" name="sex" value={pag + 6}>
              {pag + 5}
            </button>
          )}
          {pag > paginamax ? (
            ""
          ) : (
            <button className="" name="next">
              &raquo;
            </button>
          )} */}
        </form>
      </div>

      {/* <div id="paginationApi" className="pagination">
        <form
          onClick={(e) => {
            e.preventDefault();
            //HendleChangeOnFilters(e);
            if (e.target.name === "main") {
              hendlestate(e.target.name);
            }
            //console.log(e.target.name)
            e.target.innerText !== "Main" && setPagedApi(e.target.innerText);
          }}
        >
          <button id="main" className="but" name="main">
            Main
          </button>
          <button className="but" id="pri" name="pri">
            {"1"}
          </button>
          <button className="but" name="seg">
           {"2"}
          </button>
          <button className="but" name="ter">
           {"3"}
          </button>
          <button className="but" name="cua">
           {"4"}
          </button>
        </form>
      </div> */}
    </div>
  );
}
