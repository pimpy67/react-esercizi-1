import '../App.css'

function ActionButton({label, message}) {

return (
    <button onClick={() => console.log(message)}>{label}</button>
    );

}

export default ActionButton;
