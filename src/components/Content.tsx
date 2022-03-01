import { GenreResponseProps, MovieProps } from '../App';
import { ContentHeader } from './ContentHeader';
import { MovieCard } from './MovieCard';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <ContentHeader title={props.selectedGenre.title} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
