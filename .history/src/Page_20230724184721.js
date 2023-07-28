import { useState } from 'react';
import './App.css';
import { CardWrapper } from './components/CardWrapper/CardWrapper';
import { Header } from './components/HeaderWrapper/HeaderWrapper';
import { sortingButtons } from './statics/statics';


function App() {
  const [clickedButtons, setClickedButtons] = useState(sortingButtons.map((el) => el.tag));
  
  function handleClick(tag, buttonState) {
    const cb = buttonState ? [...clickedButtons, tag] : clickedButtons.filter((el) => el !== tag);
    setClickedButtons(cb);
  }

  return (
    <div className="main-wrapper">
      <Header onClick={handleClick} />
      <CardWrapper clickedButtons={clickedButtons}/>
    </div>
  );
}

export default App;
