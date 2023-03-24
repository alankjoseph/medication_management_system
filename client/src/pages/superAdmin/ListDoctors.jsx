import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import List from "../../components/ListDoctor";
function ListDoctors() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <List title="Doctors List" link='/addDoctor' button="Doctor"/>
                </div>
            </div>
        </div>
    );
}

export default ListDoctors;
