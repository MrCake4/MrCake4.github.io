import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container" style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%"
        }}>
            <a target={"_blank"} href={"https://brainmade.org/"}>
                <img id={"brainMade"} src={require("../styles/img/white-logo.png")} alt={"Humanmade.org logo"}/>
            </a>
            <p id={"react"}>Website created with<br/><FontAwesomeIcon icon={faReact} size={"2x"}/></p>
            <img src={require("../styles/img/heart.png")} style={{width: "4rem"}} alt={"Ukraine heart"}/>
        </div>
    )
}

export default Footer;