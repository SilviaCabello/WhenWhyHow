import { Link } from "react-router-dom";
import "./Balances.css";
import MainBank from "./MainBank";
import SecondBank from "./SecondBank";

function Balances() {
  return (
    <div>
      <p className="balances-totalcash">Available Cash 5388,23€</p>
      <MainBank/>
      <SecondBank/>
      <div className="balances-categories">
        <Link to={`/dashboard`}>
          <img className="spendings-category" src="https://i.imgur.com/9Z8HrXN.png" alt="Spendings" />
        </Link>
        <img src="https://i.imgur.com/8CspobY.png" alt="Banking Habits" />
        <img src="https://i.imgur.com/uE4yByP.png" alt="Digital chanels" />
      </div>
    </div>
  );
}

export default Balances;
