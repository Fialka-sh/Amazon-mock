import styled from "styled-components";

export const StyledCategoryPopUp = styled.div`
	z-index: 200;
	position: absolute;
	top: 0px;
	display: ${(props) => props.display};
	width: 80vw;
	height: 100vh;
	border: 1px solid;
	overflow: scroll;
	background-color: #efecef;
	animation: showFromLeft 0.5s;

	:before {
		content: "";
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: black;
		opacity: 0.7;
	}

	h3 {
		background-color: white;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
	}
	@keyframes showFromLeft {
		0% {
			left: -80vw;
		}
		100% {
			left: 0px;
		}
	}
`;

export const StyledCategoryPopUpClose = styled.div`
	cursor: pointer;
	position: absolute;
	top: 30px;
	left: 90%;
	color: white;
	font-size: larger;
`;

export const StyledCategoryPopUpHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 120px;
	padding: 15px;
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
		padding: 10px 10px 5px 15px;
	}
	p:hover,
	p:active {
		background-color: lightgray;
	}
`;

export const StyledSearchAreaPopUp = styled.div`
	display: ${(props) => props.display};
	width: 70vw;
	height: 40vh;
	border-bottom: 3px solid rgb(35, 47, 62);
	border-radius: 0px 0px 6px 6px;
	background-color: white;
	overflow: scroll;

	:before {
		content: "";
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: black;
		opacity: 0.7;
	}
	p {
		color: gray;
		padding: 10px 0px 10px 15px;
		font-size: 14px;
		font-weight: bold;
		:hover {
			text-decoration: underline;
			color: rgb(35, 47, 62);
		}
	}
	@media screen and (min-width: 786px) {
		position: absolute;
		top: 45px;
		left: 190px;
		width: 350px;
		margin: 0 auto;
	}
`;
