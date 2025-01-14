import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip);

const Margin = () => {
  const [timeRange, setTimeRange] = useState("7 Days");

  const marginData = {
    "7 Days": {
      labels: ["12th Oct", "13th Oct", "14th Oct", "15th Oct", "16th Oct", "17th Oct"],
      data: [20, 35, 80, 60, 70, 65],
    },
    "7 Weeks": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
      data: [50, 45, 60, 55, 75, 65, 80],
    },
    "7 Months": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      data: [40, 50, 65, 60, 70, 85, 90],
    },
  };

  const lineDataMargin = {
    labels: marginData[timeRange]?.labels || [],
    datasets: [
      {
        label: `Margin % (${timeRange})`,
        data: marginData[timeRange]?.data || [],
        borderColor: "#A9FF0A",
        backgroundColor: "rgba(255, 255, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#FFFFFF",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0." },
      },
    },
  };

  const handleTimeRangeChange = (event) => {
    const selectedValue = event.target.value;
    if (marginData[selectedValue]) {
      setTimeRange(selectedValue);
    }
  };

  return (
    <div
      style={{
        // background: "rgba(255, 255, 0, 0.2)",
        background: "rgba(45, 45, 45, 0.5)",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        height: "92%",
      }}
    >
      <div className="row">
        <div className="col">
          <div style={{ paddingLeft: "20px", fontSize: "20px", fontWeight: 600 }}>
            Margin %
          </div>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <select
            style={{
              background: "none",
              border: "none",
              borderRadius: "5px",
              color: "#FFF",
              padding: "5px",
              
              cursor: "pointer",
            }}
            value={timeRange}
            onChange={handleTimeRangeChange}
          >
            <option value="7 Days">7 Days</option>
            <option value="7 Weeks">7 Weeks</option>
            <option value="7 Months">7 Months</option>
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div style={{ height: "400px", width: "100%" }}>
          <Line data={lineDataMargin} options={optionsLine} />
        </div>
      </div>
    </div>
  );
};

export default Margin;