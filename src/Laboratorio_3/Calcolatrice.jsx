import { useState } from 'react'
import '../App.css'

function Calcolatrice() {
    const [valore, setValore] = useState(0)

return (
    <div style={{ border: "1px solid gray", borderRadius: "12px", padding: "16px", width: "250px" }}>

        <h2>Valore: {valore}</h2>

        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => {setValore(valore + 1)}}>+1</button>
            <button onClick={() => {setValore(valore - 1)}}>-1</button>
            <button onClick={() => {setValore(valore * 2)}}>x2</button>
            <button onClick={() => {setValore(valore / 2)}}>/2</button>
        </div>

    </div>
    );

}

export default Calcolatrice;
