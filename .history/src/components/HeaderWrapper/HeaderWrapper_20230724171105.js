import './Header.css'
import { HeaderBottom } from './HeaderBottom'
import { HeaderTop } from './HeaderTop'

export const Header = () => {
    function handleClick(value) {
        return value;
    }
 
    return <div id="header" className="header">
        <HeaderTop />
        <HeaderBottom onClick={handleClick} />
    </div>
}
