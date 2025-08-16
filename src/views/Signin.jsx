// frontend/src/views/Signin.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username:'', email:'', password:'', confirm:'' , first_name:'', last_name:''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.username || !form.email || !form.password) {
      setError('Username, email and password are required.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await signup({ username: form.username, email: form.email, password: form.password,
                     first_name: form.first_name, last_name: form.last_name });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'linear-gradient(to bottom, #545353, #cce2d6)'}}>
      <form onSubmit={submit} style={{width:'min(520px, 92vw)', background:'rgba(255,255,255,0.95)',
        borderRadius:16, boxShadow:'0 12px 36px rgba(0,0,0,.12)', padding:28}}>
        <h1 style={{marginTop:0, marginBottom:8, color:'#0b6b3a'}}>Create account</h1>
        {error && <div style={{color:'#b91c1c', marginBottom:8}}>{error}</div>}

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <div>
            <label style={{display:'block', fontWeight:700}}>First name</label>
            <input value={form.first_name} onChange={e=>setForm({...form, first_name:e.target.value})}
                   style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />
          </div>
          <div>
            <label style={{display:'block', fontWeight:700}}>Last name</label>
            <input value={form.last_name} onChange={e=>setForm({...form, last_name:e.target.value})}
                   style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />
          </div>
        </div>

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Username</label>
        <input value={form.username} onChange={e=>setForm({...form, username:e.target.value})}
               placeholder="e.g. jennywilson"
               style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Email</label>
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}
               placeholder="name@example.com"
               style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Password</label>
        <input type="password" value={form.password}
               onChange={e=>setForm({...form, password:e.target.value})}
               style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />

        <label style={{display:'block', fontWeight:700, marginTop:12}}>Confirm password</label>
        <input type="password" value={form.confirm}
               onChange={e=>setForm({...form, confirm:e.target.value})}
               style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid #cbd5e1'}} />

        <button disabled={loading} className="btn" type="submit" style={{width:'100%', marginTop:16}}>
          {loading ? 'Creating…' : 'Create Account'}
        </button>

        <div style={{display:'flex', justifyContent:'space-between', marginTop:12}}>
          <Link to="/" style={{textDecoration:'none', color:'#0b6b3a', fontWeight:700}}>Back to Home</Link>
          <Link to="/login" style={{textDecoration:'none', color:'#0b6b3a', fontWeight:700}}>Already have an account? Sign in</Link>
        </div>
      </form>
    </div>
  );
}
