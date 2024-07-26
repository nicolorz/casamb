import { sortingButtons } from "../../statics/statics";
import { SortingBtn } from "../SortingBtn/Sortingbtn";

export const HeaderBottom = () => (
  <div className="header-bottom">
    <div className="sorting-area">
      {sortingButtons.map((el) => {
        return <SortingBtn key={el.tag} button={el} />;
      })}
    </div>
  </div>
);
