import { sortingButtons } from "../../statics/statics";
import "./CardItem.css";
import { useMemo } from "react";

export const CardItem = ({ card }) => {
  const backgroundColor = useMemo(
    () => sortingButtons.find((el) => el.tag === card.tag).backgroundColor,
    [card],
  );
  return (
    <div className="card-item">
      <div className="cat" style={{ backgroundColor }} />
      <img src={card.source} alt={card.info} />
    </div>
  );
};
