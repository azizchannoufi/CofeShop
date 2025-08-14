import '../../css/CartSummary.css';
import Button from '../common/Button';

const CartSummary = ({ items, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% de taxe
  const total = subtotal + tax;
  const [tableNumber, setTableNumber] = useState('');

  return (
    <div className="summary-card">
      <h3 className="summary-title">Récapitulatif</h3>
      
      <div className="summary-details">
        <div className="summary-row">
          <span className="summary-label">Sous-total:</span>
          <span className="summary-value">{subtotal.toFixed(2)} €</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Taxe (10%):</span>
          <span className="summary-value">{tax.toFixed(2)} €</span>
        </div>
        <div className="summary-row summary-total">
          <span>Total:</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      </div>

      <div className="summary-input-group">
        <label className="summary-label-input">Numéro de table</label>
        <input
          type="number"
          min="1"
          className="summary-input"
          placeholder="Ex: 5"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>

      <button
        onClick={onCheckout}
        className="summary-button"
        disabled={items.length === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
        Commander
      </button>
    </div>
  );
};

export default CartSummary;