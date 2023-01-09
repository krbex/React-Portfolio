import React from "react";
import github from "../assets/GitHub-Mark-32px.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="w-100 flex justify-center mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <h4>
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          by Aidan Krbec.
        </h4>
        <div className="flex justify-center">
          <a href="https://github.com/krbex">
            <img
              className="transition hover:scale-125 duration-125"
              src={github}
              alt="github icon"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/aidan-krbec-a86700128/">
            <img
              className="transition hover:scale-125 duration-125"
              src={linkedin}
              alt="linkedin icon"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
