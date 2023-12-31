import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const MapContacts = () => {
    return (
        <div id="map">
            <MapContainer center={[45.50773, 9.22455]} zoom={17} scrollWheelZoom={true} style={{height:'100%', width:'100%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    minZoom={13}
                    maxZoom={19}
                />
                <Marker position={[45.50773, 9.22455]}>
                    <Popup>
                        <strong>CASAMB</strong><br /><br /> Via Aristotele 39 <br/> 201289, Milano
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
