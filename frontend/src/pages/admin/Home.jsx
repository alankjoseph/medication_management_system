import React from "react";
import Dashbord from "../../components/superAdmin/Dashbord";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/admin/Sidebar";
function Home() {
    return (
        <div>
            <div className=" w-full">
                <Navbar title={"Admin's"} />
            </div>
            <div className="flex ">
                <div className="">
                    <SideBar />
                </div>
                <div className="ml-20 mt-20 w-full">
                    <Dashbord title="Admin's"/>
                </div>
            </div>
        </div>
    );
}

export default Home;
