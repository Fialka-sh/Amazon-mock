import styled from "styled-components";

const StyledQuantitySelect = styled.select`
	width: 55px;
	margin: 10px 0px;
	/* margin-right: 10px; */
	border-radius: 5px;
	border-color: rgb(212, 205, 205);
	padding: 3px;
	background-color: rgb(248, 247, 242);
	box-shadow: 0px 2px 3px gray;
	font-size: 10px;
`;

export const StyledSearchSelect = styled.select`
	display: none;

	@media screen and (min-width: 786px) {
		z-index: 1;
		display: block;
		margin-right: -6px;
		border-left: #f3f3f3;
		border-top: #f3f3f3;
		border-bottom: #f3f3f3;
		border-radius: 4px 0px 0px 4px;
		padding: 6.7px 3px;
		background-color: #f3f3f3;
		color: black;
		font-size: 12px;

		:hover {
			background-color: #dadada;
			border-left: #dadada;
			border-top: #dadada;
			border-bottom: #dadada;
		}
	}
`;

export default StyledQuantitySelect;
