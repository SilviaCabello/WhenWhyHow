import "./Spending.css";
import BarDiagram from "./BarDiagram";
import DonutDigChannel from "./DonutDigChannels";
import NavigationCards from "../Balances/NavigationCards";
import NavBarDigChan from "../NavBar/NavBarDigChan";

function DigitalChannels({ userData }) {
  return (
    <div>
      <NavBarDigChan />
      <div className="spending-container">
        <p className="balances-totalcash">
          Available Cash <b>{userData.balance}</b>
        </p>
        <BarDiagram userData={userData} />
        <DonutDigChannel userData={userData} />
        <NavigationCards />
      </div>
    </div>
  );
}
export default DigitalChannels;
