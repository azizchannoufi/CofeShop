import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ isAdmin = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAdmin={isAdmin} />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      
      {!isAdmin && <Footer />}
    </div>
  );
};

export default Layout;