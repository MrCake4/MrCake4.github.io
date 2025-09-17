import ReactPlayer from 'react-player'
import FilmInformation from "./FilmInformation";


const Film = (film) => {
    let filmName = film.filmName;
    let description = film.description;
    let filmID = film.filmID;
    let link = film.link;

    const showInformation = () => {
        console.log("Film clicked " + filmID)

        let videoFrame = document.getElementById("videoFrame");
        videoFrame.src = {link};

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