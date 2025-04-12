import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/users', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login exitoso');
      navigate('/users');
    } catch (err) {
      alert(err.response?.data?.error || 'Error en login');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
      <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
    </div>
  );
}

export default Login;
