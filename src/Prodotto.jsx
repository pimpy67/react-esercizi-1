import './App.css'


function Prodotto({nome, prezzo, icona}) {
    return (

        <div className='prodotto-card'>
            <div className='prodotto-icona-box'>
            <img src={icona} alt="icona prodotto" className="prodotto-icona" />
            </div>

            <h4>{nome}</h4>

            <p style={{color: 'green'}}>€{prezzo}</p>

            <button>Aggiungi al carrello</button>
        </div>

    )
    
}

export default Prodotto