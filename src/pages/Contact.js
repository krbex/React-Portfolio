import React, { useState } from "react";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  return (
    <div className="form-container h-screen mt-3">
      <div className="flex justify-center">
        <p>
          You can reach me by email at{<br></br>}
          <a href="mailto:Aidan.Krbec5@gmail.com">Aidan.Krbec5@gmail.com</a>
        </p>
      </div>
      <div className="form-container justify-center flex">
        <form>
          <div>
            <h3>Or fill out this contact form</h3>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactInfo.name}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
            />
          </div>
          <div>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={contactInfo.phonenumber}
            />
          </div>
          <div>
            <button>Submit Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
}
