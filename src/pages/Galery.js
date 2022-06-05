import React, { Component } from "react";
import "../styles/Galery.css";
import Morphy from "../img/Paulmorphy.jpg";
import Lasker from "../img/EmmanuelLasker.jpg";
import Magnus from "../img/MagnusCarlsen.jpg";
import Capablanca from "../img/JoseRaulCapablanca.jpg";
import Kasparov from "../img/GarryKasparov.jpg";
import Viswanathan from "../img/ViswanathanAnand.jpg";
import Fischer from "../img/BobbyFischer.jpg";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
let images = [
  Magnus,
  Capablanca,
  Kasparov,
  Viswanathan,
  Fischer,
  Lasker,
  Morphy,
];

const list = {
  cud1: {
    id: "cud1",
    img: "imgCud1",
    title: "Cud1",
  },
  cud2: {
    id: "cud2",
    img: "imgCud2",
    title: "Cud2",
  },
  cud3: {
    id: "cud3",
    img: "imgCud3",
    title: "Cud3",
  },
  cud4: {
    id: "cud4",
    img: "imgCud4",
    title: "Cud4",
  },
  cud5: {
    id: "cud5",
    img: "imgCud5",
    title: "Cud5",
  },
  cud6: {
    id: "cud6",
    img: "imgCud6",
    title: "Cud6",
  },
  cud7: {
    id: "cud7",
    img: "imgCud7",
    title: "Cud7",
  },
};

class Galery extends Component {
  state = {
    img: 0,
    width: 0,
  };
  IndId;
  componentDidMount = () => {
    this.IndId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.img == 6) {
          return { img: 0, width: window.innerWidth + "px" };
        }
        return { img: prevState.img + 1, width: window.innerWidth + "px" };
      });
    }, 5000);
  };

  componentWillUnmount = () => {
    clearInterval(this.IndId);
  };

  handlePreviousPhoto = () => {
    if (this.state.img === 0)
      this.setState({
        img: 6,
      });
    else
      this.setState((prevState) => ({
        img: prevState.img - 1,
      }));
  };
  handleNextPhoto = () => {
    if (this.state.img === 6)
      this.setState({
        img: 0,
      });
    else
      this.setState((prevState) => ({
        img: prevState.img + 1,
      }));
  };

  render() {
    const { width, img } = this.state;
    return (
      <div className="galery">
        <div>
          <button onClick={this.handlePreviousPhoto}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <button onClick={this.handleNextPhoto}>
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
        <img src={images[img]} alt={`img${img}`} />
      </div>
    );
  }
}

export default Galery;
