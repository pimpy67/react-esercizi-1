import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  fotoLuna  from "./img/fotoLuna.jpg";
import  Typography  from "./Typography.jsx";
import TitleSubtitle from './TitleSubtitle.jsx'
import ButtonTitle from "./ButtonTitle.jsx";
import Card from './Card.jsx';
import CarDinamica from "./CarDinamica.jsx";
import TitleSubtitleDinamico from './TitleSubtitleDinamico.jsx';
import Badge from './Badge.jsx';
import Prodotto from './Prodotto.jsx'
import AlertBox from './AlertBox.jsx'
import laptopIcon from './img/laptop-solid-full.svg'
import headphonesIcon from './img/headphones-solid-full.svg'
import mouseIcon from './img/computer-mouse-solid-full.svg'
import keyboardIcon from './img/keyboard-solid-full.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <img src={fotoLuna} alt="Descrizione dell'immagine" style={{borderRadius: "0%"}} className="image-box"/>
  <img src="/img/jpeg-image-800x480-pixels-v0-F68kvfYbadU3ah6qa2n5vbzX3mAVp97dzDtvp7HIdZ0.webp" alt="" className="image-box" />

  <p>Questo è un bottone</p>
  <button onClick={() => {console.log("ciao");}}>ciao</button>

  <p className='text-red'>esercizio 4</p>
  <Typography></Typography>
  <Typography></Typography>
  <Typography></Typography>

  <p className='text-red'>esercizio 5</p>
  <TitleSubtitle></TitleSubtitle>
  <TitleSubtitle></TitleSubtitle>
  <TitleSubtitle></TitleSubtitle>

  <p className='text-red'>esercizio 6</p>
<ButtonTitle></ButtonTitle>
<ButtonTitle></ButtonTitle>
<ButtonTitle></ButtonTitle>

  <p className='text-red'>esercizio 7</p>
  <Card></Card>
  <Card></Card>

<p className='text-red'>esercizio 8</p>
<section className='CarDinamica-container'>
<CarDinamica
imageSrc="/public/img/uomo-d-affari-professionale.jpg"
name="Roberto"
role="Developer"
></CarDinamica>

<CarDinamica
imageSrc="/public/img/donna-avatar-riccio-bruna.jpg"
name="Laura"
role="FullStack"
></CarDinamica>

<CarDinamica
imageSrc="/public/img/graphic.jpeg"
name="Jacob"
role="Graphic Design"
>
</CarDinamica>
</section>


<p className='text-red'>esercizio 9</p>
<div className='component-TSDinamico'>
<TitleSubtitleDinamico
className='format-TSDinamico'

name="Paolo"
role="CEO"
></TitleSubtitleDinamico>

<TitleSubtitleDinamico 
className='format-TSDinamico'
name="Andrea"
role="Ingegnere"
></TitleSubtitleDinamico>

<TitleSubtitleDinamico
className='format-TSDinamico'
name="Sara"
role="Administrator"
></TitleSubtitleDinamico>

<TitleSubtitleDinamico
className='format-TSDinamico'
name="Chiara"
role="Manager"
></TitleSubtitleDinamico>
</div>

<p className='text-red'>esercizio 10</p>

<div style={{display:'flex', gap:'25px', justifyContent:'center', padding:'20px', border: '1px solid gray', width: 'fit-content', margin: '0 auto'}}>
<Badge
testo="Admin"
colore="red"
></Badge>

<Badge
testo="Editor"
colore="blue"
></Badge>

<Badge
testo="Ospite"
colore="green"
></Badge>
</div>


<p className='text-red'>esercizio 11</p>

<div className='prodotto'>


    <Prodotto icona={laptopIcon} nome="LapTop Pro" prezzo={999}>
    </Prodotto>

    <Prodotto icona={headphonesIcon} nome="Cuffie Wireless" prezzo={149}>
    </Prodotto>

    <Prodotto icona={mouseIcon} nome="Mouse Ergonomico" prezzo={59}>
    </Prodotto>

    <Prodotto icona={keyboardIcon} nome="Tastiera Meccanica" prezzo={89}>
    </Prodotto>


</div>

<p className='text-red'>esercizio 12</p>

<div style={{display:'flex', gap:'25px', justifyContent:'center', padding:'20px', border: '1px solid gray', width: 'fit-content', margin: '0 auto', flexWrap: 'wrap'}}>
  <AlertBox
      tipo="successo"
      icona="✅"
      titolo="Fatto"
      testo="Dati salvati correttamente."
  ></AlertBox>

  <AlertBox
      tipo="errore"
      icona="❌"
      titolo="Errore"
      testo="Salvataggio non riuscito."
  ></AlertBox>

  <AlertBox
      tipo="avviso"
      icona="⚠️"
      titolo="Attenzione"
      testo="Controlla i dati inseriti."
  ></AlertBox>
</div>


</div>
  )
}

export default App
