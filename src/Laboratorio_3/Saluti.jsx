import '../App.css'
import ActionButton from './ActionButton'

const nomi = ["Marco", "Giulia", "Luca", "Sara"]

function Saluti() {

return (
    <div style={{ display: "flex", gap: "10px" }}>
        {nomi.map((nome) => (
            <ActionButton key={nome} label={nome} message={"Ciao " + nome + "!"} />
        ))}
    </div>
    );

}

export default Saluti;
