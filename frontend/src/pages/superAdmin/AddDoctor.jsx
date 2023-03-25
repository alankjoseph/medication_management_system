import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import AddDoctors from "../../components/AddDoctors";
function AddDoctor() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddDoctors title="Doctor" />
                </div>
            </div>
        </div>
    );
}

export default AddDoctor;
