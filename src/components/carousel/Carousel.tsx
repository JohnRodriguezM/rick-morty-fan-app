import React from "react";
import "./Carousel.css";
export const Carousel = () => {
  return (
    <section>
      <div className="container" style={{ margin: "40px auto" }}>
        <input type="radio" name="slider" id="item-1" defaultChecked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div className="cards">
          <label className="card" htmlFor="item-1" id="song-1">
            <img
              className="img"
              src={require("../../assets/history1.jpg")}
              alt="song"
            />
          </label>
          <label className="card" htmlFor="item-2" id="song-2">
            <img
              className="img"
              src={require("../../assets/history2.jpg")}
              alt="song"
            />
          </label>
          <label className="card" htmlFor="item-3" id="song-3">
            <img
              className="img"
              src={require("../../assets/history3.jpg")}
              alt="song"
            />
          </label>
         
        </div>
      </div>
    </section>
  );
};
