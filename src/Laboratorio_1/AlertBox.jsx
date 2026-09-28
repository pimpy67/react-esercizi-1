import '../App.css'


function AlertBox({icona, tipo, titolo, testo}) {

    let classe

  if (tipo === "successo") {
    classe = "alert-successo"
  } else if (tipo === "errore") {
    classe = "alert-errore"
  } else if (tipo === "avviso") {
    classe = "alert-avviso"
  }
return (
        <div className={`alert ${classe}`}>
        <h3>
        <span style={{ fontSize: "28px" }}>{icona}</span> {tipo.toUpperCase()}
    </h3>
    <h3>{titolo}</h3>
    <p>{testo}</p>
</div>
  )
}

export default AlertBox
