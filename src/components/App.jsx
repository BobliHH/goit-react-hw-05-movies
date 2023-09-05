import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import React, { lazy } from 'react';

const Home = lazy(() => import('Routing/Home'));
const Movies = lazy(() => import('Routing/Movies'));
const MovieDetails = lazy(() => import('Routing/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
