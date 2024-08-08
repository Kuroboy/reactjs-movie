import React from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/NavListData'
import './style/header.css'
import Search from '../components/Search'
import Button from '../components/Button'
import SearchMovies from './SearchMovies'

const Header = () => {
  return (
    <header>
        <a href="/" className="logo">
            Kuronema
        </a>
        <ul className="nav">
            {
                navListData.map(nav=>(
                    <NavListItem key={nav._id} nav={nav}/>
                ))
            }
        </ul>
        <SearchMovies/>
        <Button
            icon={<ion-icon name="log-out-outline"></ion-icon>}
            name='Sign In'
        />
    </header>
  )
}

export default Header
