import ViewPatient from "../../components/nurse/ViewPatient";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/nurse/Sidebar";
import PrescribedDrugs from "../../components/nurse/PrescribedDrugs";
function PatientView() {
  return (
    <div>
      <div>
        <Navbar title={"Nurse's"} />
      </div>
      <div className="flex">
        <Sidebar />

        <div className="p-10 w-full">
          <div className="mb-4">
            <ViewPatient />
          </div>
          <div className="mt-14">
            <PrescribedDrugs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientView;
