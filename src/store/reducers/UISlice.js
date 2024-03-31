import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: "UI",
    initialState: { isSidebarOpen: true, },
    reducers: {
        toggleSidebar: (_, action) => {
            return {
                isSidebarOpen: action.payload,
            };
        },
    },
});
export const { toggleSidebar } = UISlice.actions;
export default UISlice.reducer;