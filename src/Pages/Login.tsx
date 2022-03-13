import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Footer from "../Components/footer/Footer";

import StyledButton from "../Styles/Button.style";
import StyledAccountContainer, { StyledLoginDivider, StyledFormContainer } from "../Styles/AccountForm.style";
import StyledInput from "../Styles/Input.style";
import { StyledAccountImage } from "../Styles/Image.style";

function getErrorMessage(error: unknown) {
	if (error instanceof Error) {
		return error.message;
	}
	return String(error);
}
export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const LogInToAccount = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			if (user) {
				navigate("/");
			}
		} catch (error) {
			console.log({ message: getErrorMessage(error) });
			alert("message: Plese, First create your account");
			navigate("/register");
		}
	};
	return (
		<StyledAccountContainer>
			<StyledAccountContainer acountForm>
				<StyledAccountImage>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='amazon logo' />
				</StyledAccountImage>

				<StyledFormContainer>
					<h2>SignIn</h2>
					<label htmlFor='acountForm__form_emailInput'>
						<small>Email</small>
					</label>

					<StyledInput
						id='emailInput'
						onBlur={(e: React.FormEvent<HTMLInputElement>) => {
							setEmail(e.currentTarget.value);
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
							setPassword(e.currentTarget.value);
						}}
						name='passwordInput'
						type='text'
					></StyledInput>
					<StyledButton
						acountFormButton
						onClick={() => {
							LogInToAccount();
						}}
						type='button'
					>
						Sign In
					</StyledButton>

					<p>By signin-In I agree to Amazon's conditions of use and Privacy Notice</p>

					<StyledLoginDivider>
						<h5>New To Amazon</h5>
					</StyledLoginDivider>
					<StyledButton createAccountButton>
						<Link to='/register'>Create your Account</Link>
					</StyledButton>
				</StyledFormContainer>

				<Footer />
			</StyledAccountContainer>
		</StyledAccountContainer>
	);
}
