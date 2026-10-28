import '../App.css'
import Intestazione from './Intestazione'
import CardMembro from './CardMembro'
import Footer from './Footer'

function SimulazioneEsame() {

return (
    <div>

        <Intestazione titolo="Il nostro team" sottotitolo="Le persone dietro il progetto" />

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <CardMembro nome="Roberto" ruolo="Developer" foto="/img/uomo-d-affari-professionale.jpg" anniEsperienza={7} isLead />
            <CardMembro nome="Leila" ruolo="Designer" foto="/img/donna-avatar-riccio-bruna.jpg" anniEsperienza={3} isLead={false} />
            <CardMembro nome="Virgilio" ruolo="Manager" anniEsperienza={10} isLead={false} />
            <CardMembro nome="Sofia" ruolo="Data Scientist" anniEsperienza={2} isLead={false} />
        </div>

        <Footer>
            <p>© 2026 Team ITS</p>
            <a href="mailto:team@esempio.it">Contattaci</a>
        </Footer>

    </div>
    );

}

export default SimulazioneEsame;
