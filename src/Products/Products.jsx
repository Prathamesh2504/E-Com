import { AiFillStar } from 'react-icons/ai';
import './Products.css'
import { BsFillBagHeartFill } from 'react-icons/bs';
import Card from '../Components/Card.jsx';

 function Products({result}) {
  return (
    <section className='card-container'>
      {result}
    </section>
  )
}

export default Products;