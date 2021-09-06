import React, { useState, useEffect } from 'react';
import MovieLabel from '../atoms/labels/MovieLabel';
import { movieDataType } from '../types/types';

interface movieSliderType {
  moviesData: movieDataType[],
}

const MovieSlider: React.FC<movieSliderType> = ({ moviesData }) => {
  const [page, setPage] = useState(0);
  const [slideRange, setSlideRange] = useState(100);
  const [slides, setSlides] = useState<JSX.Element[]>([])
  const moviesDataSlice = moviesData.filter((movie, index) => index <= 3);

  const movies = moviesDataSlice.map((movie, index) => {
    return <div key={movie.title} className={`col-span-full row-span-full transition-opacity duration-300 opacity-0 ${page === index ? 'opacity-100' : ''}`}>
      <div className='relative'>
        <img src={movie.img} alt="" className='block w-full max-w-screen-md ratio-2/1' />
        <span className='absolute top-full left-1/2 transform -translate-y-2/4 -translate-x-2/4'>
          {movie.labels.map((label) => <MovieLabel label={`${label}`} addStyles='inline-block ml-1' key={`${movie.title}${label}`} />)}
        </span>
      </div>
      <h2 className="pt-5 pb-3 text-center text-4xl">{movie.title}</h2>
    </div>
  })

  const dots = moviesDataSlice.map((item, index) => <li key={`dot${index}`} onClick={() => setPage(index)} className={`inline-block w-4 h-4 mx-0.5 rounded-full bg-gray-500 ${page === index ? 'bg-blue-500' : ''}`}> </li>);

  const handleSlide = (index: number, j: number) => {
    setPage(j);
    setSlideRange(index * 100 + 100);
  }

  useEffect(() => {
    const sliders = [];
    let j = 0;
    for (let i = 0; i < slides.length + 4; i++) {
      const pg = j;
      sliders.push(
        <li key={`${i}`} onClick={() => handleSlide(i, pg)} className={`w-full h-1/3 transition-transform -translate-x-full`} style={{ transform: `translateY(-${slideRange}%)` }} data-slide={j}>
          <img src={moviesDataSlice[j].img} alt="" className='w-full h-full' />
        </li>)
      j++;
      if (j >= 4) j = 0;
    }
    setSlides(sliders)
  }, [slideRange])

  return (
    <section className='w-full bg-gradient-to-b from-gray-50 to-graycustom'>
      <div className='w-full max-w-screen-lg mx-auto text-white grid grid-cols-12 grid-rows-6 place-items-center overflow-hidden bg-gradient-to-b from-gray-50 to-graycustom md:grid-rows-5 md:place-items-end'>
        <div className='col-span-full row-span-5 grid grid-cols-1 grid-rows-1 md:col-span-9'>{movies}</div>
        <ul className='col-span-full row-span-1 md:hidden'>
          {dots}
        </ul>
        <div className='hidden relative h-full w-full md:block md:col-start-10 md:col-end-13 md:row-span-full overflow-hidden'>
          <ul className='absolute top-0 left-0 h-full max-h-full w-full md:block'>
            {slides}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MovieSlider;