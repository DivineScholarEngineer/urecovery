// frontend/src/views/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // TODO: replace with your API call
      const fakeToken = 'demo-token';
      const fakeUser = { username: form.email.split('@')[0] || 'user' };
      await new Promise(r => setTimeout(r, 500));
      login(fakeToken, fakeUser);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError('Login failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'linear-gradient(to bottom, #545353, #cce2d6)'
    }}>
      <form onSubmit={submit} style={{
        width:'min(440px, 92vw)', background:'rgba(255,255,255,0.9)', borderRadius:16,
        boxShadow:'0 12px 36px rgba(0,0,0,.12)', padding:28
      }}>
        <h1 style={{marginTop:0, marginBottom:8, color:'#0b6b3a'}}>Welcome back</h1>
        <p style={{marginTop:0, opacity:.8}}>Sign in to continue to your dashboard.</p>
        {error && <div style={{color:'#b91c1c', marginBottom:8}}>{error}</div>}

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={e=>setForm({...form, email:e.target.value})}
          style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}}
        />

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Password</label>
        <input
          type="password"
          required
          value={form.password}
          onChange={e=>setForm({...form, password:e.target.value})}
          style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}}
        />

        <button disabled={loading} className="btn" type="submit" style={{width:'100%', marginTop:16}}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>

        <div style={{marginTop:12, textAlign:'center'}}>
          <a href="/" style={{textDecoration:'none', color:'#0b6b3a', fontWeight:700}}>Back to Home</a>
        </div>
      </form>
    </div>
  );
}
