import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Balances from "./components/Balances/Balances";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare);
function App() {
  const adminUser = {
    user: "helen",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", user: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.user == adminUser.user &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        user: details.user,
        password: details.password,
      });
    } else {
      console.log("details do not match");
      setError("details do not match");
    }
  };

  const Logout = () => {
    setUser({});
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <LogIn Login={Login} error={error} />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/balances">
          <Balances />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
