import { createContext, useContext, useEffect, useState } from "react";
import { sortingButtons } from "../statics/statics";

const categories = sortingButtons.map((el) => el.tag);

export const CategoriesContext = createContext({ categories });

export const CategoriesProvider = ({ children, value }) => {
  const [categories, setCategories] = useState(value.categories);
  useEffect(() => setCategories(value.categories), [value.categories]);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
