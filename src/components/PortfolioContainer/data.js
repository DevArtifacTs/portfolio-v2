// import image
import exeractImage from "../../assets/images/exeract.png";
import reactWeatherImage from "../../assets/images/react-weather.png";
import vueWeatherImage from "../../assets/images/vue-weather.png";
import muiSocialImage from "../../assets/images/mui-social-app.png";
// import formValidationImage from "../../assets/images/form-validation.png";
// import freeCodeCampPortImage from "../../assets/images/free-code-camp-port.png";
// import nftCardImage from "../../assets/images/nft.png";

import {
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaNodeJs,
} from "react-icons/fa";
import {
	SiVuedotjs,
	SiMaterialui,
	SiExpress,
	SiMongodb,
} from "react-icons/si";

export const projects = [
	[
		{
			name: "Exeract App.",
			img: exeractImage,
			caption:
				"This app is allowed you to record your exercise activity like a diary of your exercise",
			stacks: [FaReact, FaNodeJs, SiExpress, SiMongodb],
			link: "https://activity-app-crud.vercel.app/",
			tag: "#CRUD",
		},
		{
			name: "React Weather App.",
			img: reactWeatherImage,
			caption:
				"This app is allowed you to see the weather in your city. Using Open weather API and axios to get the weather data.",
			stacks: [FaReact, FaHtml5, FaCss3Alt],
			link: "https://react-weather-ew3gu1pv3-devartifacts.vercel.app/",
			tag: "#API",
		},
		{
			name: "MUI Social App.",
			img: muiSocialImage,
			caption: "Social application interface mocking up using MUI",
			stacks: [FaReact, FaHtml5, FaCss3Alt, SiMaterialui],
			link: "https://mui-social-app-ui.vercel.app/",
			tag: "#UI",
		},
	],
	[
		{
			name: "Vue Weather App.",
			img: vueWeatherImage,
			caption:
				"This app is allowed you to see the weather in your city. Using Open weather API and axios to get the weather data.",
			stacks: [SiVuedotjs, FaHtml5, FaCss3Alt],
			link: "https://vue-weather-app-gilt.vercel.app/",
			tag: "#API",
		},
	],
];
