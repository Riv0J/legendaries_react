import './headline.css'

function Headline({ text, showBanners, onFilterChange }) {
    const handleClick = (category) => {
        if (onFilterChange) onFilterChange(category);
    };

    return (
        <article className={`w-100 main-article bg-bricks gradient-border ${showBanners ? 'article-banners' : ''}`}>
            {showBanners && (
                <div id="banners-container">
                    <div className="banner" id="banner-all" onClick={() => handleClick("all")}>
                        <img src="textures/b_1.webp" alt="Banner All" />
                        <div className="banner-icon"></div>
                    </div>
                    <div className="banner" id="banner-beast" onClick={() => handleClick("beast")}>
                        <img src="textures/b_1.webp" alt="Banner Beast" />
                        <div className="banner-icon"></div>
                    </div>
                    <div className="banner" id="banner-human" onClick={() => handleClick("human")}>
                        <img src="textures/b_1.webp" alt="Banner Human" />
                        <div className="banner-icon"></div>
                    </div>
                </div>
            )}
            <h1>{text}</h1>
        </article>
    );
}

export default Headline;