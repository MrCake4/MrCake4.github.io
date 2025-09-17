import react from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGit, faGithub, faHtml5, faJava, faPython} from "@fortawesome/free-brands-svg-icons";
import {faFilm, faImage} from "@fortawesome/free-solid-svg-icons";

const About = () => {
    let icoSize = "3x"


    return (
        <div className="About" id={"about"}>
            <h2>About me</h2>
            <hr/>
            <p>Hi there,<br/>
                My name is Winston and welcome to my website.<br/>
                I am a creative, collaborative film-maker who does not shy away from challenging tasks.
                Currently I am studying International Media and Computer Science at the University of Applied Sciences
                Berlin (HTW). The major covers all core aspects of computer science and also delves into special
                subjects like computer-graphics, web-development, image manipulation as well as 3D-design (modelling
                and texturing in Maya) and game development. I am eager to grow my knowledge and enhance skills.
                Follow me on my journey as I try to unite my two passions, programming and film-making.</p>
            <div className={"tech-stack"}>
                <h3>Tech Stack</h3>
                <ul>
                    <li className={"techIcon"}><FontAwesomeIcon icon={faHtml5} size={icoSize}/> <p>HTML, CSS, JS</p></li>
                    <li className={"techIcon"}><FontAwesomeIcon icon={faJava} size={icoSize}/> <p>JAVA</p></li>
                    <li className={"techIcon"}><FontAwesomeIcon icon={faGit} size={icoSize}/> <p>Git</p> </li>
                    <li className={"techIcon"}><img
                        src={require("../styles/icons/csharpico.png")}
                        alt={"C# Icon"}
                        style={{width: "3rem"}}
                    /><p>C#</p> </li>
                    <li className={"techIcon"}><FontAwesomeIcon icon={faPython} size={icoSize}/> <p>Python</p></li>
                    <li className={"techIcon"}><img
                        src={require("../styles/icons/drico.png")}
                        alt={"Davinci Resolve Icon"}
                        style={{width: "3rem"}}
                    /> <p>DaVinci Resolve</p></li>
                    <li className={"techIcon"}><img
                        src={require("../styles/icons/lrico.png")}
                        alt={"Photoshop Lightroom Icon"}
                        style={{width: "3rem"}}
                    /> <p>Photoshop Lightroom</p></li>
                </ul>
            </div>
            <div className={"techStack"}>
                <h3>Languages</h3>
                <ul style={{display:"flex", flexDirection:"row", alignItems:"end", justifyContent:"space-evenly"}}>
                    <li className={"techIcon"}>
                        <img src={require("../styles/icons/gerico.png")} alt={"German Flag"} className={"languageIcon"}/>
                        <p>Native</p>
                    </li>
                    <li className={"techIcon"}>
                        <img src={require("../styles/icons/engico.png")} alt={"German Flag"} className={"languageIcon"}/>
                        <p>Fluent</p>
                    </li>
                    <li className={"techIcon"}>
                        <img src={require("../styles/icons/espico.png")} alt={"German Flag"} className={"languageIcon"}/>
                        <p>A2</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;