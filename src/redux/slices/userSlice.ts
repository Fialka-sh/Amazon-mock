import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
	currentUser: string | null;
}

const initialState: UserState = {
	currentUser: null,
};
// Workaround: cast state instead of declaring variable type
// const initialState = {
// 	value: 0
//   } as CounterState

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		REGISTER_USER: (state: typeof initialState, action: PayloadAction<string>) => {
			state.currentUser = action.payload;
		},
		LOGIN_USER: (state: typeof initialState, action: PayloadAction<string | null>) => {
			state.currentUser = action.payload;
		},
		LOGOUT_USER: (state: typeof initialState, action: PayloadAction<null>) => {
			state.currentUser = action.payload;
		},
	},
});

export const toggleSignText = (state: RootState) => {
	if (!state.user.currentUser) {
		return "Sign In";
	} else {
		return "Sign Out";
	}
};
export const { REGISTER_USER, LOGIN_USER, LOGOUT_USER } = userSlice.actions;
export default userSlice.reducer;
