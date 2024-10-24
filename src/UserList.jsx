import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userData = [
          { id: 1, name: 'T-shirt', price: 15000 },
          { id: 2, name: 'Wrist-watch', price: 20000 },
          { id: 3, name: 'Sneaker', price: 50000 }
        ];
        setListOfUser(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center'>
    <div className="p-5 w-52 flex-col">
      <h1 className="text-4xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {listOfUser.map((user) => (
          <li key={user.id} className="p-4 bg-gray-900 rounded-lg">
            <h2 className="text-lg text-white font-semibold">{user.name}</h2>
            <p className='text-white'>Price: N{user.price}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default UserList;
