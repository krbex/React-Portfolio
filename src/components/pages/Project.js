import React from "react";
import aidan from "../../assets/aidan.png";
import books from "../../assets/BookClub.jpg";
import codingfuel from "../../assets/codingfuel.png";
import weather from "../../assets/weather.png";
import github from "../../assets/GitHub-Mark-32px.png";

export default function Project() {
  return (
    <div>
      <h1 className="w-2">My Portfolio</h1>
      <div className="flex grid grid-cols-2 justify-center">
        <div className="w-1/2">
          <div>
            <a href="https://krbex.github.io/Book-Club/">
              <img src={books} alt="the book club project"></img>
            </a>
            <p>The Book Club</p>
          </div>
          <div>
            <a href="https://github.com/krbex/Book-Club">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <a href="https://krbex.github.io/Weather-Channel/">
              <img src={weather} alt="weather app project"></img>
            </a>
            <p>The Weather App</p>
          </div>
          <div>
            <a href="https://github.com/krbex/Weather-Channel">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <a href="https://coding-fuel.herokuapp.com/">
              <img src={codingfuel} alt="coding fuel project"></img>
            </a>
            <p>Coding Fuel</p>
          </div>
          <div>
            <a href="href=https://github.com/krbex/CodingFuel-Interview-Prep">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <img src={aidan} alt="aidan's portfolio"></img>
            <p>Aidan Krbec</p>
          </div>
          <div>
            <a href="href=https://github.com/krbex/React-Portfolio">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
