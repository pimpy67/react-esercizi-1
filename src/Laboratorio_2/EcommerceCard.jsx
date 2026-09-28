import '../App.css'
import FunnyButton from './FunnyButton.jsx'

function EcommerceCard({titolo, descrizione, prezzo, isSoldOut, preferito, fotoProdotto}) {

    
return (
    <div style={{ border: "1px solid gray", borderRadius: "12px", padding: "16px", width: "250px" }}>

        <img src={fotoProdotto} alt={titolo} width="200" />
        <h2>{titolo} {preferito ? "❤️" : "🤍"}</h2>
        <p>{descrizione}</p>
        <p>{prezzo} €</p>

        {isSoldOut
            ? <p style={{ color:"red"}}>Esaurito</p>
            : <FunnyButton color="green" isLarge>Compra ora</FunnyButton >

        }

    </div>
    );

   
    
}

export default EcommerceCard;