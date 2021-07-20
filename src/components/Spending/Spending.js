import "./Spending.css";
import Donut from "./Donut";
import NavigationCards from "../Balances/NavigationCards";
import NavBarSpending from "../NavBar/NavBarSpending";

function Spending({ userData }) {
  return (
    <div>
      <NavBarSpending />
      <div className="spending-container">
        <p className="balances-totalcash">
          Available Cash <b>{userData.balance}</b>
        </p>

        <Donut userData={userData} />
        <NavigationCards />
      </div>
    </div>
  );
}
export default Spending;
