import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import Add from "../../components/superAdmin/AddDoctors";
function AddAdmin() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <Add title="Admin" api='http://localhost:4000/api/superAdmin/addAdmin' />
                </div>
            </div>
        </div>
    );
}

export default AddAdmin;
