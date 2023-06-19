import React, { useEffect, useState } from 'react';
import './App.css';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error(error));
  }, []);

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Image</th>
          <th>Blood Group</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Eye Color</th>
          <th>Hair Color</th>
          <th>Birthday</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <img src={user.image} alt="User" className="user-image" />
            </td>
            <td>{user.bloodGroup}</td>
            <td>{user.height}</td>
            <td>{user.weight}</td>
            <td>{user.eyeColor}</td>
            <td>{user.hair.color}</td>
            <td>{user.birthDate}</td>
            <td>
              {`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
