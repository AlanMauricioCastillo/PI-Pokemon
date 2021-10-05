import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { bindActionCreators } from 'redux';
import './Main.css';




function Main({getMovies, movies, addMovieFavorite}) {
  const [title, setTitle] = React.useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getMovies(title)
    setTitle('')
  }

  return (
      <div>
        <h2>Main</h2> 
        {/* <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            movies.map((movie) => (
              <div key={movie.imdbID} >
              <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt='movie'/>
              </Link>
                {movie.Title}-{movie.Year}
              <button onClick= {() => {
                addMovieFavorite({
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
        </ul> */}
      </div>
    );
};


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

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Main);
