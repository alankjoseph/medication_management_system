import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import List from "../../components/superAdmin/ListDoctor";
function ListDoctors() {
  return (
    <div>
      <div>
        <Navbar title={"Super Admin's"} />
      </div>
      <div className="flex ">
        <div className="h-screen">
          <SideBar />
        </div>
        <div className="p-10 w-full">
          <List title="Doctors List" link="/addDoctor" button="Doctor" />
        </div>
      </div>
    </div>
  );
}

export default ListDoctors;
