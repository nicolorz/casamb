import { sortingButtons } from "../../statics/statics";
import { SortingBtn } from "../SortingBtn/Sortingbtn"
import { useState } from 'react';

export const HeaderBottom = ({onClick}) => {
    const [clickedButtons, setClickedButtons] = useState(sortingButtons.map((el) => el.tag));

   

    return (
        <div className="header-bottom">
            <div className="sorting-area">
                {sortingButtons.map((el) => {
                    return (
                        <SortingBtn key={el.tag} button={el} onClick={onClick} />
                    )
                })}
            </div>
        </div>
    )
}