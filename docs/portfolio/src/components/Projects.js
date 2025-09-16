import Film from './Film.js';
import filmData from './FilmData'

const Projects = () => {
    return (
        <div className="Projects" id="work" style={{
            display: "flex",
            alignItems: "center",
            flexFlow: "column"
        }}>
            <h2>Work</h2>
            <hr/>
            <div className="projects-container"
                 style={{
                     display: "flex",
                     flexFlow: "row wrap",
                     justifyContent: "space-between",
                     width: "50%",
                 }}>
                <Film filmName={filmData.So89.name}
                      img="sommer89.jpg"
                      alt={"Poster Sommer '89"}/>
                <Film filmName={"Command Exit"}
                      img="commandExit.jpg"
                      alt={"PosterCommand Exit"}/>
                <Film filmName={"Müllschlucker"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"Charlies Funny Fucking World"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"Was ist Zeit?"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"Addicts"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"Einfach Cool bleiben"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"A Shorts Story"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"Reverse Turing"}
                      img={"placeholder.jpg"}/>
                <Film filmName={"Out of Sync"}
                      img={"placeholder.jpg"}/>            
            </div>
            <h2 id={"coding-projects"}>Coding Projects</h2>
            <hr/>
            <div className="coding-projects-container">
                <a href={"https://showtime.f4.htw-berlin.de/ss25/bachelor/b2-licht_und_schatten/"}
                   target={"_blank"}
                    style={{textDecoration: "none"}}
                >
                    <div className={"menu__link"}>
                        <div className={"code-project"}>
                            <h3>Dolly's House</h3>
                            <p className={"code-project-date"}>2025</p>
                        </div>
                    </div>
                </a>
                <a href={"https://github.com/MrCake4/RTX#"}
                   target={"_blank"}
                    style={{textDecoration: "none"}}
                >
                    <div className={"menu__link"}>
                        <div className={"code-project"}>
                            <h3>Ray Tracer</h3>
                            <p className={"code-project-date"}>2025</p>
                        </div>
                    </div>
                </a>
                <a href={"https://github.com/MrCake4/randomgifgenerator"}
                   target={"_blank"}
                   style={{textDecoration: "none"}}
                >
                    <div className={"menu__link"}>
                        <div className={"code-project"}>
                    <h3>Random GIF Generator</h3>
                            <p className={"code-project-date"}>2024</p></div></div></a>
                <a href={"https://github.com/MrCake4/rawditor"}
                   target={"_blank"}
                   style={{textDecoration: "none"}}
                >
                    <div className={"menu__link"}><div className={"code-project"}>
                    <h3>Rawditor</h3>
                    <p className={"code-project-date"}>2024</p></div></div></a>
            </div>
        </div>
    )
}


export default Projects;
