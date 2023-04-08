import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import AddNurses from "../../components/superAdmin/AddNurse";
function AddNurse() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddNurses title=" Nurse" api='http://localhost:4000/api/superAdmin/addNurse'/>
                </div>
            </div>
        </div>
    );
}

export default AddNurse;
