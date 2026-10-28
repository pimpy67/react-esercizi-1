import '../App.css'

function Badge({ testo, colore = "gray" }) {

return (
    <span style={{ backgroundColor: colore, color: "white", padding: "2px 8px", borderRadius: "6px", fontSize: "12px" }}>
        {testo}
    </span>
    );

}

export default Badge;
