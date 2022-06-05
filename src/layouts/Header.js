import React from "react";
import "../styles/Header.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  return (
    <div className="header">
      {location.pathname !== "/" && <h1>Strona o cudownych szachistach</h1>}
    </div>
  );
}
