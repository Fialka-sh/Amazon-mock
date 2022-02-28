import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Footer from "Components/footer/Footer";

import "../Styles/sign.css";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const LogInToAccount = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);

			if (user) {
				navigate("/");
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
					<h2>SignIn</h2>
					<label htmlFor='acountForm__form_emailInput'>
						<small>Email</small>
					</label>
					<input
						id='emailInput'
						className='acountForm__form_input'
						onBlur={(e) => {
							setEmail(e.target.value);
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
							setPassword(e.target.value);
						}}
						name='passwordInput'
						type='text'
					/>
					<button
						className='acountForm__btn btn'
						onClick={() => {
							LogInToAccount();
						}}
					>
						Sign In
					</button>
					<p className='pPolicy'>By signin-In I agree to Amazon's conditions of use and Privacy Notice</p>
					<div className='divider_txt'>
						<h5>New To Amazon</h5>
					</div>
					<button className='acountForm__btn create_acount_btn'>
						<Link to='/register'>Create your Account</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
