import '../App.css'
import Typography from './Typography'


function FunnyButton({children, color, width, isLarge}) {

const padding = isLarge ? "20px 40px" : "5px 10px";
    
return (
        <div>
            <button style={{backgroundColor: color, width: width, padding: padding }}>
                {children}
            </button>

        </div>
    );

   
    
}

export default FunnyButton;