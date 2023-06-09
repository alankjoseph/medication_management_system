import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import AddDepartments from "../../components/superAdmin/AddDepartments";
import { BaseUrl } from "../../instance/constants";

function AddDepartment() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"}/>
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddDepartments title="Department" api={`${BaseUrl}/api/superAdmin/addDepartment`} />
                </div>
            </div>
        </div>
    );
}

export default AddDepartment;
