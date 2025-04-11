
function Header() {
    return (
    <header className="gradient-border">
        <a className="link-brand" href="#">
            <img src="helm.webp" alt="Myths Logo"></img>
            <span>Legendaries</span>
        </a>
        <nav>
            <a href="home" id="anchor-home">Home</a>
            <a href="index.html">Gallery</a>
            <a href="#">Quiz</a>
            <a href="https://github.com/Riv0J/legendaries_demo" target="_blank">Repo</a>
        </nav>
    </header>
    )
}

export default Header
