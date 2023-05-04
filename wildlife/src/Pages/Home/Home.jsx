import React from "react";
import "../Home/Home.css";
import "../../component/Images/Image";
import Card from "../../component/Card/Card";
import { Link } from "react-router-dom";

import '../../component/Card/Card.css'


const Home = () => {
  return (
    <>
      <div className="cards__container">
        <div className="image-container">
          <h1 className="center-text h1-style">WELCOME TO JUNGLE SAFARI</h1>
          <img src="/forest3.jpg" alt="" className="image-div"/>
          <Link to='/animal'><button className="center-btn">EXPLORE</button></Link>
        </div>

        <div className="cards__wrapper">
        <h1 className="h1-style undergo">UNDERGOING PROJECTS</h1>
          <ul className="cards__items">
            <Card
              src="/tiger2.jpg"
              text="Project Tiger"
              label="Adventure"
              path="/wildlife"
            />
            <Card
              src="/crocodile.jpg"
              text="Project Crocodile"
              label="Luxury"
              path="/wildlife"
            />
            <Card
              src="/deer.jpg"
              text="Project Deer"
              label="Mystery"
              path="/wildlife"
            />
          </ul>
          <ul className="cards__items">
            <Card
              src="/snow-leopard.jpg"
              text="Project Snow Leopard"
              label="Mystery"
              path="/wildlife"
            />
            <Card
              src="/elephant.jpg"
              text="Project Elephant"
              label="Desert"
              path="/wildlife"
            />
            <Card
              src="/turle.jpg"
              text="Project Turle"
              label="Desert"
              path="/wildlife"
            />

          </ul>
        </div>
      </div>

    </>
  );
};
export default Home;
