import { BrowserRouter, Route } from "react-router-dom";
import {useDispatch} from "react-redux"
import { useEffect } from "react";
import {getTypes} from "./actions/getTypes"
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import PokemonDetails from "./components/Pokemon details/PokemonDetails";
import Main from "./components/Main/Main.jsx"
import Creador from "./components/Creador/Creador.jsx"
import FirsContact from "./components/Primer contacto/First contact.jsx"
import NotFound from "./components/No encontrado/NotFound"
import './App.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTypes())
  }, [])
  return (
    <BrowserRouter>

    <div className="App">

    <Route exact path="/" component={FirsContact} />

    <Route path="/pokemon" component={NavBar} />

    <Route exact path="/pokemon/:id_or_query" component={PokemonDetails} />

    <Route exact path="/pokemon">
    <Buscador />
    <Creador/>
    <Main/>
    </Route>

    <Route exact path = "/notFound" component={NotFound}/>

    </div>
    
    </BrowserRouter>
  );
}

export default App;
