import Button from '../Components/Button';
import './Recommended.css';

function Recommended({handleClick}) {
  return <>
  <div>
    <h2 className='recommended-title'>Recommended</h2>
    <div className="recommended-flex">
      <Button onClickHandler={handleClick} value="" title="All Products"/>
      <Button onClickHandler={handleClick} value="Apple" title="Apple"/>
      <Button onClickHandler={handleClick} value="Samsung" title="Samsung"/>
      <Button onClickHandler={handleClick} value="Redmi" title="Redmi"/>
      <Button onClickHandler={handleClick} value="boAt" title="boAt"/>
    </div>
  </div>
  </>
  
}

export default Recommended;