import './App.css'

function TitleSubtitleDinamico({ name, role, className }) {

  return (
<div className={className}>
    <h1 style={{fontWeight: "bold"}}>{name}</h1>
    <h3 style={{fontSize: "14px", color: "gray"}}>{role}</h3>
</div>
  
  )
}

export default TitleSubtitleDinamico
