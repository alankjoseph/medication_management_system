import { useState } from "react";
import { useAuthContext } from "../admin/useAuthContext"; 
import axios from '../../instance/axios';
export const useDoctorLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.post('/api/doctor/doctorLogin', { email, password })
      const json = response.data
      // save the user to the local storage
      localStorage.setItem('doctor', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'DOCTORLOGIN', payload: json })

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error.response.data.error)
    }
  }
  return {login, isLoading, error}
}