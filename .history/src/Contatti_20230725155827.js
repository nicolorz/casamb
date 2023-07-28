import { FormContacts } from "./components/FormContacts/formContacts";
import { HeaderTop } from "./components/HeaderWrapper/HeaderTop";
import { MapContacts } from "./components/MapContacts/MapContacts";


function Contatti() {
    return (
        <div id="main">
            <HeaderTop />
            <div className="info-area">Qui le info di CasaMB</div>
            <FormContacts />
            <MapContacts />
        </div>
        
    )
}

export default Contatti;