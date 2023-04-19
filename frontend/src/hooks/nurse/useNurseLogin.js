import { useState } from "react";
import { useAuthContext } from "../admin/useAuthContext"; 
import axios from '../../instance/axios';

export const useNurseLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.post('/api/nurse/nurseLogin', { email, password })
      const json = response.data

      // save the user to the local storage
      localStorage.setItem('nurse', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'NURSELOGIN', payload: json })

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error.response.data.error)
    }
  }

  return { login, isLoading, error }
}
