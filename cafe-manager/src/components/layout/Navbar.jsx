import { Link } from 'react-router-dom';
import '../../css/navbar.css'; // Import du CSS moderne

const Navbar = ({ isAdmin = false }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-link">
          <img src="/assets/coffee-logo.svg" alt="Logo" className="brand-logo" />
          <span className="brand-text">Café Vintage</span>
        </Link>
        
        <div className="nav-links">
          {isAdmin ? (
            <>
              <Link to="/admin/dashboard">
                <button className="nav-button secondary">Dashboard</button>
              </Link>
              <button className="nav-button secondary">Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/menu" className="nav-link">Menu</Link>
              <Link to="/cart" className="nav-link cart-link">
                Panier
                <span className="cart-badge">3</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;