import "./Spending.css";
import Donut from "./Donut";
// import SelectBank from "./SelectBank";
import BarDiagram from "./BarDiagram";
import DonutDigChannel from "./DonutDigChannels";
import Collapsible from "./Collapsible";

function Spending({ bank, setBank, collapsible, handleCollapsible }) {
  return (
    <div className="spending-container">
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      {/* <SelectBank /> */}
      <Collapsible
        collapsible={collapsible}
        handleCollapsible={handleCollapsible}
        bank={bank}
        setBank={setBank}
      />
      <Donut />
      <BarDiagram />
      <DonutDigChannel />
    </div>
  );
}
export default Spending;
