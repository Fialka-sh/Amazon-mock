import { createGlobalStyle } from "styled-components";

const GlobleStyles = createGlobalStyle`
* {
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
}

body {
	width: 100%;
	overflow: visible;
	background-color: rgb(234, 237, 237);
}
.centerIt {
	display: flex;
	justify-content: center;
	align-items: center;
}

`;
export { GlobleStyles };
