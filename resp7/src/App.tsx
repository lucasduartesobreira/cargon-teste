import { useState } from 'react';
import './App.css';
import data from './data.json';
import ProductDetails from './ProductDetails';

type Data = typeof data extends Array<infer U>? U: never;

function App() {
  const [product, setProduct] = useState<Data | null>(null)
  const [arrayData, setData] = useState<Data[]>(data)
  const [sellerFilter, setSellerFilter] = useState<string | null>(null)
  const [sportFilter, setSportFilter] = useState<string | null>(null)

  const handleProductClick = (product: Data | null) => { 
      setProduct(product)
  }

  const handleOnCloseClick = () => {
      setProduct(null)
  }

  const filteredProducts = arrayData.filter((product) => {
      let filterForSeller = (sellerFilter == null || product.seller === sellerFilter) 
      let filterForSport = (sportFilter == null || product.sport === sportFilter) 
      
      return filterForSeller && filterForSport
    })

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-list" style={{listStyleType:'none'}}>
          <li className="nav-item" onClick={() => {setSellerFilter(null); setSportFilter(null)}}>Todos</li>
          <li className="nav-item" onClick={() => {setSellerFilter('Nike'); setSportFilter(null)}}>Nike</li>
          <li className="nav-item" onClick={() => {setSellerFilter(null); setSportFilter('Basquete')}}>Basquete</li>
        </ul>
      </nav>
      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li key={index} className="product" onClick={() => handleProductClick(product)}>
            <p>{product.name}</p>
            <img src={product.image_url} alt={product.name} />
            <p>R$ {product.price}</p>
          </li>
        ))}
      </ul>
      {product && <ProductDetails product={product} onClose={handleOnCloseClick}/>}
    </div>
  );
}

export default App;
