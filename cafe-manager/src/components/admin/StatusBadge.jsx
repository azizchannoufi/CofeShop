const StatusBadge = ({ status }) => {
  const statusConfig = {
    pending: {
      text: 'En attente',
      className: 'bg-yellow-100 text-yellow-800'
    },
    preparing: {
      text: 'Préparation',
      className: 'bg-blue-100 text-blue-800'
    },
    ready: {
      text: 'Prêt à servir',
      className: 'bg-green-100 text-green-800'
    },
    paid: {
      text: 'Payé',
      className: 'bg-gray-100 text-gray-800'
    },
    cancelled: {
      text: 'Annulé',
      className: 'bg-red-100 text-red-800'
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status]?.className || 'bg-gray-100'}`}>
      {statusConfig[status]?.text || status}
    </span>
  );
};

export default StatusBadge;