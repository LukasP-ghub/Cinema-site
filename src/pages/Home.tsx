import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../redux/constants/actionTypes';
import HamburgerBtn from '../atoms/buttons/HamburgerBtn';
import MovieLabel from '../atoms/labels/MovieLabel';
import NavList from '../molecules/lists/NavList';
import Repertoire from '../organisms/repertoire';
import MovieSlider from '../organisms/MovieSlider';


const Home = () => {
  const navState = useSelector((state: any) => state.navReducer);
  const repertoireState = useSelector((state: any) => state.repertoireReducer);
  const dispatch = useDispatch();
  const { SHOW_NAV } = actionTypes;
  const showNavClass = navState.isVisibleNav ? 'left-0' : 'left-full';

  return (
    <div className="overflow-hidden">
      <header className='relative flex justify-between items-center min-h-10 px-3 bg-gradient-to-b from-dark to-graycustom'>
        <div>
          Cinema
        </div>
        <HamburgerBtn click={() => dispatch({ type: SHOW_NAV })} />
        <nav className={`bg-dark absolute top-full ${showNavClass} w-full z-10 md:static md:bg-transparent`}>
          <NavList data={navState.categories} />
        </nav>
      </header>

      <main>
        <MovieSlider moviesData={repertoireState.movies} />
        <Repertoire moviesData={repertoireState.movies} />
      </main>

    </div>
  )
}

export default Home;