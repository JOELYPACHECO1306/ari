import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000')
      .then(res => setUsers(res.data.users))
      .catch(err => alert('Error al obtener usuarios'));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
