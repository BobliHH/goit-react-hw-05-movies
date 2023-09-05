import './Layout.css';
import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
            <link className="Links" to="/" end>
              Home
            </link>
            <link className="Links" to="/movies">
              Movie
            </link>
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
