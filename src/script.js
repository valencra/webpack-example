import data from "./data";
import text from "./text";
import { multiply } from "./math";

import "./styles/main.scss";
import prudenceImg from "./images/prudence.jpg";
import webpackImg from "./images/webpack.jpg";

const app = document.getElementById("app");
app.innerHTML = `
	<p>${text.greetings} ${data.location}</p>
	<p>3 * 3 = ${multiply(3, 3)}</p>
	<div><img src=${prudenceImg} alt="A cute dog"/></div>
	<div><img src=${webpackImg} alt="Webpack logo"/></div>
	`;

if (module.hot) {
	module.hot.accept();
}