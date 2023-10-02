import React, { useState } from "react";
import "./styles/App.css";
import "./styles/forms.css";
import "./styles/news.css";
import UserLogin from "./components/UserLogin";
import Register from "./components/Register";
import NewsList from "./components/NewsList";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  /*I am yet to add a function to get from the login page to the News articles. Commenting out the forms leads you to the News articles, commenting out NewsList takes you to the login page. */

  return (
    <>
      <div className="App">
        <div>
          {/*currentForm === "login" ? (
          <UserLogin onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )*/}
        </div>
        <div>
          <NewsList />
        </div>
      </div>
    </>
  );
}

export default App;
