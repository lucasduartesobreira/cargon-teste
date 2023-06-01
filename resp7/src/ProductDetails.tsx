import data from './data.json'

type Data = typeof data extends Array<infer U>? U: never;

function ProductDetails({ product, onClose }: { product: Data, onClose: () => void }) {
  return (
      <div className="product-details-popup">
        <div className="product-details-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <p>{product.name}</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="product-details-left">
              <img src={product.image_url} alt={product.name} className="product-image" />
              <p>{product.details}</p>
            </div>
            <div className="product-details-right">
              <p>Vendedor: {product.seller}</p>
              <p>Esporte: {product.sport}</p>
              <div style={{display: 'flex'}}>
                <p>Tamanhos: </p>
                <ul style={{listStyleType: 'none'}}>
                {product.available_sizes.map((size, index) => <li key={index} style={{border: '1px solid #ccc', borderRadius: '1px', display: 'inline-block', marginRight: '-2px', padding: '5px'}}>{size}</li>)}
                </ul>
                </div>
              <p>R$ {product.price}</p>
            </div>
          </div>
        </div>
      </div>)
};


export default ProductDetails
