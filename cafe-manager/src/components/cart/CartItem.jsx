import '../../css/CartItem.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {item.image && (
          <img src={item.image} alt={item.name} />
        )}
      </div>
      
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <span className="cart-item-price">{item.price.toFixed(2)} €</span>
      </div>
      
      <div className="cart-item-actions">
        <button 
          onClick={onDecrease}
          className="quantity-button"
          aria-label="Réduire quantité"
        >
          −
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button 
          onClick={onIncrease}
          className="quantity-button"
          aria-label="Augmenter quantité"
        >
          +
        </button>
        <button 
          onClick={onRemove}
          className="remove-button"
          aria-label="Supprimer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;