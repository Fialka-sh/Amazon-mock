import styled from "styled-components";

const StyledHome = styled.div`
	max-width: 1500px;
	margin: 0px auto;
`;

const StyledProductsContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 786px) {
		margin-top: 100px;
	}
`;

export default StyledHome;
export { StyledProductsContainer };
