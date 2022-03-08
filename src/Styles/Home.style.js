import styled from "styled-components";

const StyledHome = styled.div`
	max-width: 1500px;
	margin: 0px auto;
`;

const StyledProductsContainer = styled.div`
	position: relative;
`;

const StyledRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 350px;
	margin: 15px 10px;

	@media (max-width: 786px) {
		height: 250px;
		margin: 15px 10px;
	}
`;

export default StyledHome;
export { StyledProductsContainer, StyledRow };
