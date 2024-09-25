import './Sidebar.css';
import Category from './Category/Category.jsx'
import Colors from './Colors/Colors.jsx'
import Price from './Price/Price.jsx'
import logo from '../assets/logo.png'

function Sidebar({handleCategoryChange, handlePriceChange, handleColorsChange}) {
  return <>
  <section className="sidebar">
    <div className="logo-container">
    <img src={logo} alt="Logo" className="logo-image" />
    </div>
  <Category handleCategoryChange={handleCategoryChange}/>
  <Price handlePriceChange={handlePriceChange}/>
  <Colors handleColorsChange={handleColorsChange}/>
  </section>
  </>
}

export default Sidebar;