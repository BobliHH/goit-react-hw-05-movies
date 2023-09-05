import react, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../components/FetchApi/FetchApi';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies(); // Call the fetchTrendingMovies function
        setTrendingMovies(movies); // Update the trendingMovies state with the fetched movies
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); // Call the fetchData function to fetch the trending movies
  }, []);

  return (
    <div className="container">
      <h1>Trending today</h1>
      <div>
        {trendingMovies.length === 0 ? (
          alert('No movies')
        ) : (
          <MovieList films={trendingMovies} />
        )}
      </div>
    </div>
  );
};
export default Home;
