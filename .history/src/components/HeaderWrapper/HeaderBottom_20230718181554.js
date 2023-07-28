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
        backgroundColor: '#986562',
        color: true
    },
    {
        tag: 'arredobagno',
        label: 'arredobagno',
        backgroundColor: '#986562',
        color: true
    },
    {
        tag: 'boxdoccia',
        label: 'box doccia',
        backgroundColor: '#986562',
        color: true
    }
];

export const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <div className="sorting-area">
                {sortingButtons.map((el) => {
                    return (
                        <SortingBtn key="`${el.tag}`" />
                    )
                })}
            </div>
        </div>
    )
}