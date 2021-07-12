import { Link } from "react-router-dom";

function NavigationCards() {
  return (
    <div className="balances-categories">
      <div className="spendings-card">
        <Link to="/spendings">
          <img
            className="card-icon-balances"
            src="https://i.imgur.com/2fqg5Ki.png"
            alt="spendings-icon"
          />
        </Link>
        <p className="card-title">Spendings</p>
      </div>

      <div className="banking-card">
        <img
          className="card-icon-balances-habits"
          src="https://i.imgur.com/9wJBl72.png"
          alt="spendings-icon"
        />
        <p className="card-title-habits">Banking habits</p>
      </div>

      <div className="digital-card">
        <Link to="/digital-channels">
          <img
            className="card-icon-balances"
            src="https://i.imgur.com/MPK6sxe.png"
            alt="spendings-icon"
          />
        </Link>
        <p className="card-title">Digital channels</p>
      </div>
    </div>
  );
}

export default NavigationCards;
