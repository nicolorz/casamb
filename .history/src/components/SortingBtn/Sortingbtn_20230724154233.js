import './Sortingbtn.css'
import { colorCodes } from "../CardWrapper/CardItem";
import { useState } from 'react';

export const SortingBtn = ({button, onClick}) => {
    const [active, setActive] = useState(true);
    function handleClick() {
        onClick(button.tag, active);
        setActive(!active);
    }

    return (
        <button 
        className="sorting-btn"
        style={{
            backgroundColor: active ? colorCodes[button.tag] : '#fff',
            color: active ? (button.textColor ?? '#fff') : (button.textColor ?? colorCodes[button.tag]),
            border: `1px solid ${colorCodes[button.tag]}` 
        }}
        onClick={handleClick}
        >
            {button.label.toUpperCase()}
        </button>
    )
};
