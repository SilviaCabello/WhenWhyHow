import { Link } from "react-router-dom";
import "./Balances.css";
import MainBank from "./MainBank";

function Balances() {
  return (
    <div>
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <MainBank />

      <div className="balances-categories">
        <Link to={`/dashboard`}>
          <img
            className="spendings-category"
            src="https://i.imgur.com/9Z8HrXN.png"
            alt="Spendings"
          />
        </Link>
        <img src="https://i.imgur.com/8CspobY.png" alt="Banking Habits" />
        <img src="https://i.imgur.com/uE4yByP.png" alt="Digital chanels" />
      </div>
    </div>
  );
}

export default Balances;
