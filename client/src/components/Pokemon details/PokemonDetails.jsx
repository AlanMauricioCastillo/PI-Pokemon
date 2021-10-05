import React from "react";
import { connect, useDispatch } from "react-redux";
import { getFromId } from "../../actions/getFromId";
import "./PokemonDetails.css";

function PokemonDetails({match, pokemon}) {
  //const dispatch = useDispatch();
  
  //componentDidMount(); 
  /* React.useEffect(() => {
    dispatch(getFromId(match.params.id));
  }); */
  //   esto es con el ciclo de vida si el componente se monto
  // esea esta en el DOM de react hace esta accion aca el id no
  // es el mismo que el que pusimos en el buscador no, este es id
  // porque es el de match, porque es el que viene con el router 
  
  
  //const{Title, Poster, Actors, Director, Plot, Rated, Released, Writer, Year} = movie
  return (
    <div className="pokemon-detail">
    <h1>soy details Pokemon</h1>
      {/* {
        pokemon
        ?
        <div>
          <div>
            <h1>
              Title: { Title } - { Year }
            </h1>
          </div>
            <img src={ Poster } alt={ "im" } />
            <h2>
            Actors: { Actors }
            </h2>
            <h2>
            Director: { Director }
            </h2>
            <h2>
            Plot: { Plot }
            </h2>
            <h2>
            Rated: { Rated }
            </h2>
            <h2>
            Released: { Released }
            </h2>
            <h2>
            Writer: { Writer }
            </h2> 
        </div>
        :
        <h1>Loading...</h1>
      }
      */}
    </div>
  )
}

/* class Movie extends React.Component {
  
  componentDidMount() {
    //   esto es con el ciclo de vida si el componente se monto
    // esea esta en el DOM de react hace esta accion aca el id no
    // es el mismo que el que pusimos en el buscador no, este es id
    // porque es el de match, porque es el que viene con el router 
    this.props.getMovieDetail(this.props.match.params.id)
  }
  render() {
    const{Title, Poster, Actors, Director, Plot, Rated, Released, Writer, Year} = this.props.movie
    console.log(this.props.match.params.id)
    return (
    <div className="movie-detail">
      {
        this.props.movie
        ?
        <div>
          <div>
            <h1>
              Title: { Title } - { Year }
            </h1>
          </div>
            <img src={ Poster } alt={ "im" } />
            <h2>
            Actors: { Actors }
            </h2>
            <h2>
            Director: { Director }
            </h2>
            <h2>
            Plot: { Plot }
            </h2>
            <h2>
            Rated: { Rated }
            </h2>
            <h2>
            Released: { Released }
            </h2>
            <h2>
            Writer: { Writer }
            </h2>
        </div>
        :
        <h1>Loading...</h1>
      }
    </div>
    )
  }
} */

function mapStateToProps(state) {
  return {
    movie: state.movieDetail
  };
}

export default connect(mapStateToProps)(PokemonDetails);