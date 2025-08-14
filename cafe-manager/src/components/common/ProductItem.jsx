const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-100">
      <div>
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <span className="text-amber-700 font-medium">{product.price} €</span>
      </div>
      <Button onClick={() => onAddToCart(product)} size="sm">
        Ajouter
      </Button>
    </div>
  );
};

export default ProductItem;