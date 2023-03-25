import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Dashbord from "../../components/Dashbord";

function Home() {
    return (
        <div>
            <div>
                <Navbar title={"Super Admin's"}/>
            </div>
            <div className="flex">
                <SideBar />
                <div className="ml-20 mt-20 w-full">
                    <Dashbord />
                </div>
            </div>
        </div>
    );
}

export default Home;
