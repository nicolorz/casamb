import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const MapContacts = () => {
    return (
        <div style={{backgroundColor: 'red'}}>
        <MapContainer center={[[45.507, 9.224]]} zoom={13} scrollWheelZoom={false} style={{height:300}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[45.507, 9.224]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}