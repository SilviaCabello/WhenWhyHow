import { Link } from "react-router-dom";
import "./Balances.css";

function NavigationCards() {
  return (
    <div className="balances-categories-balances">

        <Link to="/spendings">
          <div className="spendings-card">
             <img
               className="card-icon-balances-img"
               src="https://i.imgur.com/2fqg5Ki.png"
               alt="spendings-icon"
              />
            <p className="card-title">Spendings</p>
          </div>
        </Link>
       
        <Link to="/balances">
          <div className="banking-card">
            <img
              className="card-icon-balances-img"
              src="https://i.imgur.com/HYWFfWq.png"
              alt="spendings-icon"
            />
            <p className="card-title-habits">Balances</p>
          </div>
        </Link>
      

      <Link to="/digital-channels">
        <div className="digital-card">
          <img
            className="card-icon-balances-img"
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
