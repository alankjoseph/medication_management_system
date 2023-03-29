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
import AddPatient from "./pages/admin/AddPatients";
import AdminHome from "./pages/admin/Home";
import Patients from "./pages/admin/Patients";
import PatientEdit from "./pages/admin/PatientEdit";
import Table from "./pages/Table";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  const {admin, superAdmin} = useAuthContext()
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/superAdmin" element={!superAdmin ? <Login />: <Navigate to="/home"/>} />
          <Route path="/home" element={superAdmin ? <SuperAdminHome /> : <Navigate to={'/superAdmin'} />} />
          <Route path="/listDoctors" element={superAdmin ? <ListDoctors />: <Navigate to="/superAdmin"/>} />
          <Route path="/listNurses" element={ superAdmin ? <ListNurse /> :<Navigate to="/superAdmin"/> } />
          <Route path="/listAdmins" element={ superAdmin ? <ListAdmin /> : <Navigate to="/superAdmin"/>} />
          <Route path="/listDepartment" element={superAdmin ? <ListDepartment />: <Navigate to="/superAdmin"/>} />
          <Route path="/addDoctor" element={superAdmin ? <AddDoctor /> : <Navigate to="/superAdmin"/>} />
          <Route path="/addNurse" element={superAdmin ? <AddNurse /> : <Navigate to="/superAdmin"/>} />
          <Route path="/addAdmin" element={superAdmin ? <AddAdmin />: <Navigate to="/superAdmin"/>} />

          <Route path="/list" element={<Table />} />
          <Route path="/addDepartment" element={<AddDepartment />} />

          {/* admin */}
          <Route path="/adminHome" element={admin ? <AdminHome /> : <Navigate to={'/admin'} />} />
          <Route path="/addPatients" element={admin ? <AddPatient /> : <Navigate to={'/admin'} /> } />
          <Route path="/patients" element={admin ? <Patients /> : <Navigate to={'/admin'} />} />
          <Route path="/admin" element={!admin ? <AdminLogin /> : <Navigate to={'/adminHome'} />} />
          <Route path="/patient/:id" element={admin ? <PatientEdit /> : <Navigate to={'/admin'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
