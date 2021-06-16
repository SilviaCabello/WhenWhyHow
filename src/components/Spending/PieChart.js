import DonutChart from "react-donut-chart";
import "./DonutChart.css";
//things I would never do:

function PieChart() {
  return (
    <div>
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
          height={380}
          width={600}
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
  );
}

export default PieChart;
