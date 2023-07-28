import { sortingButtons } from "../../statics/statics";
import { SortingBtn } from "../SortingBtn/Sortingbtn"
import { useState } from 'react';


export const HeaderBottom = ({onClick}) => {
    const [clickedButtons, setClickedButtons] = useState(sortingButtons.map((el) => el.tag));

    function handleClick(tag, buttonState) {
        const cb = buttonState ? [...clickedButtons, tag] : clickedButtons.filter((el) => el !== tag);
        setClickedButtons(cb);
        onClick(cb);
    }

    return (
        <div className="header-bottom">
            <div className="sorting-area">
                {sortingButtons.map((el) => {
                    return (
                        <SortingBtn key={el.tag} button={el} onClick={handleClick} />
                    )
                })}
            </div>
        </div>
    )
}