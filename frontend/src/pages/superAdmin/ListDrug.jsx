import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import ListDrugs from "../../components/superAdmin/ListDrugs";

function ListDrug() {
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
          <ListDrugs title="Doctors List" link="/addDoctor" button="Doctor" />
        </div>
      </div>
    </div>
  )
}

export default ListDrug