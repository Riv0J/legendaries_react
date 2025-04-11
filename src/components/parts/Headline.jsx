import './headline.css'
function Headline({ text, showBanners }) {
    return (
        <article className={`w-100 main-article bg-bricks gradient-border ${showBanners ? 'article-banners' : ''}`}>
            {showBanners && (
                <div id="banners-container">
                    <div className="banner" id="banner-all">
                        <img src="/src/assets/textures/b_1.webp" alt="" />
                        <div className="banner-icon"></div>
                    </div>
                    <div className="banner" id="banner-beast">
                        <img src="/src/assets/textures/b_1.webp" alt="" />
                        <div className="banner-icon"></div>
                    </div>
                    <div className="banner" id="banner-human">
                        <img src="/src/assets/textures/b_1.webp" alt="" />
                        <div className="banner-icon"></div>
                    </div>
                </div>
            )}
            <h1>{text}</h1>
        </article>
    );
}
export default Headline