import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	margin: 0 auto 10px auto;
	padding: 6px 3px;
	background-color: rgb(255, 216, 20);
	font-size: 10px;
	font-weight: 300;

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
			width: 180px;
			border: none;
			padding: 5px;

			@media (max-width: 786px) {
				width: 100%;
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
		`}
`;

export default StyledButton;
