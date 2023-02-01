import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="nav flex flex-row justify-end space-x-4">
      <p className="nav-item bg-blue-800 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </p>
      <p className="nav-item bg-blue-800 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </p>
      <p className="nav-item bg-blue-800 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md">
        <a
          href="#project"
          onClick={() => handlePageChange("Project")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </p>
      <p className="nav-item bg-blue-800 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </p>
    </div>
  );
}
