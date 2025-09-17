import ReactPlayer from 'react-player'
import FilmInformation from "./FilmInformation";


const Film = (film) => {
    let filmName = film.filmName;
    let description = film.description;
    let filmID = film.filmID;
    let link = film.link;

    const showInformation = () => {
        console.log("Film clicked " + link)

        let videoFrame = document.getElementById("videoFrame");
        let filmNameDisplay = document.getElementById("filmName")
        let filmInformationContainer = document.getElementById("FilmInformationContainer");

        // set container to visible
        if (filmInformationContainer.hidden) filmInformationContainer.hidden = false;

        // replace values of tags in FilmInformation.js
        videoFrame.src = link;
        filmNameDisplay.innerText = filmName;

        videoFrame.scrollIntoView({ behavior: "smooth" });
    }

    // Make titles shorter
    if (filmName.length > 16) filmName = filmName.slice(0, 12) + "...";

    return (
        <div className="Film-Container" style={{alignContent: "center"}} onClick={showInformation}>
            <img className="Poster-Image"
                 src={require('../styles/posters/' + film.img)}
                 alt={film.alt}
                 style={{width: "15rem"}}
            />
            <h3>{filmName}</h3>
        </div>
    )
}

export default Film;