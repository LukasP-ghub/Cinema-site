import React, { useState, useEffect } from 'react'
import { NavListType, dataType } from '../../types/types';

const NavList: React.FC<NavListType> = ({ data }) => {
  const [listItems, setListItems] = useState([]);

  const createList = (data: dataType) => {
    return data.map(item => {
      return <li className={`uppercase text-white pl-4`} key={item.title}>
        <a href=''>{item.title}</a>
        {item.subList.length > 0 ? <ul>{createList(item.subList)}</ul> : null}
      </li>
    })
  }

  useEffect(() => {
    let list: JSX.Element[] = createList(data);
    setListItems(list);
  }, [])

  return (
    <ul className={`flex flex-col font-bold text-2xl leading-10`}>
      {listItems}
    </ul>
  )
}
export default NavList;