import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/admin/useAuthContext";

import Login from "./pages/Login";
import SuperAdminHome from "./pages/superAdmin/Home";
import ListDoctors from "./pages/superAdmin/ListDoctors";
import ListNurse from "./pages/superAdmin/ListNurse";
import ListAdmin from "./pages/superAdmin/ListAdmin";
import AddDoctor from "./pages/superAdmin/AddDoctor";
import AddNurse from "./pages/superAdmin/AddNurse";
import AddDepartment from "./pages/superAdmin/AddDepartment";
import ListDepartment from "./pages/superAdmin/ListDepartment";
import AddAdmin from "./pages/superAdmin/AddAdmin";

// admin
import AddPatient from "./pages/admin/AddPatients";
import AdminHome from "./pages/admin/Home";
import Patients from "./pages/admin/Patients";
import PatientEdit from "./pages/admin/PatientEdit";
import AdminLogin from "./pages/admin/AdminLogin";
import AddDrug from "./pages/superAdmin/AddDrug";
import ListDrug from "./pages/superAdmin/ListDrug";

{/* doctor */ }
import LoginDoctor from "./pages/doctor/LoginDoctor";
import HomeDoctor from "./pages/doctor/HomeDoctor";
import Booking from "./pages/doctor/Booking";
import MainDoctor from "./pages/doctor/MainDoctor";
import MyPatients from "./pages/doctor/MyPatients";
import SingleMyPatientView from "./pages/doctor/SingleMyPatientView";
import MyProfile from "./pages/doctor/MyProfile";

{/* nurse */ }
import LoginNurse from "./pages/nurse/LoginNurse";
import ListAdmitted from "./pages/nurse/ListAdmitted";
import PatientView from "./pages/nurse/PatientView";
import UpdatePatientDetails from "./pages/nurse/UpdatePatientDetails";
import NurseProfilePage from "./pages/nurse/NurseProfilePage";






function App() {
  const { admin, superAdmin, doctor, nurse } = useAuthContext()
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* super Admin */}
          <Route path="/superAdmin" element={!superAdmin ? <Login />: <Navigate to="/home"/>} />
          <Route path="/home" element={superAdmin ? <SuperAdminHome /> : <Navigate to={'/superAdmin'} />} />
          <Route path="/listDoctors" element={superAdmin ? <ListDoctors />: <Navigate to="/superAdmin"/>} />
          <Route path="/listNurses" element={ superAdmin ? <ListNurse /> :<Navigate to="/superAdmin"/> } />
          <Route path="/listAdmins" element={ superAdmin ? <ListAdmin /> : <Navigate to="/superAdmin"/>} />
          <Route path="/listDepartment" element={superAdmin ? <ListDepartment />: <Navigate to="/superAdmin"/>} />
          <Route path="/addDoctor" element={superAdmin ? <AddDoctor /> : <Navigate to="/superAdmin"/>} />
          <Route path="/addNurse" element={superAdmin ? <AddNurse /> : <Navigate to="/superAdmin"/>} />
          <Route path="/addAdmin" element={superAdmin ? <AddAdmin />: <Navigate to="/superAdmin"/>} />
          <Route path="/addDepartment" element={superAdmin ? <AddDepartment /> : <Navigate to="/superAdmin"/>} />
          <Route path="/addDrug" element={<AddDrug />} />
          <Route path="/listDrugs" element={<ListDrug />} />
          
          {/* admin */}
          <Route path="/admin" element={!admin ? <AdminLogin /> : <Navigate to={'/adminHome'} />} />
          <Route path="/adminHome" element={admin ? <AdminHome /> : <Navigate to={'/admin'} />} />
          <Route path="/addPatients" element={admin ? <AddPatient /> : <Navigate to={'/admin'} /> } />
          <Route path="/patients" element={admin ? <Patients /> : <Navigate to={'/admin'} />} />
          <Route path="/patient/:id" element={admin ? <PatientEdit /> : <Navigate to={'/admin'} />} />

          {/* doctor */}
          <Route path="/" element={!doctor ? <LoginDoctor />: <Navigate to={'/doctorHome'}/>} />
          <Route path="/doctorHome" element={doctor ? <HomeDoctor /> : <Navigate to={'/'}/> } />
          <Route path="/booking" element={doctor ? <Booking />:  <Navigate to={'/'}/>} />
          <Route path="/doctorPatient/:id" element={doctor ? <MainDoctor /> : <Navigate to={'/'} />} />
          <Route path="/myPatinets" element={doctor ? <MyPatients /> : <Navigate to={'/'} />} />
          <Route path="/patientView/:id" element={doctor ?<SingleMyPatientView /> : <Navigate to={'/'} />}  />
          <Route path="/myProfile/" element={doctor ? <MyProfile/> : <Navigate to={'/'} />} />
          
          {/* nurse */}

          <Route path="/nurse" element={!nurse ?<LoginNurse /> : <Navigate to={'/admitedPatients'} /> } />
          <Route path="/admitedPatients" element={ nurse ? <ListAdmitted /> : <Navigate to={'/nurse'} /> } />
          <Route path="/viewDetails/:id" element={ nurse ? <PatientView /> :<Navigate to={'/nurse'}/> } />
          <Route path="/updatePatient/:id" element={nurse ? <UpdatePatientDetails /> : <Navigate to={'/nurse'} />} />
          <Route path="/nurseProfile" element={<NurseProfilePage/> } />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
