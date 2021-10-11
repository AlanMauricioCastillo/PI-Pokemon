import React from "react";
import Validador from "./Validador.js";
import { useSelector } from "react-redux";
import { newPokemon } from "../../actions/newPokemon";
import { getThemAll } from "../../actions/getThemAll";
import { useEffect } from "react";
import {useDispatch} from "react-redux" 
import "./Creador.css";

export default function Creador() {
  const dispatch = useDispatch()
  var tipos = useSelector((state) => state.pokemonsTypes);
  var creations = useSelector((state) => state.pokemonsPropios);
  const [call, setCall] = React.useState("")
  const [render, setRender] = React.useState("")
  const [input, setInput] = React.useState({
    Nombre: "",
    Vida: "",
    Fuerza: "",
    Defensa: "",
    Velocidad: "",
    Imagen: "",
    Altura: "",
    Peso: "",
    Tipo: "",
  });
  const [prevew, setPrevew] = React.useState({
    name: "",
    hp: "",
    att: "",
    def: "",
    speed: "",
    img: "",
    height: "",
    weig: "",
    type: "",
  });

  const [errors, setErrors] = React.useState({});
  //console.log(input)

  const handleInputChangeTypes = (e) => {
    let value = [...input.Tipo];
    if (!input.Tipo.includes(e.target.value)) value.push(e.target.value);
    setInput((prev) => ({
      ...prev,
      Tipo: value,
    }));
  };

  const handlePrevew = (e) => {
    let arr = [];
    if (input.Tipo) {
      arr = input.Tipo.filter((e, i) => {
        return input.Tipo.indexOf(e) === i;
      });
    }
    setPrevew((prev) => ({
      ...prev,
      name: input.Nombre,
      hp: input.Vida,
      att: input.Fuerza,
      def: input.Defensa,
      speed: input.Velocidad,
      img: input.Imagen,
      height: input.Altura,
      weig: input.Peso,
      type: arr,
    }));
  };

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    let objError = Validador({ ...input, [e.target.name]: e.target.value });
    setErrors(objError);
  };

  const hendleRefresh = (e) => {
    console.log(e)
    setPrevew((prev) => ({
      ...prev,
      type: [],
    }));
  }

  useEffect(() => {
    const i = creations.find(
      (e) => e.name === input.Nombre
    );
    if (!i) {
      if(call !== "") {
        dispatch(newPokemon(input));
      }
      } else {
        alert("the Pokemon all ready")
      }
    dispatch(getThemAll());
    setCall("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call, dispatch]);

  /* 
  useEffect(() => {
    if(render === "api") {
      document.getElementById("pagination")
      .style.display = "none";
      document.getElementById("paginationApi")
      .style.display = "inline-block";
    } 
    if(render === "all") {
      document.getElementById("pagination")
      .style.display = "inline-block";
      document.getElementById("paginationApi")
      .style.display = "none";
    }
    if(render === "nones") {
      document.getElementById("paginationApi")
      .style.display = "none";
      document.getElementById("pagination")
      .style.display = "none";
    }
  },[render])
 */
  

  const {
    Nombre,
    Vida,
    Fuerza,
    Defensa,
    Velocidad,
    Imagen,
    Altura,
    Peso,
    Tipo,
  } = input;
  const { name, hp, att, def, speed, img, height, weig, type } = prevew;
  console.log(tipos)
  return (
    <div>
      <h2>Crea a tu Pokemon</h2>
      <form
        onSubmit={(e) => {
          console.log(e.target)
          e.preventDefault();
          //console.log(e,'prevewwww')
          handlePrevew();
        }}
      >
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            className={errors.Nombre && "danger"}
            onChange={handleInputChange}
            value={input.Nombre}
          />
          {errors.Nombre && !Nombre && (
            <p className="danger">{errors.Nombre}</p>
          )}
        </div>
        <p>
          <label>Vida:</label>
          <input
            type="number"
            name="Vida"
            onChange={handleInputChange}
            value={Vida}
          />
        </p>
        <p>
          <label>Fuerza:</label>
          <input
            type="number"
            name="Fuerza"
            onChange={handleInputChange}
            value={Fuerza}
          />
        </p>
        <p>
          <label>Defensa:</label>
          <input
            type="number"
            name="Defensa"
            onChange={handleInputChange}
            value={Defensa}
          />
        </p>
        <p>
          <label>Velocidad:</label>
          <input
            type="number"
            name="Velocidad"
            onChange={handleInputChange}
            value={Velocidad}
          />
        </p>
        <p>
          <label>Imagen:</label>
          <input
            type="url"
            name="Imagen"
            onChange={handleInputChange}
            value={Imagen}
          />
        </p>
        <p>
          <label>Altura:</label>
          <input
            type="number"
            name="Altura"
            onChange={handleInputChange}
            value={Altura}
          />
        </p>
        <p>
          <label>Peso:</label>
          <input
            type="number"
            name="Peso"
            onChange={handleInputChange}
            value={Peso}
          />
        </p>

        <div>
          <label>Tipo/s:</label>
          <select value={Tipo} onChange={handleInputChangeTypes}>
            <option value="none">Choose</option>
            {tipos.map((e, i) => {
              return (
                <option key={i} value={`${e.Nombre}`}>{`${e.Nombre}`}</option>
              );
            })}
          </select>
          <button onClick={(e)=>{
          hendleRefresh(e)
        }} name="type" >refresh</button>
          </div>
        
        <input onChange={(e) => {
          console.log(e.target)
          e.preventDefault();
          //console.log(e,'prevewwww')
          handlePrevew();
        }} id="submitPrevew" type="submit" name="Prevew" value="Prevew" />
      </form>

      <hr />
      <div id="prevew" className="crea-containers">
        {name ? (
          <div className="movie-detail">
            <div>
              <h1>{name}</h1>
            </div>
            <img src={img} alt={"im"} className="img" />
            <h2>Fuerza: {att}</h2>
            <h2>Defensa: {def}</h2>
            <h2>Altura: {height}</h2>
            <h2>Peso: {weig}</h2>
            <h2>Velocidad: {speed}</h2>
            <h2>Vida: {hp}</h2>
            <h2>
              Tipo/s:{" "}
              {type.map((e, i) => {
                return <div key={i}>{e}</div>;
              })}
            </h2>
            <form
              onClick={(e) => {
                e.preventDefault();
                setCall("make");
              }}
            >
              <input onSubmit={(e) => {
          console.log(e.target)
          e.preventDefault();
          setInput("")
        }} type="submit" name="Crear" value="Crear" />
            </form>
          </div>
        ) : <h1>loading...</h1>
        }
      </div>
    </div>
  );
}
