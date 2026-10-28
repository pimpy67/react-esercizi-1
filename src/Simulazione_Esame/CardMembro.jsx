import '../App.css'
import Avatar from './Avatar'
import Badge from './Badge'

function CardMembro({ nome, ruolo, foto, anniEsperienza, isLead }) {

return (
    <div style={{ border: "1px solid gray", borderRadius: "12px", padding: "16px", width: "200px" }}>

        <Avatar src={foto} nome={nome} />

        <h3>{nome}</h3>

        <p>{ruolo}</p>

        <p>{anniEsperienza >= 5 ? "Senior" : "Junior"} · {anniEsperienza} anni</p>

        {isLead && <Badge testo="Team Lead" colore="red" />}

    </div>
    );

}

export default CardMembro;
