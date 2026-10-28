let contatore = 0

function App() {
    return (

<button onClick={()=>{contatore++; console.log(contatore) }}>
    Cliccami ({contatore})

</button>

    )
}