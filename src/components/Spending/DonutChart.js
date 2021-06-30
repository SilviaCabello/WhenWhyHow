import DonutChart from "react-donut-chart";
import "./DonutChart.css";

function Donut() {
  return (
    <div className="card-container">
      <div className="spending-card">
        <h5 className="spending-title">Spending Categories</h5>
        <div className="donut-container">
          <DonutChart
            data={[
              {
                label: "Travels",
                value: 353.32,
              },
              {
                label: "Groceries",
                value: 412.45,
              },

              {
                label: "Insurance",
                value: 202.32,
              },
              {
                label: "Home",
                value: 202.32,
              },
              {
                label: "Rent",
                value: 800.55,
              },
              {
                label: "Kids",
                value: 602.34,
              },
            ]}
            innerRadius={0.5}
            colors={[
              "#e9dc79",
              "#eede5b",
              "#ecd734",
              "#bba714",
              "#9c8b04",
              "#948b44",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Donut;
