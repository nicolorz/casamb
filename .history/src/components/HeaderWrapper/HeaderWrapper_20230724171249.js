import './Header.css'
import { HeaderBottom } from './HeaderBottom'
import { HeaderTop } from './HeaderTop'

export const Header = ({onClick}) => {
    function handleClick(value) {
        onClick(value);
        return value;
    }
 
    return <div id="header" className="header">
        <HeaderTop />
        <HeaderBottom onClick={handleClick} />
    </div>
}
