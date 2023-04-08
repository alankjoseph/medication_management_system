import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/doctor/SideBar";
import ViewBookings from "../../components/doctor/ViewBookings";
function Booking() {
  return (
    <div>
      <div className=" w-full">
        <Navbar title={"Doctor's"} />
      </div>
      <div className="flex h-full">
        <div>
          <SideBar />
        </div>
        <div className="p-10 w-full">
          <ViewBookings />
        </div>
      </div>
    </div>
  );
}

export default Booking;
