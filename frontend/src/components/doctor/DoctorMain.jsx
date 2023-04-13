import React, { useState } from "react";
import DrugList from "./DrugList";
import Prescription from "../../components/doctor/Prescription";
import PatientDetails from "./PatientDetails";
function DoctorMain() {
 const [add, setAdd] = useState(false)
  return (
    <div className="">
      <div className="mb-9">
        <PatientDetails />
      </div>
      <div className="">
        <DrugList add={add} setAdd={setAdd} />
      </div>
      <div className="mt-9">
        <Prescription  add={add} />
      </div>
    </div>
  );
}

export default DoctorMain;
