import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Balances from "./components/Balances/Balances";
import Spending from "./components/Spending/Spending";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare);
function App() {
  const [collapsible, setCollapsible] = useState(true);
  const [bank, setBank] = useState("Bank 1");

  function handleCollapsible() {
    setCollapsible(!collapsible);
    console.log(collapsible);
    console.log(bank);
  }
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/balances">
          <Balances />
        </Route>
        <Route path="/spending">
          <Spending
            collapsible={collapsible}
            handleCollapsible={handleCollapsible}
            bank={bank}
            setBank={setBank}
          />
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
