import "./components/FormContacts/FormContacts.css";
import { FormContacts } from "./components/FormContacts/formContacts";
import { HeaderTop } from "./components/HeaderWrapper/HeaderTop";
import { MapContacts } from "./components/MapContacts/MapContacts";



function Contatti() {
    return (
        <div className="contact-main-wrapper" style={{
            height: '100vh',
            padding: '0 24px',
            display: 'flex',
            flexFlow: 'column nowrap'
            }}>
            <div id="header" className="header" style={{position: 'relative', padding: 0}}>
                <HeaderTop />
            </div>
            <div className="contact-page-wrapper contact-container">
                <MapContacts />
                <FormContacts />
            </div>
            <div className="contact-footer contact-container" style={{marginTop: 'auto', paddingBottom: '4rem'}}>
                <div className="indirizzo" style={{textAlign: 'right'}}>Via Aristotele 39<br/>20128, Milano</div>
                <div className="contatti">
                  Mirko Francesco Bova
                  <br />
                  Tel. <a href="tel:+393756171145">375 617 1145</a>
                  <br />
                  <a href="mailto:info@casamb.it">info@casamb.it</a>
                </div>
            </div>
        </div>
    )
}

export default Contatti;
