import "./styles/App.css";
import NewsList from "./components/NewsList";
import UserLogin from "./components/UserLogin";
import Register from "./components/Register";

function App() {
  return (
    <>
      <div className="App-body">
        <div className="User-login">
          <UserLogin></UserLogin>
        </div>
        <div>
          <Register></Register>
        </div>
        <div className="News-list">
          <NewsList></NewsList>
        </div>
      </div>
    </>
  );
}

export default App;
