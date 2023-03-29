import React from "react";
import Card from "../Components/card/Card";
import lock from "../images/lock.svg";
import check from "../images/check.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h3>LES MEILLEURS CASINOS EN LIGNE DU MOMENT</h3>
          <span>
            Tous nos casinos sont: <img src={lock} /> Autorise{" "}
            <img src={check} /> Revu par nos experts
          </span>
        </div>
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
};

export default Home;
