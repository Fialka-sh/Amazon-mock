import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
	},
	reducers: {
		REGISTER_USER: (state = this.initialState, action) => {
			let newUser = action.payload;

			state.currentUser = newUser;
		},
		LOGIN_USER: (state = this.initialState, action) => {
			let user = action.payload;

			state.currentUser = user;
		},
		LOGOUT_USER: (state = this.initialState, action) => {
			state.currentUser = action.payload;
		},
	},
});

export const toggleSignText = (state) => {
	if (!state.user.currentUser) {
		return "Sign In";
	} else {
		return "Sign Out";
	}
};
export const { REGISTER_USER, LOGIN_USER, LOGOUT_USER } = userSlice.actions;
export default userSlice.reducer;
