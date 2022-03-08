import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

import Footer from "../Components/footer/Footer";

import "../Styles/sign.css";
import StyledAccountFormButton from "../Styles/Button.style";
import StyledInput from "../Styles/Input.style";
import StyledAccountContainer, { StyledRegisterDivider, StyledFormContainer } from "../Styles/AccountForm.style";
import { StyledAccountImage } from "../Styles/Image.style";

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return String(error);
}

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

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

			if (user) {
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
				{/* <div className='acountFormContainer'> */}
				{/* <div className='acountForm centerIt'> */}

				<StyledAccountImage>
					{/* <div className='acountForm__header'> */}
					<img
						className='acountForm__header_img'
						src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
						alt='amazon logo'
					/>
					{/* </div> */}
				</StyledAccountImage>

				<StyledFormContainer>
					{/* <div className='acountForm__form'> */}
					<h2>Create account</h2>

					<label htmlFor='emailInput'>
						<small>Email</small>
					</label>
					<StyledInput
						id='emailInput'
						// className='acountForm__form_input'
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
						// className='acountForm__form_input'
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
						// className='acountForm__form_input'
						onBlur={(e: React.FormEvent<HTMLInputElement>) => {
							checkRePassword(e.currentTarget.value);
						}}
						name='rePasswordInput'
						type='text'
					></StyledInput>
					<StyledAccountFormButton
						acountFormButton
						// className='acountForm__btn'
						onClick={() => createAcount()}
						type='button'
					>
						Create
					</StyledAccountFormButton>

					<p
					// className='pPolicy'
					>
						By creating an account, you agree to Amazon's conditions of use and Privacy Notice
					</p>

					<StyledRegisterDivider>
						{/* <div className='divider_txt'> */}

						{/* </div> */}
					</StyledRegisterDivider>

					{/* <div className='register__divider_txt'></div> */}

					<p
					// className='pGoToSignIn'
					>
						Already have an account? <Link to='/login'>Sign-in</Link>
					</p>

					{/* </div> */}
					{/* </div> */}
				</StyledFormContainer>
				<Footer />
				{/* </div> */}
			</StyledAccountContainer>
		</StyledAccountContainer>
	);
}
