import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Navbar } from "react-bootstrap";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <>
      <Navbar>Spotify Artist Search</Navbar>
      {/* If there is parameter code in the url, display Dashboard if there isn't display Login */}
      {code ? <Dashboard code={code} /> : <Login />}
    </>
  );
}

export default App;
