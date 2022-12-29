import React from "react";

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <div>
        <section
          style={{
            display: "flex",
            fontFamily: "Playfair Display",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <div style={linkStyle}>
            <a href="#">About Me</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Portfolio</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact Me</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Resume</a>
          </div>
        </section>
        <section
          style={{
            display: "flex",
            fontFamily: "Playfair Display",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <h1>Aidan Krbec</h1>
        </section>
      </div>
    </nav>
  );
}
