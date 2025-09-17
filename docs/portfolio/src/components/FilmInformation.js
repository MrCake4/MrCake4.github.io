const FilmInformation = (dataID) => {

    return(
        <div className="FilmInformation">
            <iframe id={"videoFrame"} src={"https://www.youtube.com/embed/AmszTknSqzA "} width={"1000rem"} height={"600rem"} style={{border: "none"}}></iframe>
            <h3 id={"filmName"}>test</h3>
            <table>
                <tr>
                    <th>test</th>
                    <th>test</th>
                </tr>
                <tr>
                    <th>test</th>
                    <th>test</th>
                </tr>
            </table>
            <div className={"awards"}>
                <h4>Awards</h4>
            </div>
        </div>
    )
}

export default FilmInformation;