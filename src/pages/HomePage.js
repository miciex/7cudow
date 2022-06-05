import React from "react";
import "../styles/HomePage.css";
import Chess from "../img/Chess.jpg";
export default function HomePage() {
  return (
    <div className="home">
      <h1>Witaj na stronie głównej!</h1>
      <p>
        Właśnie trafiłeś/aś na stronę o najlepszych szachistach wszechczasów!
      </p>
      <div className="center">
        <img src={Chess} alt="" />
      </div>
    </div>
  );
}
