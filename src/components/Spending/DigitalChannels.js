import "./Spending.css";
import BarDiagram from "./BarDiagram";
import DonutDigChannel from "./DonutDigChannels";
import NavigationCards from "../Balances/NavigationCards";
import NavBarDigChan from "../NavBar/NavBarDigChan";

function DigitalChannels() {
  return (
    <div>
     <NavBarDigChan />
    <div className="spending-container">
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <BarDiagram />
      <DonutDigChannel />
      <NavigationCards />
    </div>
    </div>
  );
}
export default DigitalChannels;
