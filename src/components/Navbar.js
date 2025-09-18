const Navbar = () => {
    return (
        <div className="Navbar-Container" style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            position: 'sticky',
            top: "0",
            overflow: 'hidden',
            padding: '2rem',
            background: "#0b090a"
        }}>
            <a href={"#about"}>About me</a>
            <a href={"#work"}>Work</a>
            <a href={"#coding-projects"}>Coding Projects</a>
            {/* <a>Blog</a> */}
            <a href={"#SocialMedia"}>Socials</a>
        </div>
    )
}

export default Navbar;