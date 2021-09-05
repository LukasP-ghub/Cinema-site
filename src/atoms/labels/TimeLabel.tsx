import React from 'react'

interface timeLabelType {
  time: string,
}

const TimeLabel: React.FC<timeLabelType> = ({ time }) => {

  return (
    <div className={`inline-block p-0.5 px-1 ml-1 font-semibold bg-blue-700 text-white rounded md:bg-transparent md:text-black md:hover:bg-blue-700 md:hover:text-white transition-colors`}>
      {time}
    </div>
  )
}

export default TimeLabel;