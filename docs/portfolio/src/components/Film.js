import ReactPlayer from 'react-player'
import FilmInformation from "./FilmInformation";


const Film = (film) => {
    let filmName = film.filmName;
    let description = film.description;
    let director = film.director;
    let dop = film.dop;
    let production = film.production;
    let yop = film.yop;
    let filmID = film.filmID;
    let link = film.link;

    const showInformation = () => {
        console.log("Film clicked " + link)

        let videoFrame = document.getElementById("videoFrame");
        let filmNameDisplay = document.getElementById("filmName")
        let filmInformationContainer = document.getElementById("FilmInformationContainer");
        let filmDescription = document.getElementById("description");
        let filmDirector = document.getElementById("directorText");
        let filmProduction = document.getElementById("productionText");
        let filmDop = document.getElementById("dopText");
        let filmYop = document.getElementById("yopText");

        // set container to visible
        if (filmInformationContainer.hidden) {
            filmInformationContainer.style.visibility = "visible";
            filmInformationContainer.hidden = false;
        }

        // replace values of tags in FilmInformation.js
        videoFrame.src = link;
        filmNameDisplay.innerText = filmName;
        filmDescription.innerText = description;
        filmDirector.innerText = director;
        filmDop.innerText = dop;
        filmYop.innerText = yop;
        filmProduction.innerText = production;

        // check if video frame has a src
        console.log(videoFrame.src);
        if(videoFrame.src == "http://localhost:3000/null") {videoFrame.hidden=true}
        else {videoFrame.hidden=false}

        filmInformationContainer.scrollIntoView({ behavior: "smooth" });
    }

    // Make titles shorter
    let filmNameDisplay = filmName;
    if (filmName.length > 16) filmNameDisplay = filmName.slice(0, 12) + "...";

    return (
        <div className="Film-Container" style={{alignContent: "center"}} onClick={showInformation}>
            <img className="Poster-Image"
                 src={require('../styles/posters/' + film.img)}
                 alt={film.alt}
                 style={{width: "15rem"}}
            />
            <h3>{filmNameDisplay}</h3>
        </div>
    )
}

export default Film;