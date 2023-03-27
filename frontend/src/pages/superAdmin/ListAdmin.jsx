import React from 'react'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import List from "../../components/ListAdmin";
function ListAdmin() {
  return (
    <div>
        <div>
                <Navbar title={"Super Admin's"}/>
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