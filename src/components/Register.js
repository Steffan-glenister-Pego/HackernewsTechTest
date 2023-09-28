import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, usePass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="fullname" htmlFor="name">
            Full name
          </label>
          <input
            className="fullname-input"
            value={name}
            name="name"
            id="name"
            placeholder="full name"
          />
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className="password-input"
              value={pass}
              onChange={(e) => setEmail(e.target.value)}
              type="password"
              placeholder="******"
              id="password"
            />
          </div>
          <button onClick={props.onFormSwitch} className="LoginButton">
            Log in
          </button>
        </form>
        <button
          onClick={() => props.onFormSwitch("login")}
          className="RegisterButton"
        >
          Already have an account? Login here.
        </button>
      </div>
    </>
  );
}

export default Register;
