import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import DrugForm from "../../components/superAdmin/DrugForm";
import { BaseUrl } from "../../instance/constants";
function AddDrug() {
  return (
    <div>
      <div>
        <Navbar title={"Super Admin's"} />
      </div>
      <div className="flex">
        <SideBar />
        <div className="p-10 w-full">
          <DrugForm
            title=" Drug"
            api={`${BaseUrl}/api/superAdmin/addDrug`}
          />
        </div>
      </div>
    </div>
  );
}

export default AddDrug;
