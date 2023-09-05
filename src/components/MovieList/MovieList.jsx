import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieList.css';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className="List">
      {films.map(movie => (
        <li className="ListItem" key={movie.id}>
          <link
            className="LinkDetails"
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
          >
            <i className="LogoIcon " /> {movie.title}
          </link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
