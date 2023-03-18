
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="home-banner.png"
          alt=""
        />
        <div className="home__row">
        <Product
            id="12321341"
            title="Gauri Ganesh Pooja Kit"
            price={2000}
            rating={5}
            image="1.png"
          />
          <Product
            id="49538094"
            title="Diwali Pooja Kit"
            price={2000.0}
            rating={4}
            image="2.png"
          />
          <Product
            id="4903850"
            title="Durga Pooja Kit"
            price={2599.99}
            rating={3}
            image="3.png"
          />
          <Product
            id="23445930"
            title="Mini Bhajan Player"
            price={3800.00}
            rating={5}
            image="4.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="Pandit At Your Doorstep : Pandit For Marriage"
            price={25000.00}
            rating={4}
            image="6.png"
          />
          <Product
            id="90829332"
            title="Pandit At Your Doorstep : Pandit For Pooja Kathan"
            price={20000.00}
            rating={4}
            image="5.png"
          />
        </div>
      </div>
    </div>
    );
};

export default Home;