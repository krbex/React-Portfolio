import React from "react";
import portrait from "../../assets/portrait.jpg";

export default function Home() {
  return (
    <div className="">
      <div class="bg-white md:max-w-6xl md:m-auto sm:rounded-lg p2 md:p-8 md:shadow-xxl shadow-xxl">
        <section className="Home">
          <div className="about-me-title flex flex-row">
            <img
              className="portrait basis-1/2"
              src={portrait}
              alt="A portrait of Aidan"
            ></img>
            <div>
              <h2 class="text-3xl font-bold underline basis-1/2">
                Aidan Krbec
              </h2>
              <div className="flex flex-col">
                <p className="bio">
                  I am a full stack web developer completing the University of
                  Texas Coding Bootcamp at the end of January. I have acquired a
                  high level programming knowledge from the structured practice
                  offered by the program and countless videos to better
                  understand the frameworks and technologies I work with.
                </p>
                <br></br>
                <p>
                  My background has transformed me into a detail-oriented
                  problem solver with a knack for critically thinking through
                  challenges.
                </p>
                <br></br>
                <p>
                  When I am not learning coding, I enjoy playing chess, video
                  games, reading, or hiking trails with my dog Young Neil.
                </p>
                <br></br>
                <p>
                  I am currently seeking to work with a team that is creating
                  the software that will run tomorrow.
                </p>

                <p>
                  The technologies I work with now include React, Node.js,
                  MongoDB, Express.js, GraphQL, GitHub, VS Code, as well as a
                  growing understanding of MVC, Object Oriented Programming, and
                  Object Relational Mapping.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
