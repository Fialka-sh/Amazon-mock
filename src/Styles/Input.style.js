import styled, { css } from "styled-components";

const StyledInput = styled.input`
	width: 260px;
	margin-bottom: 10px;
	border: 1px solid gray;
	border-radius: 3px;
	padding: 5px;
	box-sizing: border-box;
	outline: none;

	// ??
	&:placeholder {
		font-size: 11px;
		color: rgb(165, 160, 160);
	}

	${(props) =>
		props.searchInput &&
		css`
			width: 100%;
			margin-bottom: 0px;
			border: none;
			border-radius: 5px 0px 0px 5px;
			padding: 10px 10px;

			@media (max-width: 786px) {
				width: 85%;
				& {
					padding: 8px;
				}
			}
		`}
`;

export default StyledInput;
