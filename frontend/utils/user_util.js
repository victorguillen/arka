export const fetchUser = (userId) => (fetch(`http://localhost:3000/users/${userId}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'}
    }
  ).then(res => res.json())
);

export const createUser = (user) => (fetch(`http://localhost:3000/signup`,
    {
      method: 'POST',
      headers: {'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
  ).then(res => res.json())
);

export const createSession = (user) => (fetch(`http://localhost:3000/login`,
    {
      method: 'POST',
      headers: {'Access-Control-Allow-Origin':'*', 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
  ).then(res => res.json())
);
