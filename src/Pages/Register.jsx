import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

import Footer from "Components/footer/Footer";

import "../Styles/sign.css";

export default function Login() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const saveName = (e) => {
		setName(e.target.value);
		console.log(name);
	};
	const checkEmail = (e) => {
		setEmail(e.target.value);
	};
	const checkPassword = (e) => {
		let passwordEnterd = e.target.value;
		// if (passwordEnterd.length === 6) {
		setPassword(passwordEnterd);
		// }
	};
	const checkRePassword = (e) => {
		let rePassword = e.target.value;

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
			alert(error.message);
		}
	};

	return (
		<div className='acountFormContainer'>
			<div className='acountForm centerIt'>
				<div className='acountForm__header'>
					<img
						className='acountForm__header_img'
						src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
						alt='amazon logo'
					/>
				</div>
				<div className='acountForm__form'>
					<h2>Create account</h2>
					<label htmlFor='nameInput'>
						<small>Your name</small>
					</label>
					<input
						id='nameInput'
						className='acountForm__form_input'
						onBlur={(e) => {
							saveName(e);
						}}
						name='nameInput'
						type='text'
					/>

					<label htmlFor='emailInput'>
						<small>Email</small>
					</label>
					<input
						id='emailInput'
						className='acountForm__form_input'
						onBlur={(e) => {
							checkEmail(e);
						}}
						name='emailInput'
						type='text'
					/>

					<label htmlFor='passwordInput'>
						<small>Password</small>
					</label>
					<input
						id='passwordInput'
						className='acountForm__form_input'
						onBlur={(e) => {
							checkPassword(e);
						}}
						name='passwordInput'
						type='text'
						placeholder='At least 6 characters'
					/>

					<label htmlFor='rePasswordInput'>
						<small>Re-enter password</small>
					</label>
					<input
						id='rePasswordInput'
						className='acountForm__form_input'
						onBlur={(e) => {
							checkRePassword(e);
						}}
						name='rePasswordInput'
						type='text'
					/>

					<button className='acountForm__btn btn' onClick={() => createAcount()}>
						Create
					</button>

					<p className='pPolicy'>By creating an account, you agree to Amazon's conditions of use and Privacy Notice</p>

					<div className='register__divider_txt'></div>

					<p className='pGoToSignIn'>
						Already have an account? <Link to='/login'>Sign-in</Link>
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
}
