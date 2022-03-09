import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

import Footer from "../Components/footer/Footer";

import { useAppDispatch } from "../hooks";
import { SAVE_LOGGED_USER_NAME } from "../redux/slices/userSlice";

import StyledAccountFormButton from "../Styles/Button.style";
import StyledInput from "../Styles/Input.style";
import StyledAccountContainer, { StyledRegisterDivider, StyledFormContainer } from "../Styles/AccountForm.style";
import { StyledAccountImage } from "../Styles/Image.style";

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return String(error);
}

export default function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const saveName = (value: string) => {
		setName(value);
	};
	const checkEmail = (value: string) => {
		setEmail(value);
	};
	const checkPassword = (value: string) => {
		let passwordEnterd: string = value;
		// if (passwordEnterd.length === 6) {
		setPassword(passwordEnterd);
		// }
	};
	const checkRePassword = (value: string) => {
		let rePassword: string = value;

		if (password === "") {
			console.log("no password");
			// alert("please enter password first");
		} else if (password !== rePassword) {
			console.log("no match");
			// alert("The password aren't the same");
		}
	};

	const createAcount = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			dispatch(SAVE_LOGGED_USER_NAME(name));

			if (user) {
				dispatch(SAVE_LOGGED_USER_NAME(""));
				signOut(auth);
				navigate("/login");
			}
		} catch (error) {
			alert({ message: getErrorMessage(error) });
		}
	};

	return (
		<StyledAccountContainer>
			<StyledAccountContainer acountForm>
				<StyledAccountImage>
					<img
						className='acountForm__header_img'
						src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
						alt='amazon logo'
					/>
				</StyledAccountImage>

				<StyledFormContainer>
					<h2>Create account</h2>

					<label htmlFor='nameInput'>
						<small>First Name</small>
					</label>
					<StyledInput
						id='nameInput'
						onBlur={(e: React.FormEvent<HTMLInputElement>) => {
							saveName(e.currentTarget.value);
						}}
						name='emailInput'
						type='text'
					></StyledInput>
					<label htmlFor='emailInput'>
						<small>Email</small>
					</label>
					<StyledInput
						id='emailInput'
						onBlur={(e: React.FormEvent<HTMLInputElement>) => {
							checkEmail(e.currentTarget.value);
						}}
						name='emailInput'
						type='text'
					></StyledInput>

					<label htmlFor='passwordInput'>
						<small>Password</small>
					</label>

					<StyledInput
						id='passwordInput'
						onBlur={(e: React.FormEvent<HTMLInputElement>) => {
							checkPassword(e.currentTarget.value);
						}}
						name='passwordInput'
						type='text'
						placeholder='At least 6 characters'
					></StyledInput>

					<label htmlFor='rePasswordInput'>
						<small>Re-enter password</small>
					</label>

					<StyledInput
						id='rePasswordInput'
						onBlur={(e: React.FormEvent<HTMLInputElement>) => {
							checkRePassword(e.currentTarget.value);
						}}
						name='rePasswordInput'
						type='text'
					></StyledInput>
					<StyledAccountFormButton acountFormButton onClick={() => createAcount()} type='button'>
						Create
					</StyledAccountFormButton>

					<p>By creating an account, you agree to Amazon's conditions of use and Privacy Notice</p>

					<StyledRegisterDivider></StyledRegisterDivider>

					<p>
						Already have an account? <Link to='/login'>Sign-in</Link>
					</p>
				</StyledFormContainer>
				<Footer />
			</StyledAccountContainer>
		</StyledAccountContainer>
	);
}
