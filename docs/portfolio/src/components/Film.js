import ReactPlayer from 'react-player'
import FilmInformation from "./FilmInformation";


const Film = (film) => {
    let filmname = film.filmName;
    let description = film.description;

    const showInformation = () => {
        let filminformationName = document.getElementById("filmName").value;
        filminformationName.innerText = film.name;
        console.log("Film clicked")

    }

    // Make titles shorter
    if (filmname.length > 16) filmname = filmname.slice(0, 12) + "...";

    return (
        <div className="Film-Container" style={{alignContent: "center"}} onClick={showInformation}>
            <img className="Poster-Image"
                 src={require('../styles/posters/' + film.img)}
                 alt={film.alt}
                 style={{width: "15rem"}}
            />
            <h3>{filmname}</h3>
        </div>
    )
}

export default Film;