import React, { useState } from 'react'
import SearchBar from '../searchBar/searchBar'
import './style.scss'

export default function Header(props: any) {
  return (
    <div className='app-container'>
      <div className='app-header'>
        <div className='logo'>eLotus</div>
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}
