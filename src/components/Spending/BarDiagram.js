import "./SpiderChart.css";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function BarDiagram({ userData }) {
  const data = [
    {
      subject: userData.spider[0].subject,
      A: userData.spider[0].a,
      fullMark: userData.spider[0].fullMark,
    },
    {
      subject: userData.spider[1].subject,
      A: userData.spider[1].a,
      fullMark: userData.spider[1].fullMark,
    },
    {
      subject: userData.spider[2].subject,
      A: userData.spider[2].a,
      fullMark: userData.spider[2].fullMark,
    },

    {
      subject: userData.spider[3].subject,
      A: userData.spider[3].a,
      fullMark: userData.spider[3].fullMark,
    },
    {
      subject: userData.spider[4].subject,
      A: userData.spider[4].a,
      fullMark: userData.spider[4].fullMark,
    },
  ];

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
