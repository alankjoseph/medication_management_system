
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import SuperAdminHome from './pages/superAdmin/Home';
import ListDoctors from './pages/superAdmin/ListDoctors';
import ListNurse from './pages/superAdmin/ListNurse';
import ListAdmin from './pages/superAdmin/ListAdmin';
import AddDoctor from './pages/superAdmin/AddDoctor';
import AddNurse from './pages/superAdmin/AddNurse';
import AddDepartment from './pages/superAdmin/AddDepartment';
import ListDepartment from './pages/superAdmin/ListDepartment';
import AddAdmin from './pages/superAdmin/AddAdmin';
import AddPatient from './pages/admin/AddPatients';
import AdminHome from './pages/admin/Home';
import Patients from './pages/admin/Patients';
import Table from './pages/Table';

function App() {
 

  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <SuperAdminHome /> } />
            <Route path="/listDoctors" element={ <ListDoctors /> } />
            <Route path="/listNurses" element={ <ListNurse /> } />
            <Route path="/listAdmins" element={ <ListAdmin /> } />
            <Route path="/listDepartment" element={ <ListDepartment /> } />
            <Route path="/addDoctor" element={ <AddDoctor /> } />
            <Route path="/addNurse" element={ <AddNurse /> } />
            <Route path="/addAdmin" element={ <AddAdmin /> } />
            
            <Route path="/list" element={ <Table /> } />
            <Route path="/addDepartment" element={ <AddDepartment /> } />

            {/* admin */}
            <Route path="/adminHome" element={ < AdminHome/> } />
            <Route path="/addPatients" element={ < AddPatient/> } />
            <Route path="/patients" element={ < Patients/> } />


          </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default App
