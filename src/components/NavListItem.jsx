import React from 'react'
import './style/navListItem.css'

const NavListItem = ({ nav }) => {
  return (
      <li className={nav.active ? 'active' : ''}>
          <a href={nav.Link}>{nav.name}</a>
      </li>
  ); 
};

export default NavListItem;
