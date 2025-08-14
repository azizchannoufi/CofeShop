const OrderCard = ({ order, onStatusChange }) => {
  const statusColors = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'preparing': 'bg-blue-100 text-blue-800',
    'ready': 'bg-green-100 text-green-800',
    'paid': 'bg-gray-100 text-gray-800'
  };

  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">Table {order.tableNumber}</h3>
          <ul className="mt-2">
            {order.items.map(item => (
              <li key={item.id} className="text-sm">
                {item.quantity}x {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
            {order.status}
          </span>
          <select 
            value={order.status}
            onChange={(e) => onStatusChange(order.id, e.target.value)}
            className="text-sm border rounded p-1"
          >
            <option value="pending">En attente</option>
            <option value="preparing">En préparation</option>
            <option value="ready">Prêt</option>
            <option value="paid">Payé</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default OrderCard;