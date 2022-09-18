// import icon
// import reactIcon from '../../assets/icons/react.png'
// import vueIcon from '../../assets/icons/vue.png'
// import muiIcon from '../../assets/icons/mui.png'
// import htmlIcon from '../../assets/icons/html.png'
// import cssIcon from '../../assets/icons/css.png'
// import bootstrapIcon from '../../assets/icons/bootStrap.png'
// import nodeIcon from '../../assets/icons/node.png'
// import expressIcon from '../../assets/icons/express.png'
// import mongoIcon from '../../assets/icons/mongo.png'

// import gitIcon from '../../assets/icons/git.png'
// import figmaIcon from '../../assets/icons/figma.png'
// import fileZillaIcon from '../../assets/icons/filezilla.png'
// import vsCodeIcon from '../../assets/icons//vscode.png'
// import jiraIcon from '../../assets/icons/jira.png'

import {
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaNodeJs,
	FaGitAlt,
    FaJira
} from "react-icons/fa";
import {
	SiVuedotjs,
	SiMaterialui,
	SiExpress,
	SiMongodb,
	SiVisualstudio,
	SiFilezilla,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

// function returnElement(name) {
//     return (<name/>)
// }


export const skills = [
	[
		{ name: "React", icon: FaReact, type: "skill" },
		{ name: "Vue", icon: SiVuedotjs, type: "skill" },
		{ name: "Mui", icon: SiMaterialui, type: "skill" },
	],
	[
		{ name: "HTML", icon: FaHtml5, type: "skill" },
		{ name: "CSS", icon: FaCss3Alt, type: "skill" },
		{ name: "Bootstrap", icon: FaBootstrap, type: "skill" },
	],
	[
		{ name: "Node", icon: FaNodeJs, type: "skill" },
		{ name: "Express", icon: SiExpress, type: "skill" },
		{ name: "Mongo", icon: SiMongodb, type: "skill" },
	],
];

export const tools = [
	[
		{ name: "Git", icon: FaGitAlt , type: "tool" },
		{ name: "Figma", icon: CgFigma , type: "tool" },
		{ name: "Filezilla", icon: SiFilezilla , type: "tool" },
	],
	[
		{ name: "VSCode", icon: SiVisualstudio , type: "tool" },
		{ name: "Jira", icon: FaJira , type: "tool" },
	],
];