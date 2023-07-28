import './CardItem.css'

const colorCodes = {
    rubinetteria: 'yellow',
    sanitari: 'blue'
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