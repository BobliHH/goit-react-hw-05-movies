import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import React, { lazy } from 'react';

const Home = lazy(() => import('routing/Home'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
