import React from "react";
import DrugList from "./DrugList";
import Prescription from "../../components/doctor/Prescription";
import PatientDetails from "./PatientDetails";
function DoctorMain() {
  return (
    <div className="">
      <div className="mb-9">
        <PatientDetails />
      </div>
      <div className="">
        <DrugList  />
      </div>
      <div className="mt-9">
        <Prescription />
      </div>
    </div>
  );
}

export default DoctorMain;
