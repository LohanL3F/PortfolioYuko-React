import React from "react";
import "./Page.css";
import { useNavigate } from "react-router-dom";

export default function Profil() {
  const navigate = useNavigate();

  return (
    <div className="page fade">
      <h1 id="devMsg">🚧 Page en cours de développement... 🚧</h1>
      <h2 id="devMsg2">Womp womp.. :(</h2>
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
    </div>
  );
}
