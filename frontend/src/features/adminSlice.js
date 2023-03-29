import { createSlice } from '@reduxjs/toolkit'
export const adminSlice = createSlice({
    name: "authAdmin",
    initialState: {
        admin: null, token:null
    },
    reducers: {
        login: (state, action) => {
            const {admin, accessToken} = action.payload
            state.admin = admin
            state.token = accessToken
        },
        logout: (state, action) => {
            state.admin = null,
            state.token = null
        },
    }

})

export const { login, logout } = adminSlice.actions
export const selectAdmin = (state) => state.authAdmin.admin
export const selectToken = (state) => state.authAdmin.token
export default adminSlice.reducer
