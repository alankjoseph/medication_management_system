import React from "react";

import Navbar from "../../components/Navbar";
import SideBar from "../../components/admin/Sidebar";
import List from "../../components/ListDoctor";
function Patients() {
    return (
        <div>
            <div>
                <Navbar title={"Admin's"} />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <List
                        title="Patients List"
                        link="/addPatients"
                        button="Patient"
                    />
                </div>
            </div>
        </div>
    );
}

export default Patients;
