import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Balances from "./components/Balances/Balances";

function App() {
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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
