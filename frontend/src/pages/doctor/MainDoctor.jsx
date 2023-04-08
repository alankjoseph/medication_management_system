import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/doctor/SideBar";
import DoctorMain from "../../components/doctor/DoctorMain";
function MainDoctor() {
  return (
    <div className=""> 
      <div className=" w-full">
        <Navbar title={"Doctor's"} />
      </div>
      <div className="flex max-h-screen">
        <div>
          <SideBar />
        </div>
        <div className="p-10 w-full h-screen overflow-auto">
          <DoctorMain />
        </div>
      </div>
    </div>
  );
}

export default MainDoctor;
