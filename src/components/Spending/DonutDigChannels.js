import DonutChart from "react-donut-chart";
import "./DonutChart.css";

function DonutDigChannel() {
  return (
    <div className="card-container">
      <div className="spending-card">
        <h5 className="spending-title">Digital Channels Usage</h5>
        <div className="donut-container">
          <DonutChart
            data={[
              {
                label: "App",
                value: 57,
              },
              {
                label: "Web",
                value: 21,
              },

              {
                label: "Chatbot",
                value: 18,
              },
              {
                label: "Call Center",
                value: 4,
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
