import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const MapContacts = () => {
    return (
        <div style={{backgroundColor: 'red', width: 300, height: 300}}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}