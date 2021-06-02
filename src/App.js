import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
