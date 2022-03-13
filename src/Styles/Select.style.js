import styled from "styled-components";

const StyledQuantitySelect = styled.select`
	width: 40px;
	margin-right: 10px;
	border-radius: 5px;
	border-color: rgb(212, 205, 205);
	padding: 1px;
	background-color: rgb(248, 247, 242);
	box-shadow: 0px 2px 3px gray;
`;
export const StyledSearchSelect = styled.select`
	width: 100px;
	transform: scale(1.37);
	border-top: 1px solid black;
	border-right: none;
	border-radius: 4px 0px 0px 4px;
	padding: 4.8px 3px;
	color: black;
	font-size: 12px;

	@media screen and (max-width: 786px) {
		transform: scale(1.26);
		border: none;
	}
`;

export default StyledQuantitySelect;
