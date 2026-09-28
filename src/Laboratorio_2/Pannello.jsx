import '../App.css'


function Pannello({titolo, children}) {


  return (
    <div style={{border: "1px solid gray", borderRadius: "12px", padding: "16px"}}>
      
    <h2>{titolo}</h2>

    <div>{children}</div>
    
    
  
    </div> 
  
  );
}

export default Pannello
