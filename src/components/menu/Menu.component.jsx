import React from 'react'
import './Menu.style.scss';

function Menu({ menuState }) {
  return (
    <div className={`Menu ${menuState ? 'showMe' : 'hidden'}`}>
      <h2>Menu</h2>
    </div>
  )
}

export default Menu;
