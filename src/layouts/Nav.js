import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";

const list1 = {
  main: [
    { path: "/", text: "Szachiści wszechczasów", exact: "true", className: "" },
    { path: "/", text: "Home", exact: "true", className: "" },
    { path: "/", text: "About", exact: "true", className: "" },
    {
      path: "/cud/cud1",
      text: "Szachiści",
      exact: "true",
      className: "desktop-link",
    },
    {
      path: "/cud/cud1",
      text: "Linki zewnętrzne",
      exact: "true",
      className: "desktop-link",
    },
    { path: "/Form", text: "Opinie", exact: "true", className: "" },
    { path: "/galery", text: "Galeria", exact: "true", className: "" },
  ],
  miracles: [
    { path: "/cud/cud1", text: "szachista 1", exact: "true" },
    { path: "/cud/cud2", text: "szachista 2", exact: "true" },
    { path: "/cud/cud3", text: "szachista 3", exact: "true" },
    { path: "/cud/cud4", text: "szachista 4", exact: "true" },
    { path: "/cud/cud5", text: "szachista 5", exact: "true" },
    { path: "/cud/cud6", text: "szachista 6", exact: "true" },
    { path: "/cud/cud7", text: "szachista 7", exact: "true" },
  ],
  links: [
    {
      path: "https://www.chess.com/players/magnus-carlsen",
      text: "link 1",
      exact: "true",
    },
    {
      path: "https://www.chess.com/players/jose-raul-capablanca",
      text: "link 2",
      exact: "true",
    },
    {
      path: "https://www.chess.com/players/garry-kasparov",
      text: "link 3",
      exact: "true",
    },
    {
      path: "https://www.chess.com/players/viswanathan-anand",
      text: "link 4",
      exact: "true",
    },
    {
      path: "https://www.chess.com/players/bobby-fischer",
      text: "link 5",
      exact: "true",
    },
    {
      path: "https://www.chess.com/players/emanuel-lasker",
      text: "link 6",
      exact: "true",
    },
    {
      path: "https://www.chess.com/players/paul-morphy",
      text: "link 7",
      exact: "true",
    },
  ],
};

export default function Nav() {
  let main = list1.main.map((item) => (
    <NavLink to={item.path} exact={item.exact}>
      <span className={item.className}>{item.text}</span>
    </NavLink>
  ));

  let miracles = list1.miracles.map((item) => (
    <li key={item.text}>
      <NavLink to={item.path} exact={item.exact}>
        <span>{item.text}</span>
      </NavLink>
    </li>
  ));

  let links = list1.links.map((item) => (
    <li key={item.text}>
      <a href={item.path} target="_blank" rel="noreferrer">
        {item.text}
      </a>
    </li>
  ));

  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className="content">
          <div className="logo">{main[0]}</div>
          <ul className="links">
            <li>{main[1]}</li>
            <li>{main[6]}</li>
            <li>
              {main[3]}
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features">Szachiści</label>
              <ul>{miracles}</ul>
            </li>
            <li>
              {main[4]}
              <input type="checkbox" id="show-services" />
              <label htmlFor="show-services">linki zewnętrzne</label>
              <ul>{links}</ul>
            </li>
            <li>{main[5]}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
