// frontend/src/components/LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function LogoutButton({ to = "/logged-out" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate(to, { replace: true });
  };
  return (
    <button className="icon-link" onClick={handleClick} title="Logout">
      Logout
    </button>
  );
}
