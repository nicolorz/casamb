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
            <div className="contact-page-wrapper">
                <MapContacts />
                <FormContacts />
            </div>
            <div className="footer">
                <div className="contatti">Mirko Francesco Bova<br/>Tel. 3470681629<br/>info@casamb.it</div>
                <div className="indirizzo" style={{textAlign: 'right'}}>Via Aristotele 39<br/>20128, Milano</div>
            </div>
        </div>

    )
}

export default Contatti;
