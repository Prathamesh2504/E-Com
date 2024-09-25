import { FiHeart } from 'react-icons/fi';
import './Nav.css';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

function Nav({handleInputChange, query}) {
  return <nav>
    <div className="nav-container">
      <input type='text' className='search-input' placeholder='Search a Product' value={query} onChange={handleInputChange}/>
    </div>
    <div className="profile-container">
      <a href='#'><FiHeart className='nav-icons'/></a>
      <a href='#'><AiOutlineShoppingCart className='nav-icons'/></a>
      <a href='#'><AiOutlineUserAdd className='nav-icons'/></a>
    </div>
  </nav>
}

export default Nav;
