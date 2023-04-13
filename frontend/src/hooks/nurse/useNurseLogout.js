import { useAuthContext } from "../admin/useAuthContext"; 

export const useNurseLogout = () => {
  const { dispatch } = useAuthContext()
  const logout = () => {
      localStorage.removeItem('nurse')
      dispatch({type: 'NURSELOGOUT'})
  }
  return {logout}
}