import React, { useState, useEffect } from 'react'
import { NavListType, dataType } from '../../types/types';
import '../../styles.css';

const NavList: React.FC<NavListType> = ({ data }) => {
  const [listItems, setListItems] = useState([]);
  const [flag, setFlag] = useState(false);

  const createList = (data: dataType) => {
    return data.map(item => {
      return <li className={`group relative uppercase pl-4 md:pl-0 md:pr-4`} key={item.title}>
        <a href=''>{item.title}</a>
        {item.subList.length > 0 ? <ul className='md:absolute md:top-full md:left-0 md:bg-white md:text-black md:rounded-lg md:pl-4 md:w-max md:opacity-0 md:transition-opacity md:invisible md:group-hover:visible md:group-hover:opacity-100'>
          {createList(item.subList)}
        </ul> : null}
      </li>
    })
  }

  useEffect(() => {
    let list: JSX.Element[] = createList(data);
    setListItems(list);
  }, [])

  return (
    <ul className={`flex flex-col font-bold text-2xl text-white leading-10 md:flex-row md:text-xl`}>
      {listItems}
    </ul>
  )
}
export default NavList;