import { useState } from "react";

export default function UserLogin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="******"
              id="password"
            />
          </div>
          <div>
            <button onClick={props.onFormSwitch} className="LoginButton">
              Log in
            </button>
          </div>
        </form>
        <button
          onClick={() => props.onFormSwitch("register")}
          className="RegisterButton"
        >
          Don't already have an account? Register here.
        </button>
      </div>
    </>
  );
}
