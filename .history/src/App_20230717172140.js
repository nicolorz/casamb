import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-wrapper">

      <div className="sidebar">
        <header className="header"></header>
        <div className="area-buttons">
          <button className="btn">rubinetteria</button>
          <button className="btn">pavimenti</button>
        </div>
        <footer className="footer"></footer>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <img src="https://unsplash.com/photos/_HqHX3LBN18" alt="interior"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
