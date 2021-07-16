import "./Balances.css";
import MainBank from "./MainBank";
import NavigationCards from "./NavigationCards.js";
import NavBarOverview from "../NavBar/NavBarOverview";


function Balances({ adminUser }) {
  return (
    <div className="Welcome">
      <NavBarOverview />
      <h3 className="welcome-balances">
        Welcome, <span>{adminUser.user}!</span>
      </h3>
      <img
        className="balances-illustration"
        src="https://i.imgur.com/D0kRo6u.jpg"
        alt=""
      />
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <MainBank />
      <NavigationCards />
    </div>
  );
}

export default Balances;
