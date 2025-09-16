import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"


const SocialMedia = () => {
    let icoSize = "3x"
    return (
        <div className={"SocialMedia-container"} id="SocialMedia">
            <h2>Social Media</h2>
            <hr/>
            <div className="link-container">
                <a className={"Github"} target={"_blank"}
                    href={"https://github.com/MrCake4"}><FontAwesomeIcon className={"icon"}
                                                                         icon={faGithub}
                                                                         size={icoSize}/></a>
                <a className={"LinkedIN"} target={"_blank"}
                   href={"https://www.linkedin.com/in/winston-reichelt-88a8522a8/"}><FontAwesomeIcon icon={faLinkedin}
                                                                                                     size={icoSize}/></a>
                <a className={"Youtube"} target={"_blank"}
                   href={"https://www.youtube.com/channel/UCtA3QjX9Ic70OhlpcA1QR2w"}><FontAwesomeIcon icon={faYoutube}
                                                                                                      size={icoSize}/></a>
                <a href="mailto:winstonjreichelt@gmail.com"><FontAwesomeIcon icon={faEnvelope} size={icoSize}/> </a>
            </div>
        </div>
    )
}

export default SocialMedia;