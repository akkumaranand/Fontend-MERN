export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://mern-eccom-orpin.vercel.app/orders/own/') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://mern-eccom-orpin.vercel.app/users/own') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://mern-eccom-orpin.vercel.app/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}


