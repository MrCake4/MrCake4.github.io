import logo from './logo.svg';
// Stylesheets
import './styles/App.css';
import './styles/VideoPlayer.css'
import './styles/mobile-stylesheet.css'

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import SocialMedia from "./components/SocialMedia"
import Film from './components/FilmInformation.js';
import FilmInformation from "./components/FilmInformation.js";

const App = () => {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Header></Header>
            <main>
                <About></About>
                <FilmInformation></FilmInformation>
                <Projects></Projects>
                <SocialMedia></SocialMedia>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;
