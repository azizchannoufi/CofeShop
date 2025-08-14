import { useState, useEffect } from 'react';
import { fetchCategories, fetchProducts } from '../../services/api';
import CategoryTabs from '../../components/menu/CategoryTabs';
import ProductItem from '../../components/menu/ProductItem';
import Spinner from '../../components/common/Spinner';
import '../../css/MenuPage.css'; // Import corrigé (supposant que le fichier est dans le même dossier)

const MenuPage = ({ addToCart }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [cats, prods] = await Promise.all([
          fetchCategories(),
          fetchProducts()
        ]);
        setCategories(cats);
        setProducts(prods);
        setActiveCategory(cats[0]?.id || null);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProducts = activeCategory 
    ? products.filter(p => p.categoryId === activeCategory)
    : products;

  if (loading) return <Spinner className="spinner" />;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Notre Menu</h1>
      
      <div className="category-tabs-container">
        <CategoryTabs 
          categories={categories} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductItem 
            key={product.id} 
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;