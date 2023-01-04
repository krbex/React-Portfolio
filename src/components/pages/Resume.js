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

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <img
        className="transition hover:scale-125 duration-125 ease-in"
        src={css}
        alt="css icon"
      ></img>
      <img
        className="transition hover:scale-125 duration-125"
        src={github}
        alt="github icon"
      ></img>
      <img
        className="transition hover:scale-125 duration-125"
        src={mongodb}
        alt="mongodb icon"
      ></img>
      <img className="hover:scale-125" src={node} alt="nodejs icon"></img>
      <img className="hover:scale-125" src={react} alt="react icon"></img>
      <img
        className="hover:scale-125"
        src={javascript}
        alt="javascript icon"
      ></img>
      <img className="hover:scale-125" src={npm} alt="npm icon"></img>
      <img className="hover:scale-125" src={graphql} alt="GraphQL icon"></img>
      <img
        className="hover:scale-125"
        src={express}
        alt="Express JS icon"
      ></img>
      <img
        className="hover:scale-125"
        src={vs}
        alt="Virtual Studio Code icon"
      ></img>
      <img className="hover:scale-125" src={heroku} alt="heroku icon"></img>
      <p>Nunc pharetra</p>
      <p>Nunc pharetra</p>
      <p>Nunc pharetra</p>
    </div>
  );
}
