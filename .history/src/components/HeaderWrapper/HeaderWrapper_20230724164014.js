import './Header.css'
import { HeaderBottom } from './HeaderBottom'
import { HeaderTop } from './HeaderTop'

export const Header = () => {
    function handleClick(clickedButtons) {
        return clickedButtons;
    }

    console.log('clickedbuttons',handleClick());
 
    return <div id="header" className="header">
        <HeaderTop />
        <HeaderBottom clickedButtons={handleClick} />
    </div>
}
