import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './components/Map.jsx'
import SideBar from './components/SideBar.jsx'
import SearchBar from './components/SearchBar.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  

  return (
      <div id='content-div'>
        <SideBar />
        <SearchBar />
        <NavBar />
        <Map />
      </div>
  )
}

export default App
