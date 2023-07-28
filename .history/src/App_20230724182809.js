import { useState } from 'react';
import './App.css';
import { CardWrapper } from './components/CardWrapper/CardWrapper';
import { Header } from './components/HeaderWrapper/HeaderWrapper';
import { sortingButtons } from './statics/statics';


function App() {
  const [clickedButtons, setClickedButtons] = useState(sortingButtons.map((el) => el.tag));
  
  return (
    <div className="main-wrapper">
      <Header onClick={setClickedButtons} />
      <CardWrapper clickedButtons={clickedButtons}/>
    </div>
  );
}

export default App;
