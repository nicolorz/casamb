import './CardItem.css'

export const CardItem = ({card}) => {
    return (
        <div className="card-item">
            <div className="cat"></div>
            <img src={card.source} alt={card.info}></img>
        </div>
    )
}