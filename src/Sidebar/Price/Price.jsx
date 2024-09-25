import './Price.css';
import { FiFilter } from 'react-icons/fi';

function Price({handlePriceChange}) {
  return <div className='ml price'>
    <h2 className="sidebar-title price-title">Price <FiFilter/></h2>
    <label className="sidebar-label-container">
        <input onChange={handlePriceChange} type='radio' value="" name='prices'/>    
        <span className="checkmark all"></span>All
    </label>
    <label className="sidebar-label-container">
        <input onChange={handlePriceChange} type='radio' value="0-10000" name='prices'/>    
        <span className="checkmark"></span>₹0 - ₹10000
    </label>
    <label className="sidebar-label-container">
        <input onChange={handlePriceChange} type='radio' value="10000-20000" name='prices'/>    
        <span className="checkmark"></span>₹10000 - ₹20000
    </label>
    <label className="sidebar-label-container">
        <input onChange={handlePriceChange} type='radio' value="20000-30000" name='prices'/>    
        <span className="checkmark"></span>₹20000 - ₹30000
    </label>
    <label className="sidebar-label-container">
        <input onChange={handlePriceChange} type='radio' value="30000+" name='prices'/>    
        <span className="checkmark"></span>₹30000+
    </label>
  </div>

}

export default Price;