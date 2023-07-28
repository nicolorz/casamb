import { NavLink } from 'react-router-dom';
import logo from './logo-casaMB.svg';

export const HeaderTop = () => {
    return <div className="header-top">
        <div className="header-top_logo">
            <a href="*" target="_self">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <NavLink
  to="/contatti"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;
        <a href="*" target="_self">CONTATTACI</a>
    </div>
}
