import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieList.css';
import { Link } from 'react-router-dom';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className="List">
      {films.map(movie => (
        <li className="ListItem" key={movie.id}>
          <Link
            className="LinkDetails"
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
          >
            <i className="LogoIcon " /> {movie.title}
          </Link>
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
