import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/searchBar'
import './style.scss'

export default function Header(props: any) {
  return (
    <div className='app-container'>
      <div className='app-header'>
        <div className='logo'>
          <Link to='/'>eLotus</Link>
        </div>
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}
