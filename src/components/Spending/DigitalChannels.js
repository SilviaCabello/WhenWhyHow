import "./Spending.css";
import BarDiagram from "./BarDiagram";
import DonutDigChannel from "./DonutDigChannels";

import NavigationCards from "../Balances/NavigationCards";

function DigitalChannels() {
  return (
    <div className="spending-container">
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <BarDiagram />
      <DonutDigChannel />
      <NavigationCards />
    </div>
  );
}
export default DigitalChannels;
