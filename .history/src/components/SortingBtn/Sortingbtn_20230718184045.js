import './Sortingbtn.css'

export const SortingBtn = ({button}) => {
    return <button 
        className="sorting-btn"
        style={{
            backgroundColor: button.backgroundColor, 
            color: button.color ? '#fff' : '#000'
        }}
        >
            {button.label.toUpperCase()}
        </button> 
};
