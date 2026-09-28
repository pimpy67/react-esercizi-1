import '../App.css'

function ButtonTitle() {
    
    return (
<div>
    <h1>Titolo bottone</h1>

    <button>bottone</button>
    <button onClick={() => { console.log("Hai cliccato!") }}>Clicca</button>
    <button>bottone</button>
    <button onClick={() => { console.log("Hai cliccato!") }}>Clicca</button>
    <button>bottone</button>

</div>
    )

}
export default ButtonTitle
