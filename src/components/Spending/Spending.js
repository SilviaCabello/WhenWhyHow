import "./Spending.css";
import Donut from "./Donut";
import NavigationCards from "../Balances/NavigationCards";
import NavBarSpending from "../NavBar/NavBarSpending";

function Spending({ bank, setBank, collapsible, handleCollapsible }) {
  return (
    <div>
      <NavBarSpending />
    <div className="spending-container">
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>

      <Donut />
      <NavigationCards />
    </div>
    </div>
  );
}
export default Spending;
