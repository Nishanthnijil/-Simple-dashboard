import React from 'react';
import { useNavigate } from 'react-router-dom';
import BatteryStatus from './Charts/BatteryStatus';
import InventoryChart from './Charts/Inventorychart';
import OrdersChart from './Charts/OrdersChart';
import Margin from './Charts/Margin';
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication flag
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="background-class page-size">
      <div className="container-fluid">
        {/* Header */}
        <div className="row header">
          <div className="col p-0"></div>
          <div className="col p-0 d-flex justify-content-center align-items-center">
            <span className="page-title">Analytics Dashboard</span>
          </div>
          <div className="col p-0 d-flex justify-content-end align-items-center mr-4">
            <div className="logout" onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="row content">
          {/* Sidebar and Left Charts */}
          <div className="col-4 p-0 d-flex">
            <div className="side-nav" style={{ width: "15%" }}>
              <div
                style={{
                  backgroundColor: "rgba(46, 36, 65, 1)",
                  borderLeft: "2px solid rgba(0, 179, 33, 1)",
                  width: "100%",
                }}
              >
                <i
                  className="p-3 material-icons"
                  style={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  cottage
                </i>
              </div>
              <div>
                <i
                  className="p-3 material-icons"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  settings
                </i>
              </div>
            </div>

            <div className="" style={{ width: "90%" }}>
              <div className="row mt-3">
                <div className="col pt-5 d-flex justify-content-center">
                  <InventoryChart />
                </div>
              </div>
              <div className="row">
                <div className="col pt-5 mt-4 d-flex justify-content-center">
                  <OrdersChart />
                </div>
              </div>
            </div>
          </div>

          {/* Center Chart */}
          <div className="col-3 mt-3 pl-0 pt-5 d-flex justify-content-center">
            <BatteryStatus style={{ height: "100% !important" }} />
          </div>

          {/* Right Chart */}
          <div className="col-5 mt-3 pt-5">
            <Margin />
          </div>
        </div>

        {/* Footer */}
        <div className="row footer">
          <div className="col p-0"></div>
          <div className="col p-0 d-flex justify-content-center">
            <span className="pt-1 page-footer-text">
              © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
            </span>
          </div>
          <div className="col p-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
