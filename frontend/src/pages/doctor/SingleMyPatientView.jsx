import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/doctor/SideBar'
import { useAuthContext } from '../../hooks/admin/useAuthContext'
import Dashboard from '../../components/doctor/Dashboard'
import Mypatients from '../../components/doctor/Mypatients'
import MyPatientView from '../../components/doctor/MyPatientView'
import MedicationTime from '../../components/doctor/MedicationTime'

function SingleMyPatientView() {
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
          <MyPatientView />
          <MedicationTime />
        </div>
      </div>
    </div>
  )
}

export default SingleMyPatientView