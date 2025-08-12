// frontend/src/views/Dashboard.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Dashboard.css';            // <-- fixed path
import StarRating from '../components/StarRating';
import { useAuth } from '../auth/AuthContext';

const seedCounselors = [
  { id: 1, name: 'Wade Warren', title: 'Therapist', rating: 4.8 },
  { id: 2, name: 'Jenny Wilson', title: 'Human Rights Activist', rating: 4.6 },
  { id: 3, name: 'Albert Flores', title: 'Marriage Coach', rating: 4.7 },
  { id: 4, name: 'Hannah Linus', title: 'Motivational Speaker', rating: 4.5 },
];

const seedResources = [
  { id: 1, name: 'Deeper Christian Life Ministry', url: 'https://dclm.org' },
  { id: 2, name: 'Billy Graham Evangelistic Association', url: 'https://billygraham.org' },
  { id: 3, name: 'U-Recover', url: '/' },
];

const TABS = {
  DASHBOARD: 'Dashboard',
  HOME: 'Home',
  PROFILE: 'Profile',
  NOTIFICATIONS: 'Notifications',
  RESOURCES: 'Resources',
  CHAT: 'Chat Box',
  COUNSELLING: 'Counselling',
  ACCOUNT: 'Account Setting',
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [tab, setTab] = useState(TABS.DASHBOARD);
  const [profile, setProfile] = useState(() => {
    try { return JSON.parse(localStorage.getItem('profile') || '{}'); } catch { return {}; }
  });
  const [messages, setMessages] = useState(() => {
    try { return JSON.parse(localStorage.getItem('demo_chat') || '[]'); } catch { return []; }
  });
  const [msgDraft, setMsgDraft] = useState('');
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Profile saved (demo).');
  };

  const sendMsg = () => {
    if (!msgDraft.trim()) return;
    const m = { id: Date.now(), text: msgDraft.trim(), sender: 'me', at: new Date().toISOString() };
    const next = [...messages, m];
    setMessages(next);
    localStorage.setItem('demo_chat', JSON.stringify(next));
    setMsgDraft('');
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const MenuLink = ({label, active, onClick, to}) => (
    to ? <Link className={active ? 'active' : ''} to={to} onClick={onClick}>{label}</Link>
       : <button className={active ? 'active' : ''} onClick={onClick}>{label}</button>
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <img src="../images/ucover.png" alt="Logo" style={{width:28,height:28}} />
          <span>U-Recover</span>
        </div>

        <nav className="nav">
          <div className="section">Main</div>
          <MenuLink label="Dashboard" active={tab===TABS.DASHBOARD} onClick={() => setTab(TABS.DASHBOARD)} />
          <MenuLink label="Home" active={tab===TABS.HOME} onClick={() => navigate('/')} />
          <MenuLink label="Profile" active={tab===TABS.PROFILE} onClick={() => setTab(TABS.PROFILE)} />
          <MenuLink label="Notifications" active={tab===TABS.NOTIFICATIONS} onClick={() => setTab(TABS.NOTIFICATIONS)} />
          <MenuLink label="Resources" active={tab===TABS.RESOURCES} onClick={() => setTab(TABS.RESOURCES)} />
          <MenuLink label="Chat Box" active={tab===TABS.CHAT} onClick={() => setTab(TABS.CHAT)} />
          <MenuLink label="Counselling" active={tab===TABS.COUNSELLING} onClick={() => setTab(TABS.COUNSELLING)} />

          <div className="section">Account</div>
          <MenuLink label="Account Setting" active={tab===TABS.ACCOUNT} onClick={() => setTab(TABS.ACCOUNT)} />
          {/* Logout item directly under Account Setting */}
          <MenuLink label="Logout" onClick={handleLogout} />
        </nav>

        <div className="footer-user">
          <div style={{fontSize:12, opacity:.8}}>User</div>
          <div style={{fontWeight:600}}>@{(user?.username||'user').toLowerCase()}</div>
        </div>
      </aside>

      {/* Content */}
      <main className="content">
        {tab === TABS.DASHBOARD && (
          <section className="grid cols-3">
            <div className="card stat">
              <div>
                <div style={{fontSize:12, color:'#64748b'}}>Counsellors</div>
                <div style={{fontSize:24, fontWeight:800}}>4</div>
              </div>
              <span className="badge">new</span>
            </div>
            <div className="card stat">
              <div>
                <div style={{fontSize:12, color:'#64748b'}}>Unread Messages</div>
                <div style={{fontSize:24, fontWeight:800}}>{Math.max(0, messages.length - 1)}</div>
              </div>
              <span className="badge">5</span>
            </div>
            <div className="card stat">
              <div>
                <div style={{fontSize:12, color:'#64748b'}}>Resources</div>
                <div style={{fontSize:24, fontWeight:800}}>{seedResources.length}</div>
              </div>
              <span className="badge">updated</span>
            </div>

            <div className="card" style={{gridColumn:'1 / -1'}}>
              <h2 style={{marginTop:0}}>Welcome back{user?.username ? `, ${user.username}` : ''}!</h2>
              <p style={{marginBottom:0}}>
                Your dashboard gives you quick access to counsellors, resources, messages, and account settings.
              </p>
            </div>
          </section>
        )}

        {tab === TABS.PROFILE && (
          <section className="card profile-form">
            <h2 style={{marginTop:0}}>Profile</h2>
            <label>First Name
              <input value={profile.firstName || ''} onChange={e=>setProfile({...profile, firstName:e.target.value})} />
            </label>
            <label>Last Name
              <input value={profile.lastName || ''} onChange={e=>setProfile({...profile, lastName:e.target.value})} />
            </label>
            <label>Username
              <input value={profile.username || (user?.username||'')} onChange={e=>setProfile({...profile, username:e.target.value})} />
            </label>
            <label>Email
              <input type="email" value={profile.email || ''} onChange={e=>setProfile({...profile, email:e.target.value})} />
            </label>
            <label>Password
              <input type="password" placeholder="••••••••" onChange={e=>setProfile({...profile, password:e.target.value})} />
            </label>
            <div style={{display:'flex', gap:12, marginTop:12}}>
              <button className="btn" onClick={saveProfile}>Save Changes</button>
              <button className="btn ghost" onClick={()=>setProfile({})}>Reset</button>
            </div>
          </section>
        )}

        {tab === TABS.NOTIFICATIONS && (
          <section className="card">
            <h2 style={{marginTop:0}}>Notifications</h2>
            <p>Demo notifications panel. Wire to your backend later.</p>
            <ul>
              <li>New message from Wade.</li>
              <li>Your profile was updated.</li>
              <li>3 new resources were added.</li>
            </ul>
          </section>
        )}

        {tab === TABS.RESOURCES && (
          <section className="card">
            <h2 style={{marginTop:0}}>Resources</h2>
            <div className="grid cols-2" style={{marginTop:12}}>
              {seedResources.map(r => (
                <div key={r.id} className="resource">
                  <div style={{fontWeight:700}}>{r.name}</div>
                  <div style={{marginLeft:'auto'}}>
                    <a className="btn ghost" href={r.url} target="_blank" rel="noreferrer">Open</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === TABS.CHAT && (
          <section className="card">
            <h2 style={{marginTop:0}}>Chat Box (Demo)</h2>
            <div className="chat-box">
              <div className="chat-messages">
                {messages.map(m => (
                  <div key={m.id} style={{marginBottom:8, display:'flex', justifyContent: m.sender==='me'?'flex-end':'flex-start'}}>
                    <div style={{background:m.sender==='me'?'#dcfce7':'#e2e8f0', padding:'8px 12px', borderRadius:12, maxWidth:'70%'}}>
                      {m.text}
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>
              <div className="chat-input">
                <input
                  value={msgDraft}
                  onChange={e=>setMsgDraft(e.target.value)}
                  onKeyDown={e=>{ if(e.key==='Enter') sendMsg(); }}
                  placeholder="Type a message and press Enter" />
                <button className="btn" onClick={sendMsg}>Send</button>
              </div>
            </div>
          </section>
        )}

        {tab === TABS.COUNSELLING && (
          <section className="card">
            <h2 style={{marginTop:0}}>Pick a Counsellor</h2>
            <div className="grid cols-2" style={{marginTop:12}}>
              {seedCounselors.map(c => (
                <div key={c.id} className="counselor">
                  <img src="../images/cou1.png" alt="" style={{width:56,height:56,borderRadius:12,objectFit:'cover'}} />
                  <div>
                    <div style={{fontWeight:700}}>{c.name}</div>
                    <div style={{fontSize:12, color:'#64748b'}}>{c.title}</div>
                    <StarRating value={c.rating} />
                  </div>
                  <button className="btn" onClick={()=>{ setTab(TABS.CHAT); }}>Start Chat</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === TABS.ACCOUNT && (
          <section className="card">
            <h2 style={{marginTop:0}}>Account Settings</h2>
            <p>Change your password, email, and manage sessions here (demo).</p>
            <div style={{display:'flex', gap:12}}>
              <button className="btn">Change Password</button>
              <button className="btn ghost">Manage Sessions</button>
            </div>
            <hr style={{margin:'16px 0'}} />
            <button className="btn" onClick={handleLogout}>Logout</button>
          </section>
        )}
      </main>
    </div>
  );
}
