import "./Header.css";
import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";

export const Header = () => (
  <div id="header" className="header">
    <HeaderTop />
    <HeaderBottom />
  </div>
);
