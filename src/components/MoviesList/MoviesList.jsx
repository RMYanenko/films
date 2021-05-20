import { MovieItem } from "../MovieItem/MovieItem";

function MoviesList(props) {
  const { moviesList } = props;

  return (
    <div className="movies-list">
      {moviesList.map(movie => (
       <MovieItem key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export { MoviesList };
