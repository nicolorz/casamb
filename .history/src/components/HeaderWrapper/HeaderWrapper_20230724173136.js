import './Header.css'
import { HeaderBottom } from './HeaderBottom'
import { HeaderTop } from './HeaderTop'

export const Header = ({onClick}) => (
 <div id="header" className="header">
        <HeaderTop />
        <HeaderBottom onClick={onClick} />
    </div>
)
