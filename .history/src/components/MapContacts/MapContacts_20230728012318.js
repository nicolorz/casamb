import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const MapContacts = () => {
    return (
        <div>
        <MapContainer center={[45.50773, 9.22455]} zoom={17} scrollWheelZoom={true} style={{height:300}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/*                 minZoom={13}
                maxZoom={13} */
            />
            <Marker position={[45.50773, 9.22455]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}