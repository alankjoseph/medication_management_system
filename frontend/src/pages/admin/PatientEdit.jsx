import React from "react";

import Navbar from "../../components/Navbar";
import SideBar from "../../components/admin/Sidebar";
import EditPatient from "../../components/admin/EditPatient";

function PatientEdit() {
  return (
    <div>
      <div>
        <Navbar title={"Admin's"} />
      </div>
      <div className="flex">
        <SideBar />
        <div className="p-10 w-full">
          <EditPatient
            
          />
        </div>
      </div>
    </div>
  );
}

export default PatientEdit;
