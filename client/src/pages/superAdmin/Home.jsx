import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Dashbord from "../../components/Dashbord";

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="flex">
                <SideBar />
                <div className="pl-20 pt-20 w-full">
                    <Dashbord />
                </div>
            </div>
        </div>
    );
}

export default Home;
