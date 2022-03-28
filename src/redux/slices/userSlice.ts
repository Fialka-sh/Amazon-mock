import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type AddressState = {
	country: string;
	city: string;
	street: string;
	num: number;
};
type UserData = {
	name: string | null;
	email: string | null;
	address: AddressState;
};

interface UserState {
	currentUser: UserData;
}

const initialState: UserState = {
	currentUser: { name: "", email: "", address: { country: "", city: "", street: "", num: 0 } },
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		LOGIN_USER: (state: typeof initialState, action: PayloadAction<string | null>) => {
			let loggedUserEmail: string | null = action.payload;

			state.currentUser = { ...state.currentUser, name: loggedUserEmail, email: loggedUserEmail };
		},

		SAVE_LOGGED_USER_NAME: (state: typeof initialState, action: PayloadAction<string>) => {
			let registeredUserName: string = action.payload;

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
