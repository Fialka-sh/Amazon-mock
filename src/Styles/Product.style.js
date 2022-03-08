import styled from "styled-components";

const StyledProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin: 10px;
	background-color: white;
	box-sizing: border-box;

	:hover {
		transform: scale(1.01);
		box-shadow: 0 0 5px 2px gray;
	}
`;
export default StyledProductContainer;

export const StyledProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 25%;
	padding: 15px;
	margin-bottom: 15px;

	p {
		margin-bottom: 5px;
	}

	@media screen and (max-width: 786px) {
		height: 40%;
		padding: 10px;
		margin-bottom: 0px;

		& > p {
			line-height: 1.5em;
			height: 1.5em;
			overflow: hidden;
			font-size: 16px;
		}
	}
`;
