import { useState } from 'react';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';
import { useNavigate } from 'react-router-dom';
import '../../css/CartPage.css';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const [tableNumber, setTableNumber] = useState('');
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!tableNumber) {
      alert('Veuillez entrer un numéro de table');
      return;
    }
    navigate('/confirmation', { state: { tableNumber } });
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Votre Panier</h1>
      
      <div className="cart-layout">
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p className="cart-empty-text">Votre panier est vide</p>
              <button 
                onClick={() => navigate('/menu')}
                className="cart-empty-button"
              >
                Explorer notre menu
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                  onDecrease={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-summary-container">
            <CartSummary 
              items={cartItems} 
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;