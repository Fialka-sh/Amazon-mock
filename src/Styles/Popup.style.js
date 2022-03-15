import styled from "styled-components";

export const StyledCategoryPopUp = styled.div`
	z-index: 5;
	position: absolute;
	top: 0px;
	display: ${(props) => props.display};
	width: 250px;
	height: 350px;
	overflow: scroll;
	background-color: #efecef;
	:before {
		content: "";
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.7;
	}

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

/* display: ${(props) => props.display}; */
