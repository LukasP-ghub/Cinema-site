import React from 'react'
import MovieLabel from '../atoms/labels/MovieLabel'
import TimeLabel from '../atoms/labels/TimeLabel'
import { movieDataType } from '../types/types'

interface repertoireType {
  moviesData: movieDataType[],
}

const Repertoire: React.FC<repertoireType> = ({ moviesData }) => {

  const movies = moviesData.map((movie, index) =>
    <li className='min-h-100px flex flex-col justify-evenly items-center' key={`${movie.title}${index}`}>
      <span>{movie.labels.map((label, index) => <MovieLabel label={`${label}`} addStyles='inline-block ml-1' key={`${movie.title}${label}${index}`} />)}</span>
      <h4 className="text-center text-2xl">{movie.title}</h4>
      <span>{movie.showTimes.map((time, index) => <TimeLabel time={`${time}`} key={`${movie.title}${time}${index}`} />)}</span>
    </li>
  )

  return (
    <section>
      <div className='min-h-100px flex flex-col justify-evenly'>
        <h3 className="text-center text-2xl">
          Repertuar na dziś
        </h3>
      </div>
      <ul>
        {movies}
      </ul>
    </section>
  )
}

export default Repertoire;