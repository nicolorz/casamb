import { FormContacts } from "./components/FormContacts/formContacts";
import { HeaderTop } from "./components/HeaderWrapper/HeaderTop";
import { MapContacts } from "./components/MapContacts/MapContacts";


function Contatti() {
    return (
        <div className="main-wrapper" style={{padding: '0 24px'}}>
            <div id="header" className="header" style={{position: 'relative', padding: 0}}>
                <HeaderTop />
            </div>
            <div className="page-wrapper">
                <FormContacts />
                <div id="map">
                    <MapContacts />
                </div>
                <div className="footer">Qui le info di CasaMB</div>
            </div>
        </div>
        
    )
}

export default Contatti;