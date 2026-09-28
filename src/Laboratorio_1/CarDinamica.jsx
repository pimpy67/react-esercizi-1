import "../App.css";
import TitleSubtitleDinamico from "./TitleSubtitleDinamico.jsx";

function CarDinamica({ imageSrc, name, role }) {
    
return (
<div className="card-avatar">
    <img src={imageSrc} alt="" />
    <TitleSubtitleDinamico name={name} role={role} ></TitleSubtitleDinamico>
</div>
)
}

export default CarDinamica