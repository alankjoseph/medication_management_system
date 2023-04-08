import { createContext, useReducer, useEffect } from "react";
export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { admin: action.payload }
        case 'LOGOUT':
            return { admin: null }
        case 'SUPERLOGIN':
            return { superAdmin: action.payload }
        case 'SUPERLOGOUT':
            return { superAdmin: null }
        case 'DOCTORLOGIN':
            return { doctor: action.payload }
        case 'DOCTORLOGOUT':
            return { doctor: null }
        default :
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        admin: null,
        superAdmin: null,
        doctor: null,
    })
    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('admin'))
        const superAdmin = JSON.parse(localStorage.getItem('superAdmin'))
        const doctor = JSON.parse(localStorage.getItem('doctor'))
        if (admin) {
            dispatch({ type: 'LOGIN', payload: admin })
        }
        if (superAdmin) {
            dispatch({type:'SUPERLOGIN', payload:superAdmin})
        }
        if (doctor) {
            dispatch({type:'DOCTORLOGIN', payload:superAdmin})
        }
        
    },[])
    console.log('AuthContext state', state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}