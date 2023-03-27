import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import MyComponent from "../../components/DepartmentList";
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
            api="http://localhost:4000/api/superAdmin/department"
            link="/addDepartment"
            button="Doctor"
          />
        </div>
      </div>
    </div>
  );
}

export default ListDepartment;
