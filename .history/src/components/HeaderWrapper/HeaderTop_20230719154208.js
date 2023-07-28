import { Logo } from "../Logo/Logo"
import logo from './logo-casaMB.svg';

export const HeaderTop = () => {
    return <div className="header-top">
        <div className="header-top_logo">
            <Logo />
        </div>
        <a href="*" target="_self">CONTATTACI</a>
    </div>
}
