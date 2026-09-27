import './App.css'

function Badge({testo, colore}) {

  return (

<button style={{backgroundColor:colore, padding:'10px 25px', borderRadius: '25px', color: 'white', border: 'none', fontSize: '16px', fontWeight:'bold', cursor: 'pointer'}}>{testo}</button>

  
  )
}

export default Badge