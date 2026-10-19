import { useState } from 'react'
import '../App.css'

function LightDarkMode(){

    const [isDarkMode, setIsDarkMode] = useState(false)


    return(
        <div>
            {isDarkMode ? <span style={{ backgroundColor: "black", color: "white", padding: "5px 15px", borderRadius: "20px" }}>Dark mode</span> : <span style={{ backgroundColor: "white", color: "black", padding: "5px 15px", borderRadius: "20px" }}>Light mode</span>}
            
            <button onClick={() => setIsDarkMode(!isDarkMode)}>Cambia modalità</button>


        </div>


    )


    
}

export default LightDarkMode;