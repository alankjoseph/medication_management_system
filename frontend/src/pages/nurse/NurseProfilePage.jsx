import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/nurse/Sidebar";
import NurseProfile from "../../components/nurse/NurseProfile";

function NurseProfilePage() {
  return (
    <div>
      <div>
        <Navbar title={"Nurse's"} />
      </div>
      <div className="flex">
        <Sidebar />

        <div className="p-10 w-full">
          <NurseProfile />
        </div>
      </div>
    </div>
  );
}

export default NurseProfilePage;
