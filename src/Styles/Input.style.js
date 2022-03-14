import styled, { css } from "styled-components";

const StyledInput = styled.input`
	width: 260px;
	margin-bottom: 10px;
	border: 1px solid gray;
	border-radius: 3px;
	padding: 5px 15px;
	box-sizing: border-box;
	outline: none;

	${(props) =>
		props.searchInput &&
		css`
			width: 95%;
			height: 30px;
			margin-bottom: 0px;
			border-radius: 6px;
			padding: 10px 17px;
			color: gray;
		`}
`;

export default StyledInput;
