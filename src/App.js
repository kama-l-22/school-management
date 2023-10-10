import React from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import { useState } from 'react'

export default function App() {
  const [userName, setuserName] = useState('Kamalesh')
  return (
    <div>
      <Navbar userName={userName}/>
    </div>
  )
}
