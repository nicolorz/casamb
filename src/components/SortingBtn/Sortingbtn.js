import './Sortingbtn.css'
import { colorCodes } from '../../statics/statics';
import { useState } from 'react';

export const SortingBtn = ({button, onClick}) => {
    const [active, setActive] = useState(true);
    function handleClick() {
        const a = !active;
        setActive(a);
        onClick(button.tag, a);
    }
    
    return (
        <button 
        className="sorting-btn"
        style={{
            backgroundColor: active ? colorCodes[button.tag] : 'rgba(255, 255, 255, 0.4)',
            color: active ? (button.textColor ?? '#fff') : (button.textColor ?? colorCodes[button.tag]),
            border: `1px solid ${colorCodes[button.tag]}` 
        }}
        onClick={handleClick}
        >
            {button.label.toUpperCase()}
        </button>
    )
};
