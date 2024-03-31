import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: { user: null, isAuthenticated: true, isLoading: false, },
    reducers: {
        setAuth: (state, action) => {
            return {
                user: action.payload.user,
                isAuthenticated: action.payload.isAuthenticated,
                isLoading: false,
            };
        },
        logout: () => {
            return {
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        }
    },
});
export const { setAuth, logout } = AuthSlice.actions;
export default AuthSlice.reducer;