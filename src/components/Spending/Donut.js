import DonutChart from "react-donut-chart";
import "./DonutChart.css";

function Donut({ userData }) {
  return (
    <div className="card-container">
      <div className="spending-card">
        <h5 className="spending-title">Spending Categories</h5>
        <div className="donut-container">
          <DonutChart
            data={[
              {
                label: userData.spendings[0].label,
                value: userData.spendings[0].value,
              },
              {
                label: userData.spendings[1].label,
                value: userData.spendings[1].value,
              },

              {
                label: userData.spendings[2].label,
                value: userData.spendings[2].value,
              },
              {
                label: userData.spendings[3].label,
                value: userData.spendings[3].value,
              },
              {
                label: userData.spendings[4].label,
                value: userData.spendings[4].value,
              },
              {
                label: userData.spendings[5].label,
                value: userData.spendings[5].value,
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
