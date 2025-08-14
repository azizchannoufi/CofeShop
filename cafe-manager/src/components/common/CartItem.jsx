const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <span className="text-amber-700">{item.price} €</span>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={onDecrease}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          onClick={onIncrease}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
        >
          +
        </button>
        <button 
          onClick={onRemove}
          className="text-red-500 ml-2"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItem;