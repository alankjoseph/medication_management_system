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
                    <AddDoctors title="Doctor" api='http://localhost:4000/api/superAdmin/addDoctor' />
                </div>
            </div>
        </div>
    );
}

export default AddDoctor;
