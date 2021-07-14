import "./App.css";
import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Balances from "./components/Balances/Balances";
import Spending from "./components/Spending/Spending";
import DigitalChannels from "./components/Spending/DigitalChannels";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare);
function App() {
  const adminUser = {
    user: "juan",
    password: "1234",
  };
  const [user, setUser] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  const history = useHistory();

  const login = (details) => {
    console.log(details);
    if (
      details.user === adminUser.user &&
      details.password === adminUser.password
    ) {
      console.log("logged in");
      setUser({
        user: details.user,
        password: details.password,
      });
      setError("");
      history.push("/balances");
    } else {
      setUser({ user: "", password: "" });
      setError("Wrong username or password");
    }
  };

  const Logout = () => {
    setUser({});
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LogIn login={login} error={error} />
        </Route>
        <Route path="/balances">
          <Balances adminUser={adminUser} />
        </Route>
        <Route path="/spendings">
          <Spending />
        </Route>
        <Route path="/digital-channels">
          <DigitalChannels />
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
