import './Sortingbtn.css'

export const SortingBtn = ({button}) => {
    return <button className="sorting-btn" data-attr="{puppa}">{button.label.toUpperCase()}</button> 
};
