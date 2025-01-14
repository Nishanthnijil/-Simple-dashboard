import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BatteryStatus = () => {
  const data = {
    labels: ["Remaining", "Consumed"],
    datasets: [
      {
        data: [65, 35], // Values for remaining and consumed battery
        backgroundColor: ["#007BFF", "#FFBE0A"], // Blue for remaining, yellow for consumed
        hoverBackgroundColor: ["#0056b3", "#d79c09"], // Darker shades on hover
        hoverOffset: 10, // Offset when hovering over segments
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Adjust the doughnut hole size
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}%`;
          },
        },
      },
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <div
      style={{
        width: "80%",
        height: "500px",
        paddingLeft: "25px",
        paddingRight: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-between",
        position: "relative",
        color: "#fff",
        background: "rgba(45, 45, 45, 0.5)",
      }}
    >
      {/* Top-right: Dummy button */}
      <div className="row" style={{width: "100%", height: "25%"}}>
        <div className="col pt-3">
          {/* Top Section */}
          <div
            style={{
              width: "100%"
            }}
          >
            {/* Top-left: Battery title */}
            <span style={{ color: "#FFFFFFCC", fontSize: "14px", lineHeight: "1px" }}>Battery</span>

            
          </div>
        </div>
        <div className="col-2">
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#FFFFFFCC", 
            fontSize: "25px",
            padding: "0%"
            // lineHeight: "1px"
          }}
          onClick={() => alert("Dummy button clicked!")}
        >
          <span>...</span>
        </button>
        </div>
      </div>

      {/* Doughnut Chart */}
      <div style={{ position: "relative", width: "100%", height: "50%", display: "flex",
          justifyContent: "center" 
          }}>
        <Doughnut data={data} options={options} />
        {/* Percentage detail inside the doughnut */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#FFFFFFCC", 
          
          }}
        >
          65%
        </div>
      </div>

      {/* Legend Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "10px",
          height: "25%"
        }}
      >
        {/* Remaining Legend */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", fontWeight: "400" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#007BFF",
              borderRadius: "50%",
            }}
          ></span>
          <span>Remaining</span>
        </div>
        {/* Consumed Legend */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", fontWeight: "400" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#FFBE0A",
              borderRadius: "50%"
            }}
          ></span>
          <span>Consumed</span>
        </div>
      </div>
    </div>
  );
};

export default BatteryStatus;
