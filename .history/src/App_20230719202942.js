import logo from './logo.svg';
import './App.css';
import  {Header} from './components/HeaderWrapper/HeaderWrapper';
import { CardWrapper } from './components/CardWrapper/CardWrapper';

function App() {

  return (
    <div className="main-wrapper">
      <Header />
      <CardWrapper />
    </div>
  );
}

export default App;
