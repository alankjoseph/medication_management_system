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
import Table from "./pages/Table";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  const {admin} = useAuthContext()
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/superAdmin" element={<Login />} />
          <Route path="/home" element={<SuperAdminHome />} />
          <Route path="/listDoctors" element={<ListDoctors />} />
          <Route path="/listNurses" element={<ListNurse />} />
          <Route path="/listAdmins" element={<ListAdmin />} />
          <Route path="/listDepartment" element={<ListDepartment />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
          <Route path="/addNurse" element={<AddNurse />} />
          <Route path="/addAdmin" element={<AddAdmin />} />

          <Route path="/list" element={<Table />} />
          <Route path="/addDepartment" element={<AddDepartment />} />

          {/* admin */}
          <Route path="/adminHome" element={admin ? <AdminHome /> : <Navigate to={'/admin'} />} />
          <Route path="/addPatients" element={admin ? <AddPatient /> : <Navigate to={'/admin'} /> } />
          <Route path="/patients" element={admin ? <Patients /> : <Navigate to={'/admin'} />} />
          <Route path="/admin" element={!admin ? <AdminLogin /> : <Navigate to={'/adminHome'} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
