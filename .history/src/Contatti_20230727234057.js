import { FormContacts } from "./components/FormContacts/formContacts";
import { HeaderTop } from "./components/HeaderWrapper/HeaderTop";
import { MapContacts } from "./components/MapContacts/MapContacts";


function Contatti() {
    return (
        <div className="main-wrapper" style={{padding: '0 24px'}}>
            <div id="header" className="header" style={{position: 'relative'}}>
                <HeaderTop />
            </div>
            <FormContacts />
            <div id="map">
                <MapContacts />
            </div>
            <div className="info-area">Qui le info di CasaMB</div>
        </div>
        
    )
}

export default Contatti;