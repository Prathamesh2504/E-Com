
import './Category.css';
import { FiFilter } from 'react-icons/fi';

function Category({handleCategoryChange}) {
  return <div className='category'>
    <h2 className="sidebar-title">Category <FiFilter/></h2>
    <div>
      <label className="sidebar-label-container">
        <input onChange={handleCategoryChange} type='radio' value="" name='categories'/>    
        <span className="checkmark all"></span>All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleCategoryChange} type='radio' value="smartphones" name='categories'/>    
        <span className="checkmark"></span>Smartphones
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleCategoryChange} type='radio' value="tablets" name='categories'/>    
        <span className="checkmark"></span>Tablets
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleCategoryChange} type='radio' value="laptops" name='categories'/>    
        <span className="checkmark"></span>Laptops
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleCategoryChange} type='radio' value="headphones" name='categories'/>    
        <span className="checkmark"></span>Headphones
      </label>
    </div>
  </div>
}

export default Category;