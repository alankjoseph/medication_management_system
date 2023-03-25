import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import List from "../../components/ListDoctor";
function ListNurse() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"}/>
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <List title="Nurse" link='/addNurse' button="Nurse"/>
                </div>
            </div>
        </div>
    );
}

export default ListNurse;
