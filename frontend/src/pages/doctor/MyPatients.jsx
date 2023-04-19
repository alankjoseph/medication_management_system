import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/doctor/SideBar'
import Mypatients from '../../components/doctor/Mypatients'

function MyPatients() {
  
  return (
    <div>
      <div className=" w-full">
        <Navbar title={ "Doctor's"} />
      </div>
      <div className='flex h-screen'>
        <div >
          <SideBar/>
        </div>
        <div className="p-10 w-full">
          
          <Mypatients/>
        </div>
      </div>
    </div>
  )
}

export default MyPatients