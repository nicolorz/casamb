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
        color: false,
        textColor: '#000'
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
        color: false,
        textColor: '#000'
    },
    {
        tag: 'radiatori',
        label: 'radiatori',
        backgroundColor: '#8C9898',
        color: true
    },
    {
        tag: 'piastrelle',
        label: 'piastrelle',
        backgroundColor: '#B89086',
        color: true
    },
    {
        tag: 'parquet',
        label: 'parquet',
        backgroundColor: '#C6A47E',
        color: true
    },
    {
        tag: 'cucine',
        label: 'cucine',
        backgroundColor: '#A8BD9B',
        color: true
    },
    {
        tag: 'soggiorno',
        label: 'soggiorno',
        backgroundColor: '#52625F',
        color: true
    },
    {
        tag: 'tavoli',
        label: 'tavoli',
        backgroundColor: '#959796',
        color: true
    },
    {
        tag: 'sedie',
        label: 'sedie',
        backgroundColor: '#AC968B',
        color: true
    },
    {
        tag: 'divani',
        label: 'divani',
        backgroundColor: '#897C74',
        color: true
    },
    {
        tag: 'letti',
        label: 'letti',
        backgroundColor: '#A2725E',
        color: true
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