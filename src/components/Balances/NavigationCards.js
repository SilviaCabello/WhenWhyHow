import { Link } from "react-router-dom";

function NavigationCards() {
  return (
    <div className="balances-categories">
      
        <Link to="/spendings">
          <div className="spendings-card">
             <img
               className="card-icon-balances"
               src="https://i.imgur.com/2fqg5Ki.png"
               alt="spendings-icon"
              />
            <p className="card-title">Spendings</p>
          </div>
        </Link>
       

      <div className="banking-card">
        <img
          className="card-icon-balances-habits"
          src="https://i.imgur.com/9wJBl72.png"
          alt="spendings-icon"
        />
        <p className="card-title-habits">Banking habits</p>
      </div>

      <Link to="/digital-channels">
        <div className="digital-card">
          <img
            className="card-icon-balances"
            src="https://i.imgur.com/MPK6sxe.png"
            alt="spendings-icon"
          />
          <p className="card-title">Digital channels</p>
        </div>
      </Link>
      
    </div>
  );
}

export default NavigationCards;
