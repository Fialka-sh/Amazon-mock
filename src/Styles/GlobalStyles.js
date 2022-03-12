import { createGlobalStyle } from "styled-components";

const GlobleStyles = createGlobalStyle`
	
	* {
		box-sizing: border-box;
		margin: 0px;
			padding: 0px;

	}

	body {
		overflow: visible;
		width: 100%;
		background-color:#efecef;
		font-family: "Amazon Ember", Arial, sans-serif;

	}
	.centerIt {
		display: flex;
		justify-content: center;
		align-items: center;
	}


`;
export { GlobleStyles };
