import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import AddDoctors from "../../components/superAdmin/AddDoctors";
import { BaseUrl } from "../../instance/constants";
function AddDoctor() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddDoctors title="Doctor" api={`${BaseUrl}/api/superAdmin/addDoctor`} />
                </div>
            </div>
        </div>
    );
}

export default AddDoctor;
