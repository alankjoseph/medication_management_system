import React from 'react'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import AddDoctors from "../../components/AddDoctors";
function AddNurse() {
  return (
    <div>
            <div>
                <Navbar />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddDoctors title="Staff Nurse" />
                </div>
            </div>
        </div>
  )
}

export default AddNurse