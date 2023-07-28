import './Sortingbtn.css'
import { colorCodes } from "../CardWrapper/CardItem";

export const SortingBtn = ({button}) => {
    return <button 
        className="sorting-btn"
        style={{
            backgroundColor: button.backgroundColor, 
            color: button.color ? '#fff' : button.textColor
        }}
        >
            {button.label.toUpperCase()}
        </button> 
};
