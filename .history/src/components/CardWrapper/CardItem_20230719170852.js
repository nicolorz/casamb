import './CardItem.css'

export const colorCodes = {
    rubinetteria: '#986562',
    sanitari: '#E2D4CB',
    arredobagno: '#758177',
    boxdoccia: '#5A7D8B',
    piattidoccia: '#C7C3C0',
    radiatori: '#8C9898',
    piastrelle: '#B89086',
    parquet: '#C6A47E',
    cucine: '#A8BD9B',
    soggiorni: '#52625F',
    tavoli: '#959796',
    sedie: '#AC968B',
    divani: '#897C74',
    letti: '#A2725E'
}

export const CardItem = ({card, style}) => {
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