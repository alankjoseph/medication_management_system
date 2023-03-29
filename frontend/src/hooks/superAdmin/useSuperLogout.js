import { useAuthContext } from "../admin/useAuthContext";

export const useSuperLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        localStorage.removeItem('superAdmin')
        dispatch({type: 'SUPERLOGOUT'})
    }
    return {logout}
}