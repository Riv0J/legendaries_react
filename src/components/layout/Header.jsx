import { Link } from 'react-router-dom'

function Header() {
    return (
    <header className="gradient-border">
        <Link className="link-brand" to="/">
            <img src="helm.webp" alt="Myths Logo"></img>
            <span>Legendaries</span>
        </Link>
        <nav>
            <Link to="/" id="anchor-home">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/quiz">Quiz</Link>
            <a href="https://github.com/Riv0J/legendaries_react" target="_blank">Repo</a>
        </nav>
    </header>
    )
}

export default Header
