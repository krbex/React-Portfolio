import React from "react";
import css from "../../assets/css.png";
import github from "../../assets/GitHub-Mark-32px.png";
import mongodb from "../../assets/icons8-mongodb-48.png";
import node from "../../assets/icons8-nodejs-48.png";
import react from "../../assets/icons8-react-48.png";
import javascript from "../../assets/javascript.png";
import npm from "../../assets/npm.png";
import graphql from "../../assets/graphql.png";
import express from "../../assets/express.png";
import vs from "../../assets/vs.png";
import heroku from "../../assets/heroku.png";
import html from "../../assets/html.png";
import tailwind from "../../assets/tailwind.png";

export default function Resume() {
  return (
    <div className="my-3.5">
      <h2>My Resume</h2>
      <div className="justify-center grid flex col my-3.5	">
        <h3>
          These are the technologies I use to build responsive client side web
          applications.
        </h3>
        <div className="flex space-x-2 flex-row">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img
              className="transition hover:scale-125 duration-125 ease-in"
              src={html}
              alt="html icon"
            ></img>
          </a>
          <a href="https://tailwindcss.com/">
            <img
              className="transition hover:scale-125 duration-125 ease-in"
              src={tailwind}
              alt="tailwind icon"
            ></img>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img
              className="transition hover:scale-125 duration-125 ease-in"
              src={css}
              alt="css icon"
            ></img>
          </a>
          <a href="https://reactjs.org/">
            <img
              className="transition hover:scale-125 duration-125 ease-in"
              src={react}
              alt="react icon"
            ></img>
          </a>
          <a href="https://www.javascript.com/">
            <img
              className="transition hover:scale-125 duration-125 ease-in"
              src={javascript}
              alt="javascript icon"
            ></img>
          </a>
        </div>
      </div>
      <div className="justify-center space-x-2 grid flex col my-3.5	">
        <h3>
          These are the technologies I use to build fast and powerful backend
          applications.
        </h3>
        <div className="flex flex-row">
          <a href="https://www.mongodb.com">
            <img
              className="transition hover:scale-125 duration-125"
              src={mongodb}
              alt="mongodb icon"
            ></img>
          </a>
          <a href="https://nodejs.org/en/">
            <img
              className="transition hover:scale-125 duration-125"
              src={node}
              alt="nodejs icon"
            ></img>
          </a>
          <a href="https://graphql.org/">
            <img
              className="transition hover:scale-125 duration-125"
              src={graphql}
              alt="GraphQL icon"
            ></img>
          </a>
          <a href="http://expressjs.com/">
            <img
              className="transition hover:scale-125 duration-125"
              src={express}
              alt="Express JS icon"
            ></img>
          </a>
        </div>
      </div>
      <div className="justify-center grid flex col my-3.5	">
        <h3>
          These are some of the other technologies I use that assist with my
          development.
        </h3>
        <div class="flex space-x-2 flex-row">
          <a href="https://github.com/">
            <img
              className="transition hover:scale-125 duration-125"
              src={github}
              alt="github icon"
            ></img>
          </a>
          <a href="https://www.npmjs.com/">
            <img
              className="transition hover:scale-125 duration-125"
              src={npm}
              alt="npm icon"
            ></img>
          </a>
          <a href="https://code.visualstudio.com/">
            <img
              className="transition hover:scale-125 duration-125"
              src={vs}
              alt="Virtual Studio Code icon"
            ></img>
          </a>
          <a href="https://heroku.com">
            <img
              className="transition hover:scale-125 duration-125"
              src={heroku}
              alt="heroku icon"
            ></img>
          </a>
        </div>
      </div>
      <div className="justify-center grid flex col my-3.5	">
        <h3>My education</h3>
        <div>
          <p>Texas A&M University</p>
          <p>Bachelors of Science, 2014 - 2018</p>
        </div>
      </div>
      <div className="justify-center grid flex col my-5.5	">
        <h3>My work experience</h3>
        <div>
          <p>Multiview</p>
          <p>2019 - Present</p>
        </div>
      </div>
    </div>
  );
}
