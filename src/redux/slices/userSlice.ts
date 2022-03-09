import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type AddressState = {
	country: string;
	city: string;
	street: string;
	num: number;
};
type UserData = {
	name: string;
	email: string | null;
	address: AddressState;
};

interface UserState {
	currentUser: UserData;
}

const initialState: UserState = {
	currentUser: { name: "", email: "", address: { country: "", city: "", street: "", num: 0 } },
};

// Workaround: cast state instead of declaring variable type
// const initialState = {
// 	value: 0
//   } as CounterState

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		// REGISTER_USER: (state: typeof initialState, action: PayloadAction<string>) => {
		// 	let registeredUserEmail = action.payload;

		// 	state.currentUser = { ...state.currentUser, email: registeredUserEmail };
		// },
		LOGIN_USER: (state: typeof initialState, action: PayloadAction<string | null>) => {
			let loggedUserEmail = action.payload;

			state.currentUser = { ...state.currentUser, email: loggedUserEmail };
		},

		SAVE_LOGGED_USER_NAME: (state: typeof initialState, action: PayloadAction<string>) => {
			let registeredUserName = action.payload;

			state.currentUser = { ...state.currentUser, name: registeredUserName };
		},
		LOGOUT_USER: (state: typeof initialState, action: PayloadAction<string>) => {
			state.currentUser = { name: action.payload, email: null, address: { country: "", city: "", street: "", num: 0 } };
		},
	},
});

export const toggleSignText = (state: RootState) => {
	if (!state.user.currentUser.email) {
		return "Sign In";
	} else {
		return "Sign Out";
	}
};
export const { LOGIN_USER, LOGOUT_USER, SAVE_LOGGED_USER_NAME } = userSlice.actions;
export default userSlice.reducer;
