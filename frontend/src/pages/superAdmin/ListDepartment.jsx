import React from 'react'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import List from "../../components/ListDoctor";
function ListDepartment() {
  return (
    <div>
        <div>
                <Navbar title={"Super Admin's"}/>
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <List title="Department List" api='http://localhost:4000/api/doctor/department' link='/addDepartment' button="Doctor"/>
                </div>
            </div>
    </div>
  )
}

export default ListDepartment