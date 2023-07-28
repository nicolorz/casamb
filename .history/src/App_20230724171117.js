import logo from './logo.svg';
import './App.css';
import  {Header} from './components/HeaderWrapper/HeaderWrapper';
import { CardWrapper } from './components/CardWrapper/CardWrapper';

function App() {
  function handleClick(value) {
    console.log(value);
    return value;
  }

  return (
    <div className="main-wrapper">
      <Header onClick={handleClick} />
      <CardWrapper />
    </div>
  );
}

export default App;
