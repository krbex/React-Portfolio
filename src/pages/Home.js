import React from "react";
import portrait from "../assets/portrait.jpg";

export default function Home() {
  return (
    <div className="bg-blue-900 h-screen pt-6">
      <div class="bg-blue-500 md:max-w-6xl md:m-auto sm:rounded-lg p2 md:p-8 md:shadow-xxl shadow-xxl">
        <section className="Home">
          <div className="about-me-title flex flex-row">
            <img
              className="portrait basis-1/2"
              src={portrait}
              alt="A portrait of Aidan"
            ></img>
            <div className=" ml-4">
              <h2 class="text-3xl font-bold basis-1/2">
                <span className="text-red-800">Aidan</span>{" "}
                <span className=" text-zinc-100">Krbec</span>
              </h2>
              <div className="flex flex-col">
                <p>
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
                  challenges, working in a team based setting, and always aiming
                  to improve.
                </p>
                <br></br>
                <p>
                  When I am not coding, I enjoy playing chess, video games,
                  reading, or hiking trails with my dog Young Neil.
                </p>
                <br></br>
                <p>
                  I am currently seeking to work with a team that is creating
                  the software that will run tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
