import "./Spending.css";
import PieChart from "./PieChart";
import DonutChart from "react-donut-chart";
import SelectBank from "./SelectBank";

function Spending() {
  return (
    <div>
      <p className="balances-totalcash">
        Available Cash <b>5388,23€</b>
      </p>
      <SelectBank />
      <PieChart />
    </div>
  );
}
export default Spending;
