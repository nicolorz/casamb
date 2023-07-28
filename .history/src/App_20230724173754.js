import { useState } from 'react';
import './App.css';
import { CardWrapper } from './components/CardWrapper/CardWrapper';
import { Header } from './components/HeaderWrapper/HeaderWrapper';

function App() {
  const [clickedButtons, setClickedButtons] = useState();
  
  return (
    <div className="main-wrapper">
      <Header onClick={setClickedButtons} />
      <CardWrapper clickedButtons={clickedButtons}/>
    </div>
  );
}

export default App;
