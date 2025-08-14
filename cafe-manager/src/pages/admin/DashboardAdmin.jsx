import { useState, useEffect } from 'react';
import OrderCard from '../../components/admin/OrderCard';
import { fetchOrders, updateOrderStatus, updateOrderTable } from '../../services/api';
import Spinner from '../../components/common/Spinner';

const DashboardAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
    
    // Simuler des mises à jour en temps réel
    const interval = setInterval(loadOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(o => o.status === filter);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders(orders.map(o => 
        o.id === orderId ? { ...o, status: newStatus } : o
      ));
    } catch (error) {
      console.error("Erreur de mise à jour", error);
    }
  };

  const handleTableChange = async (orderId, newTable) => {
    try {
      await updateOrderTable(orderId, newTable);
      setOrders(orders.map(o => 
        o.id === orderId ? { ...o, tableNumber: newTable } : o
      ));
    } catch (error) {
      console.error("Erreur de mise à jour", error);
    }
  };

  if (loading) return <Spinner className="mt-12" />;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-serif font-bold text-amber-900">Tableau de Bord</h1>
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-amber-300 rounded px-3 py-1 bg-white"
        >
          <option value="all">Toutes les commandes</option>
          <option value="pending">En attente</option>
          <option value="preparing">En préparation</option>
          <option value="ready">Prêtes à servir</option>
        </select>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-600">Aucune commande {filter !== 'all' && `avec le statut ${filter}`}</p>
        ) : (
          filteredOrders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
              onStatusChange={handleStatusChange}
              onAssignTable={handleTableChange}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardAdmin;