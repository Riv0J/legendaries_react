
function Footer() {
    return (
    <footer class="gradient-border-top">
        <div>
            <a class="link-brand" href="#">
                <img src="helm.webp" alt="Myths Logo"></img>
                <span>Legendaries</span>
            </a>
        </div>
        <div class="footer-section">
            <span class="footer-title">Sections</span>
            <nav>
                <a href="home">Home</a>
                <a href="index.html">Gallery</a>
                <a href="#">Quiz</a>
            </nav>
        </div>
        <nav class="footer-section">
            <a href="https://github.com/Riv0J" id="madeby">Made by Rovani</a>
            <a href="https://github.com/Riv0J/legendaries_demo" target="_blank">
                <img src="icons/github.webp" alt="github" class="icon"></img>
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
