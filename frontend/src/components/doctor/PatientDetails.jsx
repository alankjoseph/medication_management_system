import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
function PatientDetails() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [bloodPresure, setBloodPresure] = useState("");
  const [reason, setReason] = useState("");
  const [isAdmit, setIsAdmit] = useState("");
  const { doctor } = useAuthContext();
  
  const handleAdmit = async () => {
    await axios.patch(`http://localhost:4000/api/doctor/admit/${id}`, {
      headers: {
        Authorization: `Bearer ${doctor.token}`,
      },
    });
    getPatient()
  };
  const getPatient = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/api/doctor/singlePatient/${id}`, {
        headers: {
          Authorization: `Bearer ${doctor.token}`,
        },
      }
    );
    setName(data.patient.name);
    setAge(data.patient.age);
    setGender(data.patient.gender);
    setBloodGroup(data.patient.bloodGroup);
    setBloodPresure(data.patient.bloodPresure);
    setReason(data.patient.reason);
    setIsAdmit(data.patient.isAdmit);
  };
  useEffect(() => {
    
    getPatient();
  },[]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth]);
  return (
    <div>
      <div className="mb-3">
        <h1 className="text-4xl font-bold">Patient Details</h1>
      </div>
      <div className="bg-gray-100 rounded-md p-4 shadow-md">
        <div className="  items-center gap-4 block">
          <p className="text-gray-800 font-medium">
            ID:
            <span className="text-gray-600 ml-2 font-normal">{id}</span>
          </p>
          <p className="text-gray-800 font-medium">
            Name:
            <span className="text-gray-600 ml-2 font-normal">{name}</span>
          </p>
          <p className="text-gray-800 font-medium">
            Gender:
            <span className="text-gray-600 ml-2 font-normal">{gender}</span>
          </p>
          <p className="text-gray-800 font-medium">
            BP:
            <span className="text-gray-600 ml-2 font-normal">{bloodPresure}</span>
          </p>
          <p className="text-gray-800 font-medium">
            Age:
            <span className="text-gray-600 ml-2 font-normal">{age}</span>
          </p>
          <p className="text-gray-800 font-medium">
            Blood:
            <span className="text-gray-600 ml-2 font-normal">{bloodGroup}</span>
          </p>
          <p className="text-gray-800 font-medium">
            Reason:
            <span className="text-gray-600 ml-2 font-normal">{reason}</span>
          </p>
        </div>
        <div className="mt-3">
          <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-2">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-base font-semibold hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white">Completed</button>
            {isAdmit ? (
              <button
                onClick={handleAdmit}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-base font-semibold hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white"
              >
                Discharge
              </button>
            ) : (
              <button
                onClick={handleAdmit}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-base font-semibold hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white"
              >
                Admit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
