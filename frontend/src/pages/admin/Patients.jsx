import React from "react";

import Navbar from "../../components/Navbar";
import SideBar from "../../components/admin/Sidebar";
import ViewPatients from '../../components/admin/ViewPatients'
function Patients() {
    return (
        <div>
            <div>
                <Navbar title={"Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <ViewPatients
                        title="Patients List"
                        api="http://localhost:4000/api/admin/patient"
                        link="/addPatients"
                        button="Patient"
                    />
                </div>
            </div>
        </div>
    );
}

export default Patients;
