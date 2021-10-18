import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTypes } from "./actions/getTypes";
//import { getOwn } from "./actions/getOwn"
//import {getThemAll} from "./actions/getThemAll"
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
//import Paginado from "./components/Paginado/Paginado";

import PokemonDetails from "./components/Pokemon details/PokemonDetails";
import Main from "./components/Main/Main.jsx";
import Creador from "./components/Creador/Creador.jsx";
import FirsContact from "./components/Primer contacto/First contact.jsx";
import NotFound from "./components/No encontrado/NotFound";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FirsContact} />

          <Route exact path="/pokemonCreator" component={Creador} />

          <Route
            exact
            path="/pokemon/:id_or_query"
            component={PokemonDetails}
          />

          <Route exact path="/pokemon">
            <Buscador />
            <Main />
          </Route>

          <Route path="*" component={NotFound} />
        </Switch>

        <Route path="/pokemon" component={NavBar} />

        <Route path="/pokemonCreator" component={NavBar} />
      </div>
    </BrowserRouter>
  );
}

export default App;
