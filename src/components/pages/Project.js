import React from "react";
import aidan from "../../assets/aidan.png";
import books from "../../assets/BookClub.jpg";
import codingfuel from "../../assets/codingfuel.png";
import weather from "../../assets/weather.png";
import github from "../../assets/GitHub-Mark-32px.png";

export default function Project() {
  return (
    <div className="h-screen">
      <h1 className="w-2">My Portfolio</h1>
      <div className="flex grid grid-cols-2 justify-center bg-blue-500 md:max-w-6xl md:m-auto sm:rounded-lg p2 md:p-8 md:shadow-xxl shadow-xxl">
        <div className="w-1/2">
          <div className="grid grid-cols-2">
            <div>
              <a href="https://krbex.github.io/Book-Club/">
                <img
                  src={books}
                  style={{ height: 200, width: 200 }}
                  alt="the book club project"
                ></img>
              </a>
              <p>The Book Club</p>
            </div>
            <div className="grid grid-cols-1">
              <p>
                The Book Club is a collaborative API tool that allows for users
                to search for information on books they might be interested in
                reading.
              </p>
              <p>Technologies used: Google Books API, JavaScript</p>
            </div>
          </div>
          <div>
            <a href="https://github.com/krbex/Book-Club">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2">
            <div>
              <a href="https://krbex.github.io/Weather-Channel/">
                <img
                  src={weather}
                  style={{ height: 200 }}
                  alt="weather app project"
                ></img>
              </a>
              <p>The Weather App</p>
            </div>
            <div className="grid grid-cols-1">
              <p>
                The Weather Channel is an application that allows users to get a
                5 day weather forecast for any city in the United States using
                the OpenWeather API
              </p>
              <p>Technologies used: OpenWeather API, JavaScript</p>
            </div>
          </div>
          <div>
            <a href="https://github.com/krbex/Weather-Channel">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2">
            <div>
              <a href="https://coding-fuel.herokuapp.com/">
                <img
                  src={codingfuel}
                  style={{ height: 200 }}
                  alt="coding fuel project"
                ></img>
              </a>
              <p>Coding Fuel</p>
            </div>
            <div className="grid grid-cols-1">
              <p>
                CodingFuel Interview Prep is a collaborative application aimed
                to make the interview process easier for aspiring developers.
              </p>
              <p>
                Technologies used: Express.JS, MySQL, Node.JS, Sequelize,
                Handlebars
              </p>
            </div>
          </div>
          <div>
            <a href="href=https://github.com/krbex/CodingFuel-Interview-Prep">
              <img src={github} alt="github icon"></img>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2">
            <div>
              <a href="https://krbec.herokuapp.com/">
                <img
                  src={aidan}
                  style={{ height: 200 }}
                  alt="aidan's portfolio"
                ></img>
              </a>
              <p>Aidan Krbec</p>
            </div>
            <div className="grid grid-cols-1">
              <p>
                This is my portfolio website, a showcase of my front end
                capabilities and some of the projects I have been a part of
              </p>
              <p>Technologies used: React, TailwindCSS</p>
            </div>
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
