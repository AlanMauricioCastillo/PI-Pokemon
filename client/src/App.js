import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import PokemonDetails from "./components/Pokemon details/PokemonDetails";
import Main from "./components/Main/Main.jsx"
import Creador from "./components/Creador/Creador.jsx"
import FirsContact from "./components/Primer contacto/First contact.jsx"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/" component={FirsContact} />
    <Route path="/pokemon" component={NavBar} />

    <Route exact path="/pokemon/byName/name" component={PokemonDetails} />
    <Route exact path="/pokemon/:id" component={PokemonDetails} />
    <Route exact path="/pokemon">
    <Buscador />
    <Creador/>
    <Main/>
    </Route>  
    </div>
    </BrowserRouter>
  );
}

export default App;
