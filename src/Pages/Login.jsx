import React from "react";

import "../Styles/login.css";

export default function Login() {
	return (
		<div className='loginContainer'>
			<div className='login centerIt'>
				<div className='login__header'>
					<img
						className='login__header_img'
						src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
						alt='amazon logo'
					/>
				</div>
				<div className='login__form'>
					<h2>SignIn</h2>
					<label htmlFor='login__form_emailInput'>
						<small>Email</small>
					</label>
					<input id='emailInput' name='emailInput' type='text' />
					<label htmlFor='passwordInput'>
						<small>Password</small>
					</label>
					<input id='passwordInput' name='passwordInput' type='text' />
					<button className='login__btn btn'>Sign In</button>
					<p className='pPolicy'>By signin-In I agree to Amazon's conditions of use and Privacy Notice</p>
					<div className='divider_txt'>
						<h5>New To Amazon</h5>
					</div>
					<button className='login__btn create_acount_btn'>Create your Account</button>
				</div>
				<div id='divHr'></div>
			</div>
		</div>
	);
}
