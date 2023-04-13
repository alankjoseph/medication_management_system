import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/doctor/SideBar'
import { useAuthContext } from '../../hooks/admin/useAuthContext'
import Dashboard from '../../components/doctor/Dashboard'
function HomeDoctor() {
  const { doctor } = useAuthContext()
  
  return (
    <div>
      <div className=" w-full">
        <Navbar title={ "Doctor's"} />
      </div>
      <div className='flex h-screen'>
        <div >
          <SideBar/>
        </div>
        <div className="ml-20 mt-20 w-full">
          
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default HomeDoctor