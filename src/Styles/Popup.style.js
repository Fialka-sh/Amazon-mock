import styled from "styled-components";

export const StyledCategoryPopUp = styled.div`
	z-index: 5;
	position: absolute;
	top: 1px;
	display: ${(props) => props.display};
	width: 250px;
	height: 350px;
	background-color: #efecef;

	h3 {
		background-color: white;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
	}
`;

export const StyledCategoryPopUpHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 30%;
	padding: 10px;
	background: #131921;
	color: white;
	p {
		float: right;
		color: white;
	}
	h2 {
		font-weight: 300;
	}
`;

export const StyledCategoryPopUpBody = styled.div`
	padding: 10px 10px 15px 10px;
	background-color: white;
	line-height: 1.5rem;
	font-size: 12px;
`;
