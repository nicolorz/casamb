import { SortingBtn } from "../SortingBtn/Sortingbtn"
import { useState } from 'react';

export const sortingButtons = [
    {
        tag: 'rubinetteria',
        label: 'rubinetteria',
        backgroundColor: '#986562',
    },
    {
        tag: 'sanitari',
        label: 'sanitari',
        backgroundColor: '#E2D4CB',
        textColor: '#86756A'
    },
    {
        tag: 'arredobagno',
        label: 'arredobagno',
        backgroundColor: '#758177',
    },
    {
        tag: 'boxdoccia',
        label: 'box doccia',
        backgroundColor: '#5A7D8B',
    },
    {
        tag: 'piattidoccia',
        label: 'piatti doccia',
        backgroundColor: '#C7C3C0',
        textColor: '#636262'
    },
    {
        tag: 'radiatori',
        label: 'radiatori',
        backgroundColor: '#8C9898',
    },
    {
        tag: 'piastrelle',
        label: 'piastrelle',
        backgroundColor: '#B89086',
    },
    {
        tag: 'parquet',
        label: 'parquet',
        backgroundColor: '#C6A47E',
    },
    {
        tag: 'cucine',
        label: 'cucine',
        backgroundColor: '#A8BD9B',
        textColor: '#536647'
    },
    {
        tag: 'soggiorni',
        label: 'soggiorni',
        backgroundColor: '#52625F',
    },
    {
        tag: 'tavoli',
        label: 'tavoli',
        backgroundColor: '#959796',
    },
    {
        tag: 'sedie',
        label: 'sedie',
        backgroundColor: '#AC968B',
    },
    {
        tag: 'divani',
        label: 'divani',
        backgroundColor: '#897C74',
    },
    {
        tag: 'letti',
        label: 'letti',
        backgroundColor: '#A2725E',
    },
];

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