import { FormContacts } from "./components/FormContacts/formContacts";
import { HeaderTop } from "./components/HeaderWrapper/HeaderTop";
import { MapContacts } from "./components/MapContacts/MapContacts";


function Contatti() {
    return (
        <div className="main-wrapper" style={{
            height: '100vh',
            padding: '0 24px',
            display: 'flex',
            flexFlow: 'column nowrap'
            }}>
            <div id="header" className="header" style={{position: 'relative', padding: 0}}>
                <HeaderTop />
            </div>
            <div className="page-wrapper">
                <FormContacts />
                <div id="map">
                    <MapContacts />
                </div>
            </div>
            <div className="footer">
                <div className="contatti">CONTATTI:<br/>Mirko Francesco Bova<br/>Tel. 3470681629<br/>info@casamb.it</div>
            </div>
        </div>
        
    )
}

export default Contatti;