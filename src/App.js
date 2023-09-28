import React, { useState } from "react";
import "./styles/App.css";
import NewsList from "./components/NewsList";
import UserLogin from "./components/UserLogin";
import Register from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <div className="App">
        {currentForm === "login" ? (
          <UserLogin onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
}

export default App;
