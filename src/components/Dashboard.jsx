import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="app-logo">Yms</h2>
        <div className="navitems">
          <img src="" alt="find" />
          <img src="" alt="notification" />
          <img src="" alt="user" />
        </div>
      </div>
      <div className="row main-content">
        <div className="col-3 sidenav">List of items will come over here</div>
        <div className="col-8 content-area">users list and others</div>
      </div>
    </div>
  );
};
export default Dashboard;
