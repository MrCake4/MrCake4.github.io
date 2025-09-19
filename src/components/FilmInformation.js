const FilmInformation = (dataID) => {

    return (
        <div className="FilmInformation" id={"FilmInformationContainer"} hidden={true}>
            <iframe id={"videoFrame"} src={"https://www.youtube.com/embed/AmszTknSqzA "} width={"800rem"} hidden={true}
                    height={"600rem"} style={{border: "none", marginTop: "1.5rem", marginBottom: "1.5rem"}}
                    allowFullScreen={true}></iframe>
            <h3 id={"filmName"}>TITLE</h3>
            <div className={"videoFrameContainer"}>
                <div id={"descriptionContainer"}>
                    <p id={"description"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum.</p>
                </div>
                <div className={"makeOfDescContainer"}>
                    <div id={"directorContainer"}>
                        <h4 className={"videoFrameh4"}>Director: </h4> <p className={"videoFrameText"} id={"directorText"}>PLACEHOLDER</p>
                    </div>
                    <div id={"dopContainer"}>
                        <h4 className={"videoFrameh4"}>DOP: </h4> <p className={"videoFrameText"} id={"dopText"}>PLACEHOLDER</p>
                    </div>
                    <div id={"productionContainer"}>
                        <h4 className={"videoFrameh4"}>Production: </h4> <p
                        className={"videoFrameText"} id={"productionText"}>PLACEHOLDER</p>
                    </div>
                    <div id={"yopContainer"}>
                        <h4 className={"videoFrameh4"}>Year of production: </h4> <p
                        className={"videoFrameText"} id={"yopText"}>PLACEHOLDER</p>
                    </div>
                </div>
            </div>
            {/*
            <div className={"awards"}>
                <h4>Awards</h4>
            </div>
            */}
        </div>
    )
}

export default FilmInformation;