import { useState,useEffect } from "react";
import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import products from './db/data.jsx'
import Card from "./Components/Card.jsx";
import './index.css';

function App() {
  const [Category, setCategory] = useState(null)
  const [color, setColor] = useState(null)
  const [company, setCompany] = useState(null)
  const [query,setQuery] = useState("")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000});
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Input Filter
  const handleInputChange = event =>{setQuery(event.target.value)}

  //For Filter by Category
  const handleCategoryChange = event =>{setCategory(event.target.value)}

  //For Filter by Color
  const handleColorsChange = event =>{setColor(event.target.value)}

  //Buttons Filter
  const handleClick = event =>{setCompany(event.target.value)}

  //For Filter by Price
  const handlePriceChange = (event) => {
    const range = event.target.value;
    if (range === "0-10000") {
        setPriceRange({ min: 0, max: 10000 });
    } else if (range === "10000-20000") {
        setPriceRange({ min: 10000, max: 20000 });
    } else if (range === "20000-30000") {
        setPriceRange({ min: 20000, max: 30000 });
    } else if (range === "30000+") {
        setPriceRange({ min: 30000, max: 1000000 });
    } else {
        setPriceRange({ min: 0, max: 1000000 }); // Reset to show all products
    }
};

useEffect(() => {
  let filtered = products;
    if(query){
      filtered = filtered.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    if(Category){
      filtered = filtered.filter((product) => product.category === Category);
    }
    if(color){
      filtered = filtered.filter((product) => product.color === color)
    }
    if(company){
      filtered = filtered.filter((product) => product.company === company)
    }
    if(priceRange){
      filtered = filtered.filter((product) => {
          const productPrice = parseInt(product.newPrice); // Convert to number
          return productPrice >= priceRange.min && productPrice <= priceRange.max;
      });
    }
    
    setFilteredProducts(filtered);
  }, [query, Category, priceRange, color, company]);
  
  
  const result = filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
    <Card 
      key={title}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
  ));

  return (
  <>
    <Sidebar handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} handleColorsChange={handleColorsChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
  </>
  );
}

export default App;
