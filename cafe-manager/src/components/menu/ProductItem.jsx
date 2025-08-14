import '../../css/ProductItem.css';
import Button from '../common/Button';

const ProductItem = ({ product, onAddToCart, index }) => {
  return (
    <div 
      className="product-item"
      style={{ '--index': index }}
    >
      {product.isNew && <span className="product-badge">Nouveau</span>}
      
      <div className="product-image-container">
        {product.image && (
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
        )}
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">{product.price.toFixed(2)} €</span>
          {product.isAvailable ? (
            <Button 
              onClick={() => onAddToCart(product)}
              size="sm"
              variant="primary"
            >
              Ajouter
            </Button>
          ) : (
            <span className="product-unavailable">Indisponible</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;