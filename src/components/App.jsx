import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
export const App = () => {
  return (
    <Routes>
      <div className="headerContainer">
        <button className="button">Home</button>
        <button className="button">Movies</button>
      </div>
    </Routes>
  );
};
