import React from "react";

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
      </div>
    </footer>
  );
};

export default Footer;
