export const fetchOrders = () => (fetch('http://localhost:3000/orders',
    {
      method: 'GET',
      mode: 'cors',
      headers: {'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'}
    }
  ).then(res => res.json())
);

export const fetchOrder = (userId) => (fetch(`http://localhost:3000/orders/${userId}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'}
    }
  ).then(res => res.json())
);

export const createOrder = (orderInfo) => (fetch(`http://localhost:3000/orders`,
    {
      method: 'POST',
      headers: {'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(orderInfo)
    }
  ).then(res => res.json())
);

export const updateOrder = (orderInfo, orderId) => (fetch(`http://localhost:3000/orders/${orderId}`,
    {
      method: 'PUT',
      headers: {'Accept': 'text/html', 'Content-Type': 'application/json'},
      body: JSON.stringify(orderInfo)
    }
  ).then(res => res.json())
);

export const removeOrder = (orderId) => (fetch(`http://localhost:3000/orders/${orderId}`,
    {
      method: 'DELETE',
      headers: {'Accept': 'text/html', 'Content-Type': 'application/json'},
    }
  ).then(res => res.json())
);
