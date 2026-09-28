import '../App.css'

function Typography({children, colore, testo}) {


  return (
<div>
    <div className='card-destra' style={{backgroundColor : colore, fontWeight : "bold", padding : "16px 32px", border: "2px solid black"}}>
    {testo}
    </div> 
    
    
</div>
  
  );
}

export default Typography
