import '../App.css'

import Typography from './Typography'
import FunnyButton from './FunnyButton'
import Pannello from './Pannello'
import EcommerceCard from './EcommerceCard'
import headphones from '../img/headphones-solid-full.svg'
import fotoLuna from '../img/fotoLuna.jpg'
import keyboard from '../img/keyboard-solid-full.svg'
import Biglietto from './Biglietto'
import CartaMeteo from './CartaMeteo'


function Laboratorio_2() {
    
return (


<div style= {{display: "flex", flexDirection: "column", gap: "20px"}}>



  <div>
    <p>Esercizio 1 - questo è il mio biglietto</p>

    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "40px"}} >

      <Biglietto
        evento="Concerto Rock"
        data="01/10/2026"
        luogo="Milano"
        posto="vip"
        colore="red"
      />


      <Biglietto
        evento="Mostra d'Arte"
        data="01/11/2026"
        luogo="Venezia"
        posto="standard"
        colore="green"
      />


      <Biglietto
        evento="Gara Sportiva"
        data="02/12/2026"
        luogo="Bologna"
        posto="standard"
        colore="yellow"
      />

    </div>

    <p>Esercizio 2 - queste sono le mie carte meteo</p>

</div>



  <div style={{display: "flex", gap: "20px"}}>
    <CartaMeteo
      icona="sole"
      città="Venezia"
      temperatura="30"
      previsione="soleggiato"
      emoji="☀️"
    />

    <CartaMeteo
      icona="nuvoloso"
      città="Milano"
      temperatura="20"
      previsione="nuvoloso"
      emoji="☁️"
    />

    <CartaMeteo
      icona="pioggia"
      città="Roma"
      temperatura="22"
      previsione="pioggia"
      emoji="🌧️"
    />

    <CartaMeteo
      icona="neve"
      città="Torino"
      temperatura="5"
      previsione="neve"
      emoji="❄️"
    />
  </div>

    <p>Esercizio 3 - xxxxxxxxx xxxxxxx xxxxxxx</p>











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
    fotoProdotto={headphones}
  />

  <EcommerceCard
    titolo="Keyboard"
    descrizione="Tastiera smart"
    prezzo={149}
    isSoldOut={true}
    preferito={false}
    fotoProdotto={keyboard}
  />
  </div>












</div>

)
}
export default Laboratorio_2