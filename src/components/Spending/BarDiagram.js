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
    subject: "Other Bank Marketing Campaigns",
    A: 21,
    fullMark: 35,
  },
  {
    subject: "Stock Market crashes",
    A: 7,
    fullMark: 35,
  },

  {
    subject: "Bank own campaings",
    A: 16,
    fullMark: 35,
  },
  {
    subject: "Economic news",
    A: 3,
    fullMark: 35,
  },
];

export default function BarDiagram() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={800}
      height={500}
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
  );
}
