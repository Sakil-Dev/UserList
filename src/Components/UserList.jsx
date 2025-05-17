import React, { useState, useEffect } from 'react';

const UserList = () => {
  // State to store users and filter term
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  // Fetch data from the API when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data); // Update the users state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>User List from API</h1>
      
      {/* Text input to filter users by name */}
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Update filter state as user types
      />
      
      {/* Display the filtered list of users */}
      <div>
        {filteredUsers.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
