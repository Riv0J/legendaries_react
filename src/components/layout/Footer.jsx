
function Footer() {
    return (
    <footer className="gradient-border-top">
        <div>
            <a className="link-brand" href="#">
                <img src="helm.webp" alt="Myths Logo"></img>
                <span>Legendaries</span>
            </a>
        </div>
        <div className="footer-section">
            <span className="footer-title">Sections</span>
            <nav>
                <a href="home">Home</a>
                <a href="index.html">Gallery</a>
                <a href="#">Quiz</a>
            </nav>
        </div>
        <nav className="footer-section">
            <a href="https://github.com/Riv0J" id="madeby">Made by Rivo</a>
            <a href="https://github.com/Riv0J/legendaries_react" target="_blank">
                <img src="icons/github.webp" alt="github" className="icon"></img>
                Github Repo
            </a>
            <span>
                This site does not use any cookies.
            </span>
        </nav>
    </footer>
    )
}

export default Footer
