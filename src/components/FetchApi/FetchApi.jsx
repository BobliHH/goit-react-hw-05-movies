import './FetchApi.css';
import axios from 'axios';

const API_KEY = '68756bc19b046f0067322cfee7014e71';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

