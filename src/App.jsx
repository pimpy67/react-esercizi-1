import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AlertBox from './AlertBox'

function App() {

  return (

    <div>
    <p>Esercizio 12</p>


    <AlertBox
        tipo="successo"
        icona="✅"
        titolo="Fatto"
        testo="Dati salvati correttamente."    >
    </AlertBox>

    <AlertBox
        tipo="errore"
        icona="❌"
        titolo="Errore"
        testo="Salvataggio non riuscito."    >
    </AlertBox>

    <AlertBox
        tipo="avviso"
        icona="⚠️"
        titolo="Attenzione"
        testo="Controlla i dati inseriti."    >
    </AlertBox>
    
    </div>

  )
}

export default App
