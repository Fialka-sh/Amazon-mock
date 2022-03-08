import styled from "styled-components";

const StyledProductImage = styled.div`
	height: 51%;
	& > img {
		width: 100%;
		height: 150px;
		max-height: 200px;
		object-fit: contain;
	}

	@media screen and (max-width: 786px) {
		height: 41%;

		& > img {
			max-height: 80px;
		}
	}
`;

export default StyledProductImage;

export const StyledProductInCartImage = styled.div`
	margin: 10px;

	& > img {
		width: 120px;
		height: 120px;
		object-fit: contain;
	}
`;

export const StyledAccountImage = styled.div`
	& > img {
		width: 100px;
		height: 60px;
		object-fit: contain;
	}
`;
