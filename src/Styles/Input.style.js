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
			width: 90%;
			margin: 1px 0px;
			padding: 10px 17px;
			color: gray;

			@media (max-width: 786px) {
				width: 65%;
				& {
					padding: 8.5px;
				}
			}
		`}
`;

export default StyledInput;
