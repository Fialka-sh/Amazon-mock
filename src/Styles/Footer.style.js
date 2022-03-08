import styled from "styled-components";

const StyledFooter = styled.div`
	div {
		display: flex;
		justify-content: center;
		width: 105%;
		height: 3px;
		background-color: aqua;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.03) 30px, transparent);
	}
	div::after {
		display: block;
		height: 44px;
		width: 100%;
		background-color: transparent;
		background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
		content: "";
	}
	p {
		margin: 20px auto;
		text-align: center;
		color: #767676;
		font-size: 14px;
	}
`;

export default StyledFooter;
