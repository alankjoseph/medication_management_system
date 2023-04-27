import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import Add from "../../components/superAdmin/AddDoctors";
import { BaseUrl } from "../../instance/constants";
function AddAdmin() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <Add title="Admin" api={`${BaseUrl}/api/superAdmin/addAdmin`} />
                </div>
            </div>
        </div>
    );
}

export default AddAdmin;
