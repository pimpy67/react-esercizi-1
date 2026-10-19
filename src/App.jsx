import { useState } from 'react'
import './App.css'
import Laboratorio_2 from './Laboratorio_2/Laboratorio_2'
import ActionButton from './Laboratorio_3/ActionButton.jsx'

function App() {
  const [contatore, setContatore] = useState(0)

  return (
<div style={{display: "flex", flexDirection: "column", gap: "40px"}}>

<Laboratorio_2 />

<div style={{display: "flex", gap: "20px", flexWrap: "wrap" }}>

  <ActionButton label="Saluta" message="Ciao a tutti!" />

  <ActionButton label="Salva" message="Dati salvati con successo" />

  <ActionButton label="Elimina" message="Elemento eliminato" />

  <button onClick={() => setContatore(contatore + 1)}>

    Cliccami ({contatore})
  </button>
  </div>

  </div>
  )

}

export default App
