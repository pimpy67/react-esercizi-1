import { useState } from 'react'
import '../App.css'

function Contatore() {
    const [contatore, setContatore] = useState(0)

return (
    <button onClick={() => {setContatore(contatore + 1)}}>
        Cliccami ({contatore})
    </button>
    );

}

export default Contatore;
