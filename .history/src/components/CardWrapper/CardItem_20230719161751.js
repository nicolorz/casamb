import './CardItem.css'

const colorCodes = {
    rubinetteria: '#',
    sanitari: '#',
    arredobagno: '#',
    boxdoccia: '#',
    piattidoccia: '#',
    radiatori: '#',
    piastrelle: '#',
    parquet: '#',
    cucine: '#',
    soggiorni: '#',
    tavoli: '#',
    sedie: '#',
    divani: '#',
    letti: '#'
}

export const CardItem = ({card}) => {
    return (
        <div className="card-item">
            <div 
                className="cat" 
                style={{backgroundColor: colorCodes[card.tag]}}
            />
            <img src={card.source} alt={card.info}></img>
        </div>
    )
}