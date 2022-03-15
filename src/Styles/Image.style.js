import styled from "styled-components";

const StyledProductImage = styled.div`
	height: 45%;
	margin-bottom: 9px;
	& > img {
		width: 100%;
		height: 150px;
		max-height: 200px;
		object-fit: contain;
	}

	@media screen and (max-width: 786px) {
		height: 41%;

		& > img {
			max-height: 120px;
		}
	}
`;

export const StyledProductInfoImage = styled.div`
	/* border: 1px solid green; */
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	& > img {
		object-fit: contain;
		width: 180px;
		height: 180px;
	}
	/* @media (max-width: 786px) {
		margin: 10px;
		& > img {
			width: 120px;
			height: 120px;
			object-fit: contain;
		}
	
	} */
`;

export const StyledProductInCartImage = styled.div`
	margin: 10px;

	& > img {
		width: 120px;
		height: 120px;
		object-fit: contain;
	}
	@media (max-width: 786px) {
		margin: 5px;
		& > img {
			width: 100px;
			height: 100px;
		}
	}
`;

export const StyledAccountImage = styled.div`
	& > img {
		width: 100px;
		height: 60px;
		object-fit: contain;
	}
`;

export default StyledProductImage;
