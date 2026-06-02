import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Lista from './components/Lista'


function App() {
  return (
    <>
      <Header/>
      <main>
        <h2>Coleccion</h2>
        <Lista/>
      </main>
    </>
  ) 
}

export default App
