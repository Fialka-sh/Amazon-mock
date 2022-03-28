import styled, { css } from "styled-components";

const StyledButton = styled.button`
	width: 120px;
	border: none;
	border-radius: 10px;
	padding: 6px 25px;
	background-color: #f08804;
	color: black;
	font-size: 12px;

	${(props) =>
		props.showProductButton &&
		css`
			width: 150px;
			margin: 10px auto;

			:hover {
				transform: scale(1.05);
				background-color: #febd69;
			}
		`}

	${(props) =>
		props.addToCartButton &&
		css`
			background-color: #ebc129;
			margin: 10px auto;
			border-radius: 10px;

			:hover {
				transform: scale(1.05);
				background-color: #febd69;
			}

			@media (min-width: 786px) {
				width: 150px;
			}
		`}

	${(props) =>
		props.acountFormButton &&
		css`
			width: 260px;
			margin-bottom: 15px;
			border: 1px solid rgb(211, 210, 210);
			padding: 5px;
		`}

	${(props) =>
		props.createAccountButton &&
		css`
			width: 260px;
			border: 0.5px solid lightgray;
			background-color: rgb(241, 238, 228);
		`}

	${(props) =>
		props.checkoutButton &&
		css`
			width: 100%;
			margin-top: 0px;
			padding: 5px;

			@media (max-width: 786px) {
				border: none;
				padding: 5px;
			}
		`}
		
	${(props) =>
		props.removeProductButton &&
		css`
			margin: 0px;
			border: none;
			background-color: transparent;
			color: rgb(22, 125, 144);
			text-decoration: underline;
			font-size: 10px;
			padding-left: 0px;
		`}
`;

export default StyledButton;
