import styled from "styled-components";

export const StyledCategoryPopUp = styled.div`
	z-index: 5;
	position: absolute;
	top: 0px;
	display: ${(props) => props.display};
	width: 80vw;
	height: 100vh;
	overflow: scroll;
	background-color: #efecef;

	:before {
		content: "";
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: black;
		opacity: 0.9;
	}

	h3 {
		background-color: white;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
	}
`;

export const StyledCategoryPopUpClose = styled.div`
	cursor: pointer;
	position: fixed;
	top: 20px;
	left: 90%;
	color: white;
	font-size: larger;
`;

export const StyledCategoryPopUpHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 15%;
	padding: 10px;
	background: #131921;
	color: white;

	h2 {
		font-weight: 300;
	}
`;

export const StyledCategoryPopUpBody = styled.div`
	border-top: 5px solid lightgray;
	background-color: white;
	line-height: 2.5rem;
	font-size: 12px;
	p {
		cursor: pointer;
		padding: 10px 10px 15px 10px;
	}
	p:hover,
	p:active {
		background-color: lightgray;
	}
`;

/* display: ${(props) => props.display}; */
