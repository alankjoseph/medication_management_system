import UpdatePatient from "../../components/nurse/UpdatePatient";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/nurse/Sidebar";

function UpdatePatientDetails() {
  return (
    <div>
      <div>
        <Navbar title={"Nurse's"} />
      </div>
      <div className="flex">
        <Sidebar />

        <div className="p-10 w-full">
          <UpdatePatient />
          
        </div>
      </div>
    </div>
  )
}

export default UpdatePatientDetails