import { useState } from 'react';
import './App.css';
import { CardWrapper } from './components/CardWrapper/CardWrapper';
import { Header } from './components/HeaderWrapper/HeaderWrapper';

function App() {
  const [clickedButtons, setClickedButtons] = useState();
  
  function handleClick(value) {
    setClickedButtons(value);
  }

  return (
    <div className="main-wrapper">
      <Header onClick={handleClick} />
      <CardWrapper clickedButton={clickedButtons}/>
    </div>
  );
}

export default App;
