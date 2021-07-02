import "./Spending.css";
import Donut from "./DonutChart";
import SelectBank from "./SelectBank";
import BarDiagram from "./BarDiagram";

function Spending() {
  return (
    <div>
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <SelectBank />
      <Donut />
      <BarDiagram />
    </div>
  );
}
export default Spending;
