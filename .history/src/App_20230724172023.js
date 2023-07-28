import logo from './logo.svg';
import './App.css';
import  {Header} from './components/HeaderWrapper/HeaderWrapper';
import { CardWrapper } from './components/CardWrapper/CardWrapper';
import { useState } from 'react';

function App() {
  const [clickedButtons, setClickedButtons] = useState();
  
  function handleClick(value) {
    console.log('app value', value);
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
