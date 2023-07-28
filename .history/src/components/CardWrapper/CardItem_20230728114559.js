import PropTypes from 'prop-types';

import { colorCodes } from '../../statics/statics'
import './CardItem.css'

export const CardItem = ({card}) => {    
    return (
        <div className="card-item">
            <div 
                className="cat"
                style={{backgroundColor: colorCodes[card.tag]}}
            />
            <img src={card.source} alt={card.info} />
        </div>
    )
}

CardItem.propTypes = {
    card: PropTypes.object.isRequired
}