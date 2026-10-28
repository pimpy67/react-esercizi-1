import '../App.css'

function Footer({ children }) {

return (
    <footer style={{ textAlign: "center", marginTop: "32px" }}>
        {children}
    </footer>
    );

}

export default Footer;
