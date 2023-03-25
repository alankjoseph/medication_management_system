import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import AddDepartments from "../../components/AddDepartments";

function AddDepartment() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"}/>
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddDepartments title="Department" />
                </div>
            </div>
        </div>
    );
}

export default AddDepartment;
