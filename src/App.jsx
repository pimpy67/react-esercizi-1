import './App.css'
<<<<<<< HEAD
import ActionButton from './Laboratorio_3/ActionButton.jsx'

function App() {
  const [contatore, setContatore] = useState(0)

  return (
<div style={{display: "flex", gap: "20px", flexWrap: "wrap" }}>

  <ActionButton label="Saluta" message="Ciao a tutti!" />

  <ActionButton label="Salva" message="Dati salvati con successo" />

  <ActionButton label="Elimina" message="Elemento eliminato" />

  <button onClick={() => setContatore(contatore + 1)}>
    
    Cliccami ({contatore})
  </button>
  </div>
  )
=======
import Laboratorio_2 from './Laboratorio_2/Laboratorio_2'


function App () {

return (

<Laboratorio_2>

  
</Laboratorio_2>
>>>>>>> bd08997e42db6d649d5a06f23b2c3392ff9b181d

)
}

export default App
