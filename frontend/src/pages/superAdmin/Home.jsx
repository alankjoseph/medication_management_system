import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import Dashbord from "../../components/superAdmin/Dashbord";

function Home() {
    return (
        <div className="">
            <div>
                <Navbar title={"Super Admin's"}/>
            </div>
            <div className="flex ">
                <div className="">

                    <SideBar />
                </div>
                <div className="ml-20 mt-20 w-full ">
                    <Dashbord />
                </div>
            </div>
        </div>
    );
}

export default Home;
