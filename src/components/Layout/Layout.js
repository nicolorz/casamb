import { HeaderBottom } from "../HeaderWrapper/HeaderBottom"
import { HeaderTop } from "../HeaderWrapper/HeaderTop"

export const Layout = ({children, hasBottom, onClick, style}) =>{
    return <div className="main-wrapper" style={style}>
             <div id="header" className="header">
        <HeaderTop />
        {hasBottom && <HeaderBottom onClick={onClick} />}
    </div>
    {children}
        </div>

}