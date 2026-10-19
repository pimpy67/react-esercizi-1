import '../App.css'

const coloriStato = {
    online: "green",
    offline: "gray",
    occupato: "red",
}

function ProfiloUtente({nome, cognome, ruoli, email, stato, isVerified, isAdmin, immagine}) {

    const iniziali = nome[0] + cognome[0]

return (
    <div style={{ border: "1px solid gray", borderRadius: "12px", padding: "16px", width: "250px" }}>

        {immagine
            ? <img src={immagine} alt={nome + " " + cognome} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} />
            : <div style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "lightgray", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px" }}>{iniziali}</div>
        }

        <h2>{nome} {cognome} {isVerified && "✔️"}</h2>

        {isAdmin && <p style={{ color: "purple", fontWeight: "bold" }}>Amministratore</p>}

        <p>{email}</p>

        <p style={{ color: coloriStato[stato] }}>● {stato}</p>

        <ul>
            {ruoli.map((ruolo) => (
                <li key={ruolo}>{ruolo}</li>
            ))}
        </ul>

    </div>
    );

}

export default ProfiloUtente;
