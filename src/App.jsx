import './App.css'
import LikeButton from './Laboratorio_3/LikeButton.jsx'

function App() {

  return (
<div style={{display: "flex", gap: "20px"}}>
  <LikeButton likeIniziali={0} />
  <LikeButton likeIniziali={12} />
  <LikeButton likeIniziali={340} />
</div>
  )

}

export default App
