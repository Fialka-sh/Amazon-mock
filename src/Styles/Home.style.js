import styled from "styled-components";

const StyledHome = styled.div`
	max-width: 1500px;
	margin: 0px auto;
	background-color: #cacdcf;
`;

export const StyledProductsContainer = styled.div`
	position: relative;
	top: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 10px;

	@media (max-width: 1000px) {
		top: 100px;
	}
`;

export default StyledHome;
