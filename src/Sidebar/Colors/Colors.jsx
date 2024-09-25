import './Colors.css';
import { FiFilter } from 'react-icons/fi';

function Colors({handleColorsChange}) {
  return <div className='color'>
  <h2 className="sidebar-title color-title">Color <FiFilter/></h2>
  <label className="sidebar-label-container">
    <input onChange={handleColorsChange} type='radio' value="" name='colors'/>    
    <span className="checkmark all"></span>All
  </label>
  <label className="sidebar-label-container">
    <input onChange={handleColorsChange} type='radio' value="black" name='colors'/>    
    <span className="checkmark" style={{background:"black"}}></span>Black
  </label>
  <label className="sidebar-label-container">
    <input onChange={handleColorsChange} type='radio' value="grey" name='colors'/>    
    <span className="checkmark" style={{background:"grey"}}></span>Grey
  </label>
  <label className="sidebar-label-container">
    <input onChange={handleColorsChange} type='radio' value="blue" name='colors'/>    
    <span className="checkmark" style={{background:"blue"}}></span>Blue
  </label>
  <label className="sidebar-label-container">
    <input onChange={handleColorsChange} type='radio' value="green" name='colors'/>    
    <span className="checkmark" style={{background:"green"}}></span>Green
  </label>
  <label className="sidebar-label-container">
    <input onChange={handleColorsChange} type='radio' value="white" name='colors'/>    
    <span className="checkmark" style={{background:"white", border:"2px solid black"}}></span>White   
  </label>   
</div>
}

export default Colors;