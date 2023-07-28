import './Sortingbtn.css'
import { colorCodes } from "../CardWrapper/CardItem";
import { useState } from 'react';

export const SortingBtn = ({button}) => {
    const [active, setActive] = useState(true);
    function handleClick() {
        setActive(false);
    }
    return (
        <button 
        className="sorting-btn"
        style={{
            backgroundColor: active ? colorCodes[button.tag] : '#fff', 
            // color: button.color ? '#fff' : button.textColor
            color: active ? (button.textColor ?? 'fff') : colorCodes[button.tag],
            border: 0
        }}
        onClick={handleClick}
        >
            {button.label.toUpperCase()}
        </button>
    )
};
