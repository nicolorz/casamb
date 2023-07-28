import './CardItem.css'

const colorCodes = {
    rubinetteria: 'yellow',
}

export const CardItem = ({card}) => {
    return (
        <div className="card-item">
            <div 
                className="cat" 
                style={{backgroundColor: colorCodes.rubinetteria}}
            />
            <img src={card.source} alt={card.info}></img>
        </div>
    )
}