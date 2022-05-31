import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    emailaddress:""
  },
  reducers: {
    update: (state, action) => {
      state.emailaddress = action.payload.emailaddress;
    },
    remove: (state) => state = {}
  }
});

export const { update, remove } = userSlice.actions;

export default userSlice.reducer;