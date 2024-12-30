import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "user",
    email: "example@example.com",
    imageUrl: "",
    plan: "user",
  },

  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setId, setEmail, setImageUrl, setPlan } =
  counterSlice.actions;

export default counterSlice.reducer;
