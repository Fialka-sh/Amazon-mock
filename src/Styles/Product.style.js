import styled from "styled-components";

const StyledProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: ${(props) => props.width + "px"};
	flex-grow: ${(props) => props.grow};
	margin: 10px;
	background-color: white;
	box-sizing: border-box;

	:hover {
		transform: scale(1.01);
		box-shadow: 0 0 5px 0.5px gray;
	}
`;
export default StyledProductContainer;

export const StyledProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 120px;
	padding: 10px 15px 0px 15px;

	p {
		min-height: 1.7em;
		max-height: 3.2em;
		overflow: hidden;
		line-height: 1.5em;
	}
	span {
		margin-top: 2px;
	}

	@media screen and (max-width: 786px) {
		height: 40%;
		margin-bottom: 0px;
		padding: 10px;

		& > p {
			height: 1.5em;
			overflow: hidden;
			line-height: 1.5em;
			font-size: 16px;
		}
	}
`;
