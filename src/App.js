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
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({ username: "", password: "" });
  //eslint-disable-next-line
  const [error, setError] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory();

  const fetchData = () => {
    if (user.username !== "" && user.password !== "") {
      fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data[0]);
        })
        .then(() => {
          history.push("/balances");
        })
        .catch((err) => console.log("from catch", err));
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LogIn
            fetchData={fetchData}
            userData={userData}
            login={setUser}
            error={error}
          />
        </Route>
        <Route path="/balances">
          <Balances adminUser={userData} />
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