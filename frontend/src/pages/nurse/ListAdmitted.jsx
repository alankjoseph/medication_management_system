import AdmittedPatients from "../../components/nurse/AdmittedPatients";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/nurse/Sidebar";
function ListAdmitted() {
  return (
    <div>
      <div>
        <Navbar title={"Nurse's"} />
      </div>
      <div className="flex">
        <Sidebar />

        <div className="p-10 w-full">
          <AdmittedPatients />
          
        </div>
      </div>
    </div>
  );
}

export default ListAdmitted