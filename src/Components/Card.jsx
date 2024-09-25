import { BsFillBagHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import './Card.css';


function Card ({img, title, star, reviews, prevPrice, newPrice}){
  const renderStars = (star) => {
    return Array(star).fill().map(() => (
      <AiFillStar className="rating-star" />
    ));
  };  
  
  return(
    <section className="card">
    <img src={img} alt={title} className='card-img'/>
    <div className="card-details">
      <h2 className="card-title">{title}</h2>
      <section className="card-reviews">
        {renderStars(star)}
        <span>{reviews}</span>
      </section>
      <section className="card-price">
        <div>M.R.P: <del>₹{prevPrice}</del> ₹{newPrice}</div>
        <div className="bag"><BsFillBagHeartFill/></div>
      </section>
    </div>
    </section>
  )
  }
  
  export default Card;