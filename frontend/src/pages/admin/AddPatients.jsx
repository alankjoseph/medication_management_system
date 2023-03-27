import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/admin/Sidebar";
import AddPatients from "../../components/admin/AddPatients";
function AddPatient() {
    return (
        <div>
            <div >
                <Navbar title={"Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <AddPatients api />
                </div>
            </div>
        </div>
    );
}

export default AddPatient;
