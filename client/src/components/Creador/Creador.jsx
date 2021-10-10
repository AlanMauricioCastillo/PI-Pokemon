import React from "react";
import Validador from "./Validador.js";
import { useSelector } from "react-redux";
import { newPokemon } from "../../actions/newPokemon";
import { getThemAll } from "../../actions/getThemAll";
/* import { useEffect } from "react"; */
import {useDispatch} from "react-redux" 
import "./Creador.css";

export default function Creador() {
  const dispatch = useDispatch()
  /* useEffect(() => {
    dispatch(getThemAll())
  }, [dispatch]) */
  var tipos = useSelector((state) => state.pokemonsTypes);
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

  const call = () => {
    dispatch(newPokemon(input));
    dispatch(getThemAll());
  };

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
  return (
    <div>
      <h2>Crea a tu Pokemon</h2>
      <form
        onSubmit={(e) => {
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
        <p>
          <label>Tipo/s:</label>
          <select value={Tipo} onChange={handleInputChangeTypes}>
            <option value="none">Choose</option>
            {tipos.map((e, i) => {
              return (
                <option key={i} value={`${e.Nombre}`}>{`${e.Nombre}`}</option>
              );
            })}
          </select>
        </p>
        <input type="submit" name="Prevew" value="Prevew" />
      </form>

      <hr />
      <div className="crea-containers">
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
              onSubmit={(e) => {
                e.preventDefault();
                call();
                dispatch(getThemAll());
                alert("¡Well done Pokemon created!");
              }}
            >
              <input type="submit" name="Crear" value="Crear" />
            </form>
          </div>
        ) : (
          <div className="inProgres" />
        )}
      </div>
    </div>
  );
}
