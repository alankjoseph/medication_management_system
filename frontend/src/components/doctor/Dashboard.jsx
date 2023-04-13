import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
import axios from "axios";

function Dashboard() {
  const { doctor } = useAuthContext();
  const [duty, setDuty] = useState(false)
  const getDoctor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/doctor/getDoctor/${doctor.doctorID}`, {
          headers: {
            Authorization: `Bearer ${doctor.token}`,
          },
        }
      )
      setDuty(response.data.duty)
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctor()
  },[])
  const handleClick = async (id) => {
    console.log(id);
    await axios.patch(`http://localhost:4000/api/doctor/markDuty/${id}`, {
      headers: {
        Authorization: `Bearer ${doctor.token}`,
      },
    });
    getDoctor()
  };
  const doctorNumber = doctor.docCount
  const items = [
    { title: "Doctors", number: doctorNumber },
    { title: "Nurse", number: "20" },
    { title: "In Patients", number: "80" },
    { title: "Total Beds", number: "100" },
    { title: "Available Beds", number: "20" },
  ];
  return (
    <>
      <div>
        <h1 className="text-4xl  font-bold  content-between  mb-8 text-center">
          {doctor.department} Department
        </h1>
      </div>
      <div className="mb-5 pr-3 flex flex-row-reverse  justify-center">
        <button
          onClick={() => handleClick(doctor.doctorID)}
          className={`text-2xl font-semibold text-white ${duty ? 'bg-green-700': 'bg-blue-700'}  px-3 py-1 rounded-md`}
        >
          {duty ? 'Mark Your Attendence : On duty': 'Mark Your Attendence : OFF duty'}
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-20 place-items-center ">
        {items.map((item, index) => (
          <>
            <div className="bg-slate-600 rounded-md h-44 w-48 text-center  py-12 ">
              <h1 className="text-2xl font-semibold text-white">
                {item.title}
              </h1>
              <h1 className="text-4xl font-bold text-teal-600">
                {item.number}
              </h1>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
