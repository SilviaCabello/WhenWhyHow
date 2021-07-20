import DonutChart from "react-donut-chart";
import "./DonutChart.css";

function DonutDigChannel({ userData }) {
  return (
    <div className="card-container">
      <div className="spending-card">
        <h5 className="spending-title">Digital Channels Usage</h5>
        <div className="donut-container">
          <DonutChart
            data={[
              {
                label: userData.digital[0].label,
                value: userData.digital[0].value,
              },
              {
                label: userData.digital[1].label,
                value: userData.digital[1].value,
              },

              {
                label: userData.digital[2].label,
                value: userData.digital[2].value,
              },
              {
                label: userData.digital[3].label,
                value: userData.digital[3].value,
              },
            ]}
            innerRadius={0.5}
            colors={[
              "#e9dc79",
              "#e9dc89",
              "#eede5b",
              "#ecd734",
              "#ecc734",
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

export default DonutDigChannel;
