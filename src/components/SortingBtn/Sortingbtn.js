import "./Sortingbtn.css";
import { sortingButtons } from "../../statics/statics";
import { useCategoriesContext } from "../../context/CategoriesContext";
import { useCallback, useMemo } from "react";

export const SortingBtn = ({ button }) => {
  const { categories, setCategories } = useCategoriesContext();

  const active = useMemo(() => {
    if (button.tag === "all") {
      return true;
    }
    return categories.includes(button.tag);
  }, [categories, button]);

  const handleClick = useCallback(() => {
    if (button.tag === "all") {
      setCategories(sortingButtons.map((el) => el.tag));
      return;
    }

    setCategories([button.tag]);
  }, [categories, button]);

  return (
    <button
      className="sorting-btn"
      style={{
        backgroundColor: active
          ? button.backgroundColor
          : "rgba(255, 255, 255, 0.4)",
        color: active
          ? (button.textColor ?? "#fff")
          : (button.textColor ?? button.backgroundColor),
        border: `1px solid ${button.backgroundColor}`,
      }}
      onClick={handleClick}
    >
      {button.label.toUpperCase()}
    </button>
  );
};
