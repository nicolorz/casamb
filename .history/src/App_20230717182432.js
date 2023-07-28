import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => { console.log('nico puzza')}

  return (
    <div className="main-wrapper">

      <div className="sidebar">
        <header className="header">Header Logo</header>
        <div className="area-buttons">
          <button className="btn" onClick={handleClick}>rubinetteria</button>
          <button className="btn">pavimenti</button>
        </div>
        <footer className="footer">Footer</footer>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="interior"/>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="interior"/>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="interior"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
