import "../App.css"
import { WiDaySunny, WiCloudy, WiSnow, WiRain } from 'react-icons/wi'

function CartaMeteo ({icona, città, temperatura, previsione, emoji}) {

return(

<div style={{border: "1px solid black", padding: "15px", margin: "10px", display: "flex", gap: "20px", alignItems: "center", justifyContent: "space-between", width: "400px", height: "120px"}}>

    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
        {icona === "sole" && <WiDaySunny size={80} />}
        {icona === "nuvoloso" && <WiCloudy size={80} />}
        {icona === "neve" && <WiSnow size={80} />}
        {icona === "pioggia" && <WiRain size={80} />}
    </div>

    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <h3>{città}</h3>
        <p>Temperatura: {temperatura}°C</p>
    </div>

    <div>
        <p style={{fontWeight: "bold"}}>{emoji} {previsione}</p>
    </div>

</div>

)
}

export default CartaMeteo
