import "./SpiderChart.css";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Christmas Season",
    A: 34,
    fullMark: 35,
  },
  {
    subject: "Other Banks",
    A: 21,
    fullMark: 35,
  },
  {
    subject: "Stock Market Crashes",
    A: 7,
    fullMark: 35,
  },

  {
    subject: "Bank Own Campaings",
    A: 16,
    fullMark: 35,
  },
  {
    subject: "Economic News",
    A: 3,
    fullMark: 35,
  },
];

export default function BarDiagram() {
  return (
    <div className="card-container">
      <div className="spending-card">
        <h5 className="spending-title">Reactivity Index</h5>
        <div className="donut-container">
          <RadarChart
            cx={250}
            cy={150}
            outerRadius={120}
            width={500}
            height={300}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
      </div>
    </div>
  );
}
