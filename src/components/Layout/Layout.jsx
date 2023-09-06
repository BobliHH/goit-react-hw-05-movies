import './Layout.css';
import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="Container">
        <header className="Header">
          <p className="Logo">
            <span className="IconLogo" />
            TMDB
          </p>
          <nav>
            <NavLink className="Links" to="/" end>
              Home
            </NavLink>
            <NavLink className="Links" to="/movies">
              Movie
            </NavLink>
          </nav>
        </header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <footer className="Footer">
          <p className="Text">&copy; {new Date().getFullYear()} Movie Search</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
