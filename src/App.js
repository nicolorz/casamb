import "./App.css";
import Page from "./Page";
import { CategoriesProvider } from "./context/CategoriesContext";
import { sortingButtons } from "./statics/statics";

function App() {
  return (
    <CategoriesProvider
      value={{ categories: sortingButtons.map((el) => el.tag) }}
    >
      <Page />
    </CategoriesProvider>
  );
}

export default App;
