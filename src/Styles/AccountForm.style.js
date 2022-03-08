import styled, { css } from "styled-components";

const StyledAccountContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-color: rgb(255, 255, 255);

	${(props) =>
		props.acountForm &&
		css`
			justify-content: flex-start;
			height: 60vh;
			min-height: 400px;
			margin-top: 15px;
		`}

	p {
		margin-bottom: 12px;
		font-size: 12px;
	}
`;
export default StyledAccountContainer;

export const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 300px;
	margin-bottom: 50px;
	border: 1px solid rgb(211, 210, 210);
	padding: 20px;

	h2 {
		margin-bottom: 15px;
		font-size: 28px;
		font-weight: 300;
	}
	@media (max-width: 786px) {
		margin-bottom: 30px;
		padding: 15px;
		h2 {
			margin-bottom: 10px;
		}
	}
`;

export const StyledLoginDivider = styled.div`
	width: 100%;
	text-align: center;
	h5 {
		display: inline-block;
		padding: 0 8px 0 7px;
		background-color: white;
		color: #767676;
		font-weight: 400;
	}
	&:after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		margin-bottom: 15px;
		margin-top: -8px;
		border-top: 2px solid #e7e7e7;
		background-color: transparent;
	}
`;

export const StyledRegisterDivider = styled.div`
	display: flex;
	justify-content: center;
	width: 105%;
	height: 3px;
	margin: 15px auto;
	background-color: aqua;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.03) 30px, transparent);

	&:after {
		display: block;
		height: 44px;
		width: 100%;
		background-color: transparent;
		background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
		content: "";
	}
`;
