import React from 'react'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import List from "../../components/ListDoctor";
function ListAdmin() {
  return (
    <div>
        <div>
                <Navbar />
            </div>
            <div className="flex">
                <SideBar />
                <div className="p-10 w-full">
                    <List title="Admin's List" link='/addAdmin' button="Admin"/>
                </div>
            </div>
    </div>
  )
}

export default ListAdmin