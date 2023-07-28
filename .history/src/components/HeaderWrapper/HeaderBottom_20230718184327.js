import { SortingBtn } from "../SortingBtn/Sortingbtn"

const sortingButtons = [
    {
        tag: 'rubinetteria',
        label: 'rubinetteria',
        backgroundColor: '#986562',
        color: true
    },
    {
        tag: 'sanitari',
        label: 'sanitari',
        backgroundColor: '#E2D4CB',
        color: false
    },
    {
        tag: 'arredobagno',
        label: 'arredobagno',
        backgroundColor: '#758177',
        color: true
    },
    {
        tag: 'boxdoccia',
        label: 'box doccia',
        backgroundColor: '#5A7D8B',
        color: true
    },
    {
        tag: 'piattidoccia',
        label: 'piatti doccia',
        backgroundColor: '#C7C3C0',
        color: false
    },
];

export const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <div className="sorting-area">
                {sortingButtons.map((el) => {
                    return (
                        <SortingBtn key={el.tag} button={el} />
                    )
                })}
            </div>
        </div>
    )
}