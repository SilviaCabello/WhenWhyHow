import "./Balances.css";
import MainBank from "./MainBank";
import NavigationCards from "./NavigationCards.js";
import NavBarOverview from "../NavBar/NavBarOverview";

function Balances({ adminUser, userData }) {
  console.log(userData)
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
        Available Cash <b>{userData}</b>
      </p>
      <MainBank userData={userData} />
      <NavigationCards />
    </div>
  );
}

export default Balances;
