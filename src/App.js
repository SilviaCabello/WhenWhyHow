import "./App.css";
import { useState, useEffect } from "react";
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
  const [error, setError] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory();

  // const adminUser = {
  //   username: req.body.username,
  //   password: req.body.password,
  // };

  const adminUser = {
    user: "",
    password: "",
  };

  const fetchData = () => {
    fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setUserData(data[0]);
      })
      .then(() => {
        history.push("/balances");
      })
      .catch((err) => console.log("from catch", err))

      .then((data) => setUserData(data[0]));
  };

  // const login = () => {
  //   if (res.json) {
  //     setUserData(response.data.message);
  //   } else {
  //     setUserData(response.data[0].username);
  //   }
  // };

  // useEffect(() => {
  //   if (response.data.login == "true") {
  //     setLoginStatus(response.data.user[0].username);
  //   }
  // });

  // const login = (details) => {
  //   console.log(details);
  //   if (
  //     details.user === adminUser.user &&
  //     details.password === adminUser.password
  //   ) {
  //     console.log("logged in");
  //     setUser({
  //       user: details.user,
  //       password: details.password,
  //     });
  //     setError("");
  //   } else {
  //     setUser({ user: "", password: "" });
  //     setError("details do not match");
  //   }
  // };

  // const Logout = () => {
  //   setUser({});
  // };
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
