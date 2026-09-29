import "../App.css"

function Biglietto ({evento, data, luogo, posto, colore}) {

return(

<div style={{border: "1px solid black", padding: "15px", margin: "10px", display: "flex", gap: "20px", alignItems: "center", justifyContent: "space-between", width: "600px", height: "120px"}}>

    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <h3>{evento}</h3>
        <p>Data: {data}</p>
    </div>

    <div style={{display: "flex", gap: "20px"}}>
        <p>Luogo: {luogo}</p>
        <p style={{backgroundColor: colore, fontWeight: "bold"}}>Posto: {posto}</p>
    </div>

</div>

)
}

export default Biglietto
