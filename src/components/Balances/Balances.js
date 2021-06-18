import { Link } from "react-router-dom";
import "./Balances.css";
import MainBank from "./MainBank";
import spendings from "./spendings.png";

function Balances() {
  return (
    <div>
      <img
        className="balances-illustration"
        src="https://i.imgur.com/D0kRo6u.jpg"
        alt=""
      />
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <MainBank />

      <div className="balances-categories">
        <Link to="/spending">
          <img className="spendings-category" src={spendings} alt="Spendings" />
        </Link>
        <img
          src="https://res.cloudinary.com/dwjfpjuhh/image/upload/v1623401115/wwh/bankinghabits_lgzbr3.png"
          alt="Banking Habits"
        />
        <img
          src="https://res.cloudinary.com/dwjfpjuhh/image/upload/v1623401115/wwh/digitalchanels_yju1qs.png"
          alt="Digital chanels"
        />
      </div>
    </div>
  );
}

export default Balances;
