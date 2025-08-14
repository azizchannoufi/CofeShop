// Simule un délai réseau
const simulateNetworkDelay = () => new Promise(resolve => 
  setTimeout(resolve, Math.random() * 500 + 200)
);

// Données fictives
const fakeProducts = [
  {
    id: '1',
    name: 'Expresso',
    description: 'Un café court et intense',
    price: 2.5,
    categoryId: '1',
    image: '/assets/images/espresso.jpg',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Expresso avec mousse de lait onctueuse',
    price: 3.5,
    categoryId: '1',
    image: '/assets/images/cappuccino.jpg',
    isAvailable: true
  },
  {
    id: '3',
    name: 'Croissant',
    description: 'Pur beurre, doré à perfection',
    price: 2.0,
    categoryId: '2',
    image: '/assets/images/croissant.jpg',
    isAvailable: true
  }
];

const fakeCategories = [
  { id: '1', name: 'Cafés' },
  { id: '2', name: 'Viennoiseries' },
  { id: '3', name: 'Thés' }
];

const fakeOrders = [
  {
    id: 'order1',
    tableNumber: '5',
    items: [
      { id: 'item1', name: 'Expresso', price: 2.5, quantity: 2 },
      { id: 'item2', name: 'Croissant', price: 2.0, quantity: 1 }
    ],
    status: 'preparing',
    createdAt: new Date().toISOString(),
    total: 7.0
  }
];

// Fonctions d'API simulées
export const fetchProducts = async () => {
  await simulateNetworkDelay();
  return [...fakeProducts];
};

export const fetchCategories = async () => {
  await simulateNetworkDelay();
  return [...fakeCategories];
};

export const fetchOrders = async () => {
  await simulateNetworkDelay();
  return [...fakeOrders];
};

export const loginAdmin = async (email, password) => {
  await simulateNetworkDelay();
  
  if (email === 'admin@cafe.com' && password === 'cafe123') {
    return { success: true, token: 'fake-jwt-token' };
  }
  throw new Error('Identifiants incorrects');
};

export const updateOrderStatus = async (orderId, newStatus) => {
  await simulateNetworkDelay();
  const order = fakeOrders.find(o => o.id === orderId);
  if (order) order.status = newStatus;
  return { success: true };
};

export const updateOrderTable = async (orderId, newTable) => {
  await simulateNetworkDelay();
  const order = fakeOrders.find(o => o.id === orderId);
  if (order) order.tableNumber = newTable;
  return { success: true };
};

export const submitOrder = async (orderData) => {
  await simulateNetworkDelay();
  const newOrder = {
    id: `order${fakeOrders.length + 1}`,
    ...orderData,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  fakeOrders.push(newOrder);
  return { success: true, orderId: newOrder.id };
};

// Version prête pour les vrais appels API (commentée)
/*
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error('Erreur réseau');
  return response.json();
};

export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) throw new Error('Échec de la connexion');
  return response.json();
};
*/