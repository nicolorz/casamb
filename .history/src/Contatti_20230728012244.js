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
            <div className="footer">Qui le info di CasaMB</div>
        </div>
        
    )
}

export default Contatti;