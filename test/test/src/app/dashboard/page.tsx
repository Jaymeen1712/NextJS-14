"use client"
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <span>Dashboard</span>
      <button
        onClick={() => {
          console.log("first");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Dashboard;
