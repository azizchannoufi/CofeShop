import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MenuPage from './pages/client/MenuPage';
import CartPage from './pages/client/CartPage';
import OrderConfirmation from './pages/client/OrderConfirmation';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import LoginAdmin from './pages/admin/LoginAdmin';
import auth from './services/auth';
import { getCart } from './services/cartService';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Charger le panier au démarrage
  useEffect(() => {
    setCartItems(getCart());
  }, []);

  // Gestion du panier
  const handleAddToCart = (product) => {
    const updatedCart = addToCart(product);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const updatedCart = updateCartItem(productId, quantity);
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = removeFromCart(productId);
    setCartItems(updatedCart);
  };

  // Protection des routes admin
  const ProtectedAdminRoute = ({ element }) => {
    useEffect(() => {
      if (!auth.isAuthenticated) {
        navigate('/admin/login');
      }
    }, []);

    return auth.isAuthenticated ? element : null;
  };

  return (
    <Routes>
      {/* Routes client */}
      <Route element={<Layout />}>
        <Route 
          path="/" 
          element={<MenuPage addToCart={handleAddToCart} />} 
        />
        <Route 
          path="/menu" 
          element={<MenuPage addToCart={handleAddToCart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems}
              updateQuantity={handleUpdateQuantity}
              removeFromCart={handleRemoveFromCart}
            />
          } 
        />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Route>

      {/* Routes admin */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedAdminRoute element={<DashboardAdmin />} />
        } 
      />
    </Routes>
  );
}

export default App;