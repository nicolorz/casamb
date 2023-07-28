import './Sidebar.css'
export const Header = () => <header className="header">Header Logo</header>

const Sidebar = () => {

    return <div className="sidebar">
      <Header />
      <div className="area-buttons">
        <button className="btn">rubinetteria</button>
        <button className="btn">pavimenti</button>
      </div>
      <footer className="footer">Footer</footer>
  </div>
}


export default Sidebar

