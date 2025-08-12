import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  return (
    <div style={{
      minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      background:"linear-gradient(to bottom, #545353, #cce2d6)"
    }}>
      <div style={{
        width:"min(960px, 90vw)", background:"rgba(255,255,255,0.85)", borderRadius:16,
        boxShadow:"0 10px 30px rgba(0,0,0,.12)", padding:32, textAlign:"center",
        backdropFilter:"saturate(140%) blur(6px)"
      }}>
        <h1 style={{margin:0, color:"#007636"}}>U-Recover</h1>
        <p style={{opacity:.85}}>You’re logged out.</p>
        <div style={{display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap"}}>
          <Link to="/">Open App</Link>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
