import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { SidebarWithSearch } from "../../components/SideBar/SidebarWithSearch";
import Contents from "../../components/Contents/Contents";
import FAb from "../../components/FAB/FAb";

const Dashboard = () => {
  return (
    <>
      <div className="dasboard w-screen h-screen p-2 flex">
        {/* <h2>Main Dashboard</h2> */}
        <SidebarWithSearch />
        <div className="main w-full h-full overflow-hidden">
          <Navbar />
          <Contents />
          <FAb />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
