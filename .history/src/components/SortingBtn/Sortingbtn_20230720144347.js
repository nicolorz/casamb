import './Sortingbtn.css'
import { colorCodes } from "../CardWrapper/CardItem";

export const SortingBtn = ({button}) => {
    return (
        <button 
        className="sorting-btn active"
        style={{
            backgroundColor: colorCodes[button.tag], 
            // color: button.color ? '#fff' : button.textColor
            color: button.textColor ?? 'fff'
        }}
        >
            {button.label.toUpperCase()}
        </button>
    )
};
