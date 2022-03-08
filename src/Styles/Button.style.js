import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	background-color: rgb(255, 216, 20);
	margin: 0 auto 10px auto;
	padding: 6px 3px;
	font-size: 10px;
	font-weight: 300;

	${(props) =>
		props.acountFormButton &&
		css`
			width: 260px;
			border: 1px solid rgb(211, 210, 210);
			margin-bottom: 15px;
			padding: 5px;
		`}
	${(props) =>
		props.createAccountButton &&
		css`
			width: 260px;
			background-color: rgb(241, 238, 228);
			border: 0.5px solid lightgray;
		`}
		
	${(props) =>
		props.checkoutButton &&
		css`
			width: 180px;
			padding: 5px;
			border: none;

			@media (max-width: 786px) {
				width: 100%;
				padding: 5px;
				border: none;
			}
		`}
		${(props) =>
		props.removeProductButton &&
		css`
			background-color: transparent;
			margin: 0px;
			border: none;
			text-decoration: underline;
			color: rgb(22, 125, 144);
			font-size: 10px;
		`}
`;

export default StyledButton;
