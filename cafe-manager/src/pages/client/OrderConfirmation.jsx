import { useLocation } from 'react-router-dom';
import StatusBadge from '../../components/admin/StatusBadge';
import { useEffect, useState } from 'react';

const statusMessages = {
  pending: 'Votre commande a été reçue et sera préparée bientôt',
  preparing: 'Vos cafés et gourmandises sont en préparation',
  ready: 'Votre commande est prête à être servie',
  served: 'Bon appétit ! Profitez de votre commande',
  paid: 'Merci pour votre visite !'
};

const OrderConfirmation = () => {
  const { state } = useLocation();
  const [status, setStatus] = useState('pending');
  const [orderNumber, setOrderNumber] = useState(Math.floor(Math.random() * 1000));

  // Simulation de changement de statut
  useEffect(() => {
    const timer1 = setTimeout(() => setStatus('preparing'), 3000);
    const timer2 = setTimeout(() => setStatus('ready'), 8000);
    const timer3 = setTimeout(() => setStatus('served'), 13000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        
        <h1 className="text-2xl font-serif font-bold mb-4 text-amber-900">Commande Confirmée</h1>
        <p className="mb-2">Numéro de commande: <span className="font-bold">#{orderNumber}</span></p>
        {state?.tableNumber && (
          <p className="mb-6">Table: <span className="font-bold">{state.tableNumber}</span></p>
        )}
        
        <div className="mb-6">
          <StatusBadge status={status} />
        </div>
        
        <p className="text-gray-700 mb-6">{statusMessages[status]}</p>
        
        <div className="mt-8 pt-6 border-t border-amber-100">
          <p className="text-sm text-gray-500">Présentez ce numéro au serveur si nécessaire</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;