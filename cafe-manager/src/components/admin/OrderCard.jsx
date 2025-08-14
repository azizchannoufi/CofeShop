import StatusBadge from './StatusBadge';
import Button from '../common/Button';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const OrderCard = ({ order, onStatusChange, onAssignTable }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 mb-4">
      {/* En-tête de la carte */}
      <div className="bg-amber-800 text-white px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-bold">Commande #{order.id.slice(0, 6)}</span>
          <StatusBadge status={order.status} />
        </div>
        <span className="text-sm">
          {format(new Date(order.createdAt), "HH:mm", { locale: fr })}
        </span>
      </div>

      {/* Corps de la carte */}
      <div className="p-4">
        {/* Section Table */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-50">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Table {order.tableNumber}</span>
          </div>
          <button 
            onClick={() => {
              const newTable = prompt("Nouveau numéro de table:", order.tableNumber);
              if (newTable) onAssignTable(order.id, newTable);
            }}
            className="text-xs text-amber-700 hover:text-amber-900 underline"
          >
            Modifier
          </button>
        </div>

        {/* Liste des articles */}
        <ul className="mb-4">
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between py-1">
              <div className="flex items-center gap-2">
                <span className="text-amber-700 font-medium">{item.quantity}x</span>
                <span>{item.name}</span>
                {item.notes && (
                  <span className="text-xs text-gray-500">({item.notes})</span>
                )}
              </div>
              <span className="text-amber-700">{item.price.toFixed(2)} €</span>
            </li>
          ))}
        </ul>

        {/* Total et actions */}
        <div className="flex justify-between items-center pt-3 border-t border-amber-50">
          <div className="font-bold text-amber-800">
            Total: {order.total.toFixed(2)} €
          </div>
          
          <div className="flex gap-2">
            <select
              value={order.status}
              onChange={(e) => onStatusChange(order.id, e.target.value)}
              className="text-sm border border-amber-300 rounded px-2 py-1 bg-white focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="pending">En attente</option>
              <option value="preparing">En préparation</option>
              <option value="ready">Prêt à servir</option>
              <option value="served">Servi</option>
              <option value="paid">Payé</option>
            </select>
            
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => window.print()}
            >
              Imprimer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;