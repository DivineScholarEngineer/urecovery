// frontend/src/views/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (!form.username || !form.password) {
        throw new Error('Enter username and password.');
      }
      await login({ username: form.username, password: form.password });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'linear-gradient(to bottom, #545353, #cce2d6)'}}>
      <form onSubmit={submit} style={{width:'min(480px, 92vw)', background:'rgba(255,255,255,0.95)',
        borderRadius:16, boxShadow:'0 12px 36px rgba(0,0,0,.12)', padding:28}}>
        <h1 style={{marginTop:0, marginBottom:8, color:'#0b6b3a'}}>Sign in</h1>
        <p style={{marginTop:0, opacity:.8}}>Use your <strong>username</strong> and password.</p>
        {error && <div style={{color:'#b91c1c', marginBottom:8}}>{error}</div>}

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Username</label>
        <input value={form.username} onChange={e=>setForm({...form, username:e.target.value})}
               placeholder="e.g. jennywilson"
               style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Password</label>
        <input type="password" required value={form.password}
               onChange={e=>setForm({...form, password:e.target.value})}
               style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />

        <button disabled={loading} className="btn" type="submit" style={{width:'100%', marginTop:16}}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>

        <div style={{display:'flex', justifyContent:'space-between', marginTop:12}}>
          <Link to="/" style={{textDecoration:'none', color:'#0b6b3a', fontWeight:700}}>Back to Home</Link>
          <Link to="/signup" style={{textDecoration:'none', color:'#0b6b3a', fontWeight:700}}>Create an account</Link>
        </div>
      </form>
    </div>
  );
}
