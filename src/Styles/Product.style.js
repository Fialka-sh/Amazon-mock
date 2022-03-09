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
		box-shadow: 0 0 5px 0.5px gray;
	}
`;
export default StyledProductContainer;

export const StyledProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 25%;
	margin-bottom: 15px;
	padding: 15px;

	p {
		margin-bottom: 5px;
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
