import { useState } from 'react'
import './App.css'
import Typography from './Laboratorio_2/Typography.jsx'
import FunnyButton from './Laboratorio_2/FunnyButton.jsx'
import Pannello from './Laboratorio_2/Pannello.jsx'
import fotoLuna from './img/fotoLuna.jpg'
import headphones from './img/headphones-solid-full.svg'

import EcommerceCard from './Laboratorio_2/EcommerceCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
<div style={{display: "flex", flexDirection: "column", gap:"20px"}}>

    <Typography
    colore = "red" testo ="ho 20 anni"> +ciao</Typography>

    <FunnyButton 
    color = "yellow" isLarge={true}> Sono grande!</FunnyButton>

    <FunnyButton
    color = "green" isLarge={false}> Sono piccolo!</FunnyButton>

    <FunnyButton
    color = "lightblue" isLarge={true}> Sono light blu</FunnyButton>
    <FunnyButton color = "green"> questo è il secondo children</FunnyButton>


    <Pannello titolo="Il mio pannello">
    <p>ciao mondo</p>
    <p>questo è il mio contenuto</p>
    </Pannello>

    <Pannello titolo="Il mio 2 pannello">
    <p>ciao mondo</p>
    <img style={{ width: "200px", height: "150px", objectFit: "cover" }} src={fotoLuna} alt=""/>
    <button>scarica</button>
    </Pannello>

<div style={{display: "flex", gap: "20px", flexWrap: "wrap" }}>
  <EcommerceCard
    titolo="Cuffie"
    descrizione="Cuffie wireless con cancellazione del rumore"
    prezzo={99}
    isSoldOut={false}
    preferito={true}
    fotoProdotto="/img/graphic.jpeg"
  />

  <EcommerceCard
    titolo="Headphones"
    descrizione="Orologio smart con GPS"
    prezzo={149}
    isSoldOut={true}
    preferito={false}
    fotoProdotto={headphones}
  />
  </div>

  </div>
  )

}

export default App
