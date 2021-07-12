import { Link } from "react-router-dom";
import "./Balances.css";
import MainBank from "./MainBank";
import { useState, adminUser } from "react";


function Balances({ adminUser }) {
  return (
    <div className="Welcome">
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

      <div className="balances-categories">
        {/* <Link to="/spending">
          <img className="spendings-category" src={spendings} alt="Spendings" />
        </Link>
        <img
          src="https://res.cloudinary.com/dwjfpjuhh/image/upload/v1623401115/wwh/bankinghabits_lgzbr3.png"
          alt="Banking Habits"
        />
        <img
          src="https://res.cloudinary.com/dwjfpjuhh/image/upload/v1623401115/wwh/digitalchanels_yju1qs.png"
          alt="Digital chanels"
        /> */}
        
        <div className="spendings-card">
          <Link to="/spending"><img className="card-icon-balances" src="https://i.imgur.com/2fqg5Ki.png" alt="spendings-icon"/></Link>
          <p className="card-title">Spendings</p>
        </div>

        <div className="banking-card">
          <img className="card-icon-balances-habits" src="https://i.imgur.com/9wJBl72.png" alt="spendings-icon"/>
          <p className="card-title-habits">Banking habits</p>
        </div>

        <div className="digital-card">
          <Link to="/spending"><img className="card-icon-balances" src="https://i.imgur.com/MPK6sxe.png" alt="spendings-icon"/></Link>
          <p className="card-title">Digital chanels</p>
        </div>

      </div>
    </div>
  );
}

export default Balances;
