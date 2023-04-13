import { useState } from "react";
import { useAuthContext } from "../admin/useAuthContext"; 

export const useNurseLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    const response = await fetch('http://localhost:4000/api/nurse/nurseLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const json = await response.json()
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)

    }
    if (response.ok) {
      // save the user to the local storage
      localStorage.setItem('nurse', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'NURSELOGIN', payload: json })
      setIsLoading(false)


    }
  }
  return {login, isLoading, error}
}