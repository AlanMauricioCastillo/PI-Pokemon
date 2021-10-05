import React from "react";
//import { Link } from 'react-router-dom';
import './Creador.css';




export default function Creador() {
  return (
      <div>
        <h2>Creador</h2>
        {/* <ul>
              <div className='movie'> 
          {favorites.map((movie) => (
            <div key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt='movie'/>
              </Link>
              <button onClick= {() => {
                removeMovieFavorite(movie.imdbID)
              }}>Remove</button>
            </div>
          ))}
        </div>
        </ul> */}
      </div>
    );
}


/* class ConnectedList extends React.Component {

  onFilter = (movieId) => {
    let movie = this.props.favorites.find(c => c.imdbID === parseInt(movieId));
    return movie;
    }
  
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
              <div className='movie'> 
          {this.props.favorites.map((movie) => (
            <div key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt='movie'/>
              </Link>
              <button onClick= {() => {
                this.props.removeMovieFavorite(movie.imdbID)
              }}>Remove</button>
            </div>
          ))}
        </div>
        </ul>
      </div>
    );
  }
} */

/* function mapStateToProps(state) {
  return {
    favorites: state.moviesFavorites,
    detail: state.movieDetail
  };
} */

/* 
export default connect(mapStateToProps/* , {removeMovieFavorite} )(Creador); */
