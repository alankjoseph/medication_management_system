import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/superAdmin/SideBar";
import MyComponent from "../../components/superAdmin/DepartmentList";
import { BaseUrl } from "../../instance/constants";
function ListDepartment() {
  return (
    <div>
      <div>
        <Navbar title={"Super Admin's"} />
      </div>
      <div className="flex">
        <SideBar />
        <div className="p-10 w-full">
          <MyComponent
            title="Department List"
            api={`${BaseUrl}/api/superAdmin/department`}
            link="/addDepartment"
            button="Doctor"
          />
        </div>
      </div>
    </div>
  );
}

export default ListDepartment;
