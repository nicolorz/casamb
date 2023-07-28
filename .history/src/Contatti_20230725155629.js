import { FormContacts } from "./components/FormContacts/formContacts";
import { HeaderTop } from "./components/HeaderWrapper/HeaderTop";


function Contatti() {
    return (
        <div id="main">
            <HeaderTop />
            <div className="info-area">Qui le info di CasaMB</div>
            <FormContacts />
        </div>
        
    )
}

export default Contatti;