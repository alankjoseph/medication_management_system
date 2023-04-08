import { useAuthContext } from "../admin/useAuthContext"; 

export const useDoctorLogout = () => {
  const { dispatch } = useAuthContext()
  const logout = () => {
      localStorage.removeItem('doctor')
      dispatch({type: 'DOCTORLOGOUT'})
  }
  return {logout}
}