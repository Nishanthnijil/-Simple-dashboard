import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const OrdersChart = () => {
  const [timeRange, setTimeRange] = useState("days");

  // Data for different time ranges (7 days, 7 weeks, 7 months)
  const data = {
    days: {
      labels: Array.from({ length: 7 }, (_, index) => `Day ${index + 1}`),
      datasets: [
        {
          label: "Orders",
          data: [50, 55, 45, 60, 70, 65, 75], // Data for 7 days
          borderColor: "#28a745",
          backgroundColor: "rgba(40, 167, 69, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    weeks: {
      labels: Array.from({ length: 7 }, (_, index) => `Week ${index + 1}`),
      datasets: [
        {
          label: "Orders",
          data: [300, 320, 310, 350, 380, 400, 420], // Data for 7 weeks
          borderColor: "#28a745",
          backgroundColor: "rgba(40, 167, 69, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    months: {
      labels: Array.from({ length: 7 }, (_, index) => `Month ${index + 1}`),
      datasets: [
        {
          label: "Orders",
          data: [1200, 1250, 1300, 1350, 1400, 1450, 1500], // Data for 7 months
          borderColor: "#28a745",
          backgroundColor: "rgba(40, 167, 69, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw} units`;
          },
        },
      },
      legend: {
        display: false, // Hide the default legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    elements: {
      point: {
        radius: 0, // Hide data points
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
  };

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  return (
    <div
      style={{
        // width: "75%",
        // height: "70%",
        width: "350px",
        height: "213px",
        padding: "50px",
        paddingTop: "40px",
        background: "rgba(45, 45, 45, 0.5)",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* "Orders" label at top left */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "#FFFFFFCC", 
          fontSize: "14px", 
          paddingTop: "10px",
          paddingLeft: "40px",
        }}
      >
        Orders
      </div>

      {/* Dropdown to select time range at top right */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <select
          style={{
            background: "none",
            border: "none",
            padding: "5px",
            fontSize: "14px",
            cursor: "pointer",
            color: "#FFFFFFCC",
            lineHeight: "34px"
          }}
          value={timeRange}
          onChange={handleTimeRangeChange}
        >
          <option value="days">7 Days</option>
          <option value="weeks">7 Weeks</option>
          <option value="months">7 Months</option>
        </select>
      </div>

      {/* Line Chart */}
      <div style={{ position: "relative", width: "100%", height: "200px", paddingTop: "15px" }}>
        <Line data={data[timeRange]} options={options} />
      </div>
    </div>
  );
};

export default OrdersChart;
