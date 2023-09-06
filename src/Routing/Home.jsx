import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/FetchApi/FetchApi';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="Container">
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
