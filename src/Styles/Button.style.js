import styled, { css } from "styled-components";

const StyledButton = styled.button`
	width: 120px;
	border: none;
	border-radius: 10px;
	padding: 6px 25px;
	background-color: #f08804;
	font-size: 12px;

	${(props) =>
		props.addToCartButton &&
		css`
			color: black;
			margin: 10px auto;
			:active {
				color: black;
			}
			:hover {
				transform: scale(1.05);
				background-color: #febd69;
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
