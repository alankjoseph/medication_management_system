import React from "react";
import AdmitedPatients from "../../components/nurse/ViewPatient";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/nurse/Sidebar";

function Patients() {
  return (
    <div>
      <div>
        <Navbar title={"Nurse's"} />
      </div>
      <div className="flex">
        <Sidebar />
        
        <div className="p-10 w-full">
        <AdmitedPatients />
        </div>
      </div>
    </div>
  );
}

export default Patients;
