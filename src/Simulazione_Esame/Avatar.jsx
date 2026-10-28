import '../App.css'

const stileCerchio = { width: "80px", height: "80px", borderRadius: "50%" }

function Avatar({ src, nome }) {

return (
    src
        ? <img src={src} alt={nome} style={{ ...stileCerchio, objectFit: "cover" }} />
        : <div style={{ ...stileCerchio, backgroundColor: "lightgray", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>{nome[0]}</div>
    );

}

export default Avatar;
