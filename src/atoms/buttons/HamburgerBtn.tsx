import React from 'react'

interface hamburgerBtnType {
  click: () => void,
}

const HamburgerBtn: React.FC<hamburgerBtnType> = ({ click }) => {
  return (
    <button className={`hamburger grid place-items-center w-9 h-9 rounded-sm bg-gradient-to-t from-dark to-graycustom md:hidden`} onClick={click}>

    </button>
  )
}

export default HamburgerBtn;