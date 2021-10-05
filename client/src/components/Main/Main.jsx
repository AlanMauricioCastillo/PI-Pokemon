import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import PokemonDetails from "../Pokemon details/PokemonDetails";
/* import * as actionCreators from '../../actions/index.js';
import { bindActionCreators } from 'redux'; */
import "./Main.css";

export default function Main() {
  
  var firstNinePokemons = useSelector((state) => state.pokemons);
console.log(firstNinePokemons, 'sssssssssssssss')

  /* function handleChange(event) {
    setTitle(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getMovies(title)
    setTitle('')
  } */

  return <div className='cards' key ='alt'>
      {
        firstNinePokemons.pokemons.map((e) => {
          return <div className="card">
              <Link to={`/pokemon/${e.id}`} className="link" >
                <div>
                  <div>
                    <img
                      src={e.imagen}
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">{e.name}</h5>
                    <h6>Tipo/s</h6>
                    {
                      e.types.map((t) => {
                        return <p>{t}</p>
                      })
                    }
                </div>
              </Link>
            </div>
        })
      }
    </div>
}


/* class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange = (event) => {
    this.setState({ title: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    this.setState({title:''})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies.map((movie) => (
              <div key={movie.imdbID} >
              <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt='movie'/>
              </Link>
                {movie.Title}-{movie.Year}
              <button onClick= {() => {
                this.props.addMovieFavorite({
                  Title: movie.Title,
                  imdbID: movie.imdbID,
                  Poster: movie.Poster,
                  Year: movie.Year
                })
              }}>
                Favorite
              </button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
} */

/* function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Main); */

/* export default Main; */
