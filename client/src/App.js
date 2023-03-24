import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import SuperAdminHome from './pages/superAdmin/Home';
import ListDoctors from './pages/superAdmin/ListDoctors';
import ListNurse from './pages/superAdmin/ListNurse';
import ListAdmin from './pages/superAdmin/ListAdmin';
import AddDoctor from './pages/superAdmin/AddDoctor';
import AddNurse from './pages/superAdmin/AddNurse';
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
            <Route path="/addDoctor" element={ <AddDoctor /> } />
            <Route path="/addNurse" element={ <AddNurse /> } />
          </Routes>
        
      </BrowserRouter>


    </div>

  );
}

export default App;
